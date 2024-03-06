export interface IApiData {
  mediaId: number;
  episode: number;
  airingAt: string;
  media: IMedia;
}

export interface IMedia {
  url: string;
  title: ITitles;
  countryOfOrigin: string;
  coverImage: ICoverImages;
  format: string;
  type: string;
}

interface ITitles {
  romaji: string;
  english: string;
}

interface ICoverImages {
  extraLarge: string;
}

export enum DaysOfWeek {
  Sunday = 0,
  Monday = 1,
  Tuesday = 2,
  Wednesday = 3,
  Thursday = 4,
  Friday = 5,
  Saturday = 6,
}

export enum dateActionType {
  Increment,
  Decrement,
}

export interface IColors {
  text: string;
  background: string;
  backgroundSecondary: string;
  backgroundCard: string;
}

export interface IModalData {
  name: string;
  options: IModalOption[];
  allowMultipleSelection: boolean;
}

export interface IModalOption {
  option: string;
  isSelected: boolean;
}
