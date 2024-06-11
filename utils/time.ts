import { CraftFormatTime } from "../types/time";

export const getFormatTimeString = (time: number): CraftFormatTime => {
  const date = new Date(time);
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
};
