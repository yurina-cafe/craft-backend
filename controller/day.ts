import { Activity } from "../types/activity";
import { Feeling, type NaturalDay } from "../types/day";
import { CraftFormatTime } from "../types/time";
import { getAllJsonFiles, saveJSON } from "../utils/file";
import { getFormatTimeString } from "../utils/time";
import fs from "fs";

export const getDay = (userName: string, dayName: string) => {
  return tryInitializeDay(userName, dayName);
};

export const getAllDays = (userName: string) => {
  const files = getAllJsonFiles(userName);
  return files.map((file) => {
    const ctx = fs.readFileSync(`data/${userName}/${file}`, "utf-8");
    if (ctx) {
      return JSON.parse(ctx) as NaturalDay;
    }
  });
};

interface RecentDays {
  today: NaturalDay;
  yesterday: NaturalDay;
  tomorrow: NaturalDay;
}
export const getRecentThreeDays = (userName: string): RecentDays => {
  const days: NaturalDay[] = [];

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);

  days.push(
    tryInitializeDay(userName, getFormatTimeString(yesterday.getTime()))
  );
  days.push(tryInitializeDay(userName, getFormatTimeString(Date.now())));
  days.push(
    tryInitializeDay(userName, getFormatTimeString(tomorrow.getTime()))
  );
  return {
    yesterday: days[0],
    today: days[1],
    tomorrow: days[2],
  };
};

export const setDayFeeling = (
  userName: string,
  dayName: string,
  feeling: Feeling
) => {
  const day = tryInitializeDay(userName, dayName);
  day.feeling = feeling;
  saveJSON(userName, dayName, day);
};

export const addDayActivity = (
  userName: string,
  dayName: string,
  activity: Activity
) => {
  const day = tryInitializeDay(userName, dayName);
  day.activities.push(activity);
  saveJSON(userName, dayName, day);
};

export const tryInitializeDay = (
  userName: string,
  dayName?: string
): NaturalDay => {
  const today: CraftFormatTime = dayName || getFormatTimeString(Date.now());

  if (fs.existsSync(`data/${userName}/${today}.json`)) {
    const ctx = fs.readFileSync(`data/${userName}/${today}.json`, "utf-8");
    if (ctx) {
      return JSON.parse(ctx) as NaturalDay;
    }
  }

  const day: NaturalDay = {
    date: today,
    note: "",
    feeling: Feeling.NEUTRAL,
    activities: [],
  };

  /**
   * fileName format is 2024-6-11
   */
  saveJSON(userName, today, day);
  return day;
};
