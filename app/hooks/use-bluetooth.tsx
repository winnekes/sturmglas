import { useState } from "react";

const serviceUuid = process.env.NEXT_PUBLIC_BLUETOOTH_SERVICE_UUID ?? "";
const commandCharacteristicUuid =
  process.env.NEXT_PUBLIC_BLUETOOTH_COMMAND_UUID ?? "";
const faceCharacteristicUuid =
  process.env.NEXT_PUBLIC_BLUETOOTH_FACE_UUID ?? "";

export const useBluetooth = () => {
  const [connection, setConnection] = useState<
    BluetoothRemoteGATTServer | undefined
  >(undefined);
  const [service, setService] = useState<
    BluetoothRemoteGATTService | undefined
  >(undefined);
  const [deviceName, setDeviceName] = useState("");
  const [deviceFace, setDeviceFace] = useState("");
  const [error, setError] = useState(false);

  const textEncoder = new TextEncoder();

  console.log({ connection, service, deviceName });
  const connect = async () => {
    try {
      const device = await navigator.bluetooth.requestDevice({
        acceptAllDevices: false,
        filters: [{ services: [serviceUuid] }],
      });

      const server = await device.gatt?.connect();
      if (server) {
        setConnection(server);
        const primaryService = await server.getPrimaryService(serviceUuid);
        if (primaryService) {
          setService(primaryService);
        }
      }
      setError(false);
    } catch (e) {
      setError(e);
    }
  };

  const sendCommand = async (command: string) => {
    try {
      if (connection && service) {
        const commandCharacteristic = await service.getCharacteristic(
          commandCharacteristicUuid
        );

        await commandCharacteristic.writeValue(textEncoder.encode(command));
      }
      setError(false);
    } catch (e) {
      setError(e);
    }
  };

  const restart = async () => {
    try {
      if (connection && service) {
        await sendCommand("RESTART");
        // setConnection(undefined);
        // setService(undefined);
        // // await connect();
      }
      setError(false);
    } catch (e) {
      setError(e);
    }
  };

  const disconnect = () => {
    if (connection) {
      connection.disconnect();
      setService(undefined);
      setConnection(undefined);
    }
  };

  const changeName = async (name: string) => {
    try {
      if (connection && service) {
        await sendCommand(`RENAME ${name}`);
        setDeviceName(name);
      }
      setError(false);
    } catch (e) {
      setError(e);
    }
  };

  const changeMood = async () => {
    try {
      if (connection && service) {
        const characteristic = await service.getCharacteristic(
          faceCharacteristicUuid
        );

        // TODO buffer
        // send command
      }
      setError(false);
    } catch (e) {
      setError(e);
    }
  };

  return {
    connect,
    restart,
    disconnect,
    changeName,
    changeMood,
    deviceName,
    state: { connected: !!connection && !!service, error },
  };
};
