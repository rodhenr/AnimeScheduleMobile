import { DaysOfWeek } from "../interfaces/interfaces";

export const getUserCurrentDate = (): Date => new Date();

export const getDayOfTheWeek = (date: Date): string =>
  DaysOfWeek[date.getDay()];
