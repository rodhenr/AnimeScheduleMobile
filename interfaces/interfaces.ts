export interface IApiData {
  mediaId: number;
  episode: number;
  airingAt: string;
  media: IMedia;
}

export interface IMedia {
  siteUrl: string;
  title: ITitles;
  coverImage: string;
  format: string;
  type: string;
  countryOfOrigin: string;
}

export interface ITitles {
  romaji: string;
  english: string;
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
  backgroundFollowing: string;
  backgroundNotFollowing: string;
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

export type RootStackParamList = {
  Home: undefined;
  Anime: { id: number };
};

export interface IAnimeInfo {
  id: number;
  idMal: number;
  source: string;
  siteUrl: string;
  title: ITitles;
  coverImage: string;
  format: string;
  type: string;
  countryOfOrigin: string;
  status: string;
  description: string;
  averageScore: number;
  season: string;
  seasonYear: number;
  episodes: number;
  startDate: string;
  endDate: string | null;
  genres: string[];
  nextAiringEpisode: INextEpisode | null;
}

export interface INextEpisode {
  airingAt: string;
  episode: number;
}
