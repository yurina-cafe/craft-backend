import { ActivityType, Clock } from "../types/activity";
import { NaturalDay } from "../types/day";
import { getAllDays, getDay, getRecentThreeDays, setDayActivity } from "./day";

export const getAvaliableClock = (userName: string) => {
  const { yesterday, today } = getRecentThreeDays(userName);
  let clocks: Clock[] = [];

  const yesterdayClocks = getClocksSpecificDay(userName, yesterday);
  const todayClocks = getClocksSpecificDay(userName, today);
  clocks.push(...yesterdayClocks, ...todayClocks);

  clocks = clocks.filter((clock) => !clock.finished);
  return clocks;
};

export const completeClock = (
  userName: string,
  clockName: string,
  startTime: number,
  endTime: number
): Clock | undefined => {
  const days = getAllDays(userName);
  for (let i = 0; i < days.length; i++) {
    const day = days[i];
    for (let j = 0; j < day.activities.length; j++) {
      const activity = day.activities[j];
      if (
        activity.type === ActivityType.CLOCK &&
        activity.clock.name === clockName
      ) {
        activity.clock.start = startTime;
        activity.clock.end = endTime;
        activity.clock.finished = true;

        setDayActivity(userName, day.date, day.activities);
        return activity.clock;
      }
    }
  }
  return;
};

export const getClocksSpecificDay = (
  userName: string,
  day: string | NaturalDay
): Clock[] => {
  if (typeof day === "string") {
    day = getDay(userName, day);
  }
  const clocks: Clock[] = [];

  for (let i = 0; i < day.activities.length; i++) {
    const activity = day.activities[i];
    if (activity.type === ActivityType.CLOCK) {
      clocks.push(activity.clock);
    }
  }
  return clocks;
};
