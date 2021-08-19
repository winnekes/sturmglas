import { DateTime as time } from "luxon";

enum Time {
  MORNING = "morning",
  AFTERNOON = "afternoon",
  EVENING = "evening",
}

type TimeOfDay = {
  greeting: string;
  time: Time;
};

export const useTimeOfDay: () => TimeOfDay = () => {
  const timeNow = time.now();
  const greetings: { [key in Time]: string[] } = {
    morning: ["Good morning"],
    afternoon: ["Good afternoon"],
    evening: ["Good evening"],
  };

  // TODO return time of day
  const timeFrame =
    timeNow.hour < 12
      ? Time.MORNING
      : timeNow.hour < 18
      ? Time.AFTERNOON
      : Time.EVENING;

  // TODO: randomise
  const greeting = greetings[timeFrame][0];
  return { greeting, time: timeFrame };
};
