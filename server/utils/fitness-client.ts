import { OAuth2Client } from "google-auth-library";
import { DateTime as time } from "luxon";
import * as util from "util";
const { google } = require("googleapis");

export const oauth2Client: OAuth2Client = new google.auth.OAuth2({
  clientId: process.env.GOOGLE_FITNESS_CLIENT_ID,
  clientSecret: process.env.GOOGLE_FITNESS_CLIENT_SECRET,
  redirectUri: process.env.GOOGLE_FITNESS_REDIRECT_URL,
  scopes: [
    "https://www.googleapis.com/auth/fitness.activity.read",
    "https://www.googleapis.com/auth/fitness.body.read",
    "https://www.googleapis.com/auth/fitness.heart_rate.read",
    "https://www.googleapis.com/auth/fitness.sleep.read",
  ],
});

export const fitnessClient = async (refreshToken: string) => {
  oauth2Client.setCredentials({
    refresh_token: refreshToken,
  });

  return google.fitness({ version: "v1", auth: oauth2Client });
};

export const getHeartRate = async (refreshToken: string) => {
  const client = await fitnessClient(refreshToken);

  const dataTypeName = "com.google.heart_rate.bpm";
  const bucketTimeInMs = 600000; // 1 minute
  const endTimeInMs = time.now();
  const startTimeInMs = endTimeInMs.minus(20 * bucketTimeInMs);

  console.log({ end: endTimeInMs.toString(), start: startTimeInMs.toString() });

  const result = await client.users.dataset.aggregate({
    userId: "me",
    requestBody: {
      aggregateBy: [
        {
          dataSourceId:
            "raw:com.google.heart_rate.bpm:com.xiaomi.hm.health:GoogleFitSyncHelper - heartrate",
        },
      ],
      bucketByTime: {
        durationMillis: bucketTimeInMs,
      },
      startTimeMillis: startTimeInMs.toMillis(),
      endTimeMillis: endTimeInMs.toMillis(),
    },
  });

  return result.data;
};

export const getSteps = async (refreshToken: string) => {
  const client = await fitnessClient(refreshToken);

  const dataTypeName = "com.google.step_count.delta";
  const durationInMs = 100000; // 24 hours
  const endTimeInMs = time.now();
  const startTimeInMs = endTimeInMs.startOf("day");

  console.log({ end: endTimeInMs.toString(), start: startTimeInMs.toString() });
  const result = await client.users.dataset.aggregate({
    userId: "me",
    requestBody: {
      aggregateBy: [
        {
          dataSourceId:
            "derived:com.google.step_count.delta:com.google.android.gms:estimated_steps",
        },
      ],
      bucketByTime: {
        durationMillis: durationInMs,
      },
      startTimeMillis: startTimeInMs.toMillis(),
      endTimeMillis: endTimeInMs.toMillis(),
    },
  });

  // const filtered = result.data.bucket[0].dataset[0].point.filter(data => data.originDataSourceId === "raw:com.google.step_count.delta:com.xiaomi.hm.health:GoogleFitSyncHelper- steps")
  //
  return result.data;
};
