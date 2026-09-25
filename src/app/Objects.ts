export interface GradInfo{
  Name: String,
  Gender: string,
  JobTitle: String,
  JobLoc: String,
  GradYear: String,
  Word: String,
  Pic: String
}

/** A single class-schedule thumbnail shown on the Schedule page. */
export interface ScheduleInfo{
  /** File name without extension, e.g. "G5B-MOE" -> assets/Files/Schedule/IMGS/G5B-MOE.JPG */
  file: string,
  /** Grade number 1-12, used to pick the "pages.schedule.grade_N" label. */
  grade: number,
  /**
   * Division suffix shown next to the grade, or "" when the grade has a
   * single schedule. Maps to "pages.schedule.<suffix>".
   */
  section: string
}

export interface BookInfo{
  Name: String,
  Author: String,
  Year: String,
  Pic: String,
  URL: String
}
