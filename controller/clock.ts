import { ActivityType, Clock } from "../types/activity";
import { NaturalDay } from "../types/day";
import { getDay, getRecentThreeDays } from "./day";

export const getAvaliableClock = (userName: string) => {
  const { yesterday, today } = getRecentThreeDays(userName);
  const clocks: Clock[] = [];

  const yesterdayClocks = getClocksSpecificDay(userName, yesterday);
  const todayClocks = getClocksSpecificDay(userName, today);
  clocks.push(...yesterdayClocks, ...todayClocks);

  return clocks;
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
