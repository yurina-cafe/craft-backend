import { CraftFormatTime } from "./time";

export enum ActivityType {
  CHECKLIST = "CHECKLIST", // 完成了某些任务
  CLOCK = "CLOCK", // 完成了一次番茄钟
  NOTE = "NOTE", // 纯文本笔记
}

export interface IActivity {
  type: ActivityType;
  created: CraftFormatTime;
}

export type Activity = ChecklistActivity | ClockActivity | NoteActivity;

export interface ChecklistActivity extends IActivity {
  type: ActivityType.CHECKLIST;
  name: string;
  finished: boolean;
}

export interface ClockActivity extends IActivity {
  type: ActivityType.CLOCK;
  clock: Clock;
}

export interface NoteActivity extends IActivity {
  type: ActivityType.NOTE;
  content: string;
}

export interface Clock {
  duration: number; // 持续时间 (分钟)
  name: string; // 番茄钟名称
  created: CraftFormatTime; // 创建时间

  /**
   * 结果数据
   */
  start?: number; // @Nesb01t todo
  end?: number; // @Nesb01t todo
  finished?: boolean; // 是否已完成
}
