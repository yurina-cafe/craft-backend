import type { Activity } from "./activity";
import { CraftFormatTime } from "./time";

export interface NaturalDay {
  date: CraftFormatTime;
  note: string;
  /**
   * 心情
   */
  feeling: Feeling;
  /**
   * 当天的活动
   */
  activities: Activity[];
}

export enum Feeling {
  HAPPY = "HAPPY",
  SAD = "SAD",
  NEUTRAL = "NEUTRAL",
  STRESSED = "STRESSED",
  ANGRY = "ANGRY",
}
