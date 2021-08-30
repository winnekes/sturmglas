#include <Arduino.h>
#include <TFT_eSPI.h>
#include <BLEDevice.h>
#include <BLEUtils.h>
#include <BLEServer.h>
#include "Preferences.h"
#include <BLE2902.h>

#define STURMGLAS_SERVICE_UUID  "b307e52b-50af-4c61-b0a5-ebdba3306981"
#define FACE_UUID               "4f9f29cc-c550-4371-8598-f1511c627f04"
#define COMMAND_UUID            "0731450a-a46a-4fad-a701-23536d9525ee"

BLECharacteristic face(FACE_UUID, BLECharacteristic::PROPERTY_READ | BLECharacteristic::PROPERTY_WRITE);
BLECharacteristic command(COMMAND_UUID, BLECharacteristic::PROPERTY_READ | BLECharacteristic::PROPERTY_WRITE);

#define ADC_EN              14
#define ADC_PIN             34
#define BUZZER_PIN          27
#define BUZZER_CHANNEL      0

#define _RGB(r, g, b) ((r & 0xF8) << 8) | ((g & 0xFC) << 3) | (b >> 3)

/* CONFIG KEYS */
#define CFG_NAME      "NAME"
#define CFG_STATE     "STATE"
#define CFG_STATE_LEN "STATE_LEN"
#define CFG_BUZZ_ON   "BUZZ_ON"
#define CFG_BUZZ_OFF  "BUZZ_OFF"
#define CFG_BUZZ_CONF "BUZZ_CONF"
#define CFG_VERSION   "VERSION"

Preferences pref;

TFT_eSPI tft = TFT_eSPI(135, 240);

bool deviceConnected = false;
class MyServerCallbacks: public BLEServerCallbacks {
    void onConnect(BLEServer* pServer) {
        Serial.println("Connected");
        deviceConnected = true;
    };

    void onDisconnect(BLEServer* pServer) {
        Serial.println("Disconnected");
        deviceConnected = false;
    }
};

void toggle_tft(bool turn_on) {
    if (TFT_BL > 0) { // TFT_BL has been set in the TFT_eSPI library in the User Setup file TTGO_T_Display.h
        pinMode(TFT_BL, OUTPUT); // Set backlight pin to output mode
        if (turn_on)
            digitalWrite(TFT_BL, TFT_BACKLIGHT_ON);
        else
            digitalWrite(TFT_BL, TFT_BACKLIGHT_ON == HIGH ? LOW : HIGH);
    }
}

void clearScreen(int red = 0, int green = 0, int blue = 0) {
    tft.fillScreen(_RGB(red, green, blue));
    tft.setTextColor(TFT_WHITE, _RGB(red, green, blue));
    tft.setCursor(0,0);
}

uint8_t *buf = new uint8_t[483];

byte nibble(char c)
{
    if (c >= '0' && c <= '9')
        return c - '0';

    if (c >= 'a' && c <= 'f')
        return c - 'a' + 10;

    if (c >= 'A' && c <= 'F')
        return c - 'A' + 10;

    return 0;  // Not a valid hexadecimal character
}

void hexCharacterStringToBytes(byte *byteArray, const char* hexString)
{
    bool oddLength = strlen(hexString) & 1;

    int currentByte = 0;
    int byteIndex = 0;

    for (int charIndex = 0; charIndex < strlen(hexString); charIndex++)
    {
        bool oddCharIndex = charIndex & 1;

        if (oddLength)
        {
            // If the length is odd
            if (oddCharIndex)
            {
                // odd characters go in high nibble
                currentByte = nibble(hexString[charIndex]) << 4;
            }
            else
            {
                // Even characters go into low nibble
                currentByte |= nibble(hexString[charIndex]);
                byteArray[byteIndex++] = currentByte;
                currentByte = 0;
            }
        }
        else
        {
            // If the length is even
            if (!oddCharIndex)
            {
                // Odd characters go into the high nibble
                currentByte = nibble(hexString[charIndex]) << 4;
            }
            else
            {
                // Odd characters go into low nibble
                currentByte |= nibble(hexString[charIndex]);
                byteArray[byteIndex++] = currentByte;
                currentByte = 0;
            }
        }
    }
}

void init();

// for backwards compatibility
void migrate(int fromVersion) {
    if (fromVersion <= 1) {
        pref.end();
        pref.begin("mentali");
        pref.clear();
        pref.end();
        pref.begin("sturmglas");
    }
}

