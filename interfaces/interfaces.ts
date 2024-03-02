export interface IApiData {
  mediaId: number;
  episode: number;
  airingAt: Date;
  media: IMedia;
}

export interface IMedia {
  url: string;
  titles: ITitles;
  coverImages: ICoverImages;
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
