import { addClock, getAllClocksFromFile } from "../service/clock";
import { Clock } from "../types/clock";

class ClockController {
  add = (clock: Clock) => {
    addClock(clock);
  };

  getAll = () => {
    return getAllClocksFromFile();
  };
}

export const clockController = new ClockController();
