export interface Clock {
  /**
   * 开始时间戳
   */
  startTime: number;
  /**
   * 结束时间戳
   */
  endTime: number;
  /**
   * 关系的活动名字
   */
  targetActivityName: string;
}

export interface Activity {
  /**
   * 独特的名字
   */
  uniqueName: string;
}