void setup() {
    Serial.begin(115200);
    delay(2000);
    Serial.println("\n\n\n**************************\n STURMGLAS DEVICE STARTED\n**************************\nInitializing...");

    Serial.println("Loading preferences...");
    pref.begin("sturmglas");

    if (!pref.isKey(CFG_VERSION) || VERSION > pref.getString(CFG_VERSION).toInt()) {
        Serial.println("Migrating settings...");
        migrate(pref.getString(CFG_VERSION, "0").toInt());
    }

    Serial.println("Initializing...");
    init();

    Serial.println("Starting screen...");
    tft.init();
    tft.setRotation(1);
    tft.setTextSize(3);
    clearScreen();
    toggle_tft(false);

    Serial.println("Starting BT...");
    BLEDevice::init(pref.getString(CFG_NAME).c_str());

    BLEServer *pServer = BLEDevice::createServer();
    pServer->setCallbacks(new MyServerCallbacks());

    BLEService *pService = pServer->createService(STURMGLAS_SERVICE_UUID);
    pService->addCharacteristic(&face);
    pService->addCharacteristic(&command);

    pref.getBytes(CFG_STATE, buf, pref.getInt(CFG_STATE_LEN));
    face.setValue(buf, pref.getInt(CFG_STATE_LEN));
    command.setValue("");

    pService->start();
    BLEAdvertising *pAdvertising = pServer->getAdvertising();
    pAdvertising->addServiceUUID(STURMGLAS_SERVICE_UUID);
    pAdvertising->setScanResponse(true);
    pAdvertising->setMinPreferred(0x06);
    pAdvertising->setMinPreferred(0x12);
    BLEDevice::startAdvertising();

    Serial.println("Setting up Buzzer...");
    ledcSetup(BUZZER_CHANNEL, 2000, 8);
    ledcAttachPin(BUZZER_PIN, BUZZER_CHANNEL);
}

int r = 0;
int g = 0;
int b = 0;
int pixelSize = 8;
int pixelsX = TFT_HEIGHT/pixelSize;
int pixelsY = TFT_WIDTH/pixelSize;
int bitmapLength = pixelsX * pixelsY;

void drawBitmap(uint8_t *bitmap, int offset, int face) {
    int idx = offset + face*bitmapLength/8;
    uint8_t bit = 0;
    for (int x = 0; x < pixelsY; x++) {
        for(int y = 0; y < pixelsX; y++) {
            bool pixelSet = (bitmap[idx] >> (7-bit)) & 1;
            uint32_t col = pixelSet ? TFT_WHITE : _RGB(r,g,b);
            tft.fillRect(y*pixelSize, x*pixelSize, pixelSize, pixelSize, col);
            bit++;
            if (bit == 8) {
                bit = 0;
                idx++;
            }
        }
    }
}


long refreshRate = 500;
int currentFace = 0;
int faces = 0;
void drawFace() {
    faces = buf[0];
    if (currentFace >= faces) {
        buf = face.getData();
        faces = buf[0];
        pref.putBytes(CFG_STATE, buf, 3 + faces*bitmapLength/8);
        refreshRate = buf[1] << 8 | buf[2];
        currentFace = 0;
    }
    drawBitmap(buf, 3, currentFace);
    currentFace++;
}

void buzz(int freq, int duration = 100) {
    ledcWriteTone(BUZZER_CHANNEL, freq);
    delay(duration);
    ledcWrite(BUZZER_CHANNEL, 0);
}

bool isDeviceOn = false;

void init() {
    pref.putString(CFG_VERSION, String(VERSION));

    if (!pref.isKey(CFG_NAME)) {
        pref.putString(CFG_NAME, "sturmglas");
    }

    if (!pref.isKey(CFG_STATE)) {
        hexCharacterStringToBytes(buf, "0203e800000000000000000000000400000838000070e00001c38000070400000800000000000000000102000002100000078000000000000000000000000000000000000000000000000400000838000070e00001c380000704000008000000000000000000780000021000001020000000000000000000000000");
        pref.putBytes(CFG_STATE, buf, 123);
        pref.putInt(CFG_STATE_LEN, 123);
    }

    if (!pref.isKey(CFG_BUZZ_ON)) {
        pref.putString(CFG_BUZZ_ON, "2000");
    }

    if (!pref.isKey(CFG_BUZZ_OFF)) {
        pref.putString(CFG_BUZZ_ON, "1500");
    }

    if (!pref.isKey(CFG_BUZZ_CONF)) {
        pref.putString(CFG_BUZZ_CONF, "1000");
    }
}

long opRate = 5000;
long lastOp = millis();

void loop() {
    long startTime = millis();
    if (deviceConnected) {
        if (!isDeviceOn) {
            buzz(pref.getString(CFG_BUZZ_ON).toInt());
            toggle_tft(true);
            isDeviceOn = true;
        }
        drawFace();
        if(millis() - lastOp >= opRate) {
            String cmd = String(command.getValue().c_str());
            if (cmd.length() > 0) {
                if (cmd.equals("RESTART")) {
                    ESP.restart();
                }
                if (cmd.startsWith("CONFIG ") || cmd.startsWith("CONFIGR ")) {
                    bool reboot = cmd.startsWith("CONFIGR ");
                    String config = cmd.substring(reboot ? 8 : 7);
                    String key = config.substring(0, config.indexOf(' '));
                    String value = config.substring(config.indexOf(' ') + 1);
                    pref.putString(key.c_str(), value);
                    Serial.printf("Config %s changed to %s\n", key.c_str(), value.c_str());
                    buzz(pref.getString(CFG_BUZZ_CONF).toInt());
                    if (reboot) {
                        delay(1000);
                        ESP.restart();
                    }
                }
                if (cmd.equals("RESET")) {
                    pref.clear();
                    ESP.restart();
                }
                command.setValue("");
            }

            lastOp = millis();
        }
    } else {
        if (isDeviceOn) {
            buzz(pref.getString(CFG_BUZZ_OFF).toInt());
            isDeviceOn = false;
            toggle_tft(false);
        }
    }
    delay(max(0ul,refreshRate -(millis()-startTime)));
}