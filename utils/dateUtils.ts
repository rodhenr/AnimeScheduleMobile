import { DaysOfWeek, dateActionType } from "../interfaces/interfaces";

export const getUserCurrentDate = (): Date => new Date();

export const getDayOfTheWeek = (date: Date): string =>
  DaysOfWeek[date.getDay()];

export const incrementOrDecrementDate = (
  date: Date,
  type: dateActionType
): Date => {
  const newDate = new Date(date);

  if (type === dateActionType.Increment) {
    newDate.setDate(newDate.getDate() + 1); // Increment date by 1 day
  } else {
    newDate.setDate(newDate.getDate() - 1); // Decrement date by 1 day
  }

  return newDate;
};

export const formatTimeTo24Hour = (date: Date): string => {
  return date.toLocaleTimeString(undefined, {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
};

export const timeUntil = (targetDate: Date): string => {
  const now = new Date();

  const diff = targetDate.getTime() - now.getTime();

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

  return `${days}d ${hours}h ${minutes}m`;
};
