import { type Clock } from "../types/clock";
import { readJSON, saveJSON } from "../utils/file";

const CLOCK_JSON_FILENAME = "clocks";

export const addClock = (clock: Clock) => {
  let clocks = getAllClocksFromFile();
  if (!clocks) {
    clocks = [];
  }

  clocks.push(clock);
  saveJSON<Clock[]>(CLOCK_JSON_FILENAME, clocks);
};

export const getAllClocksFromFile = (): Clock[] | null => {
  const clocks = readJSON<Clock[]>(CLOCK_JSON_FILENAME);
  return clocks;
};
