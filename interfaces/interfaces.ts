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
  countryOfOrigin: ICountries;
}

export interface ITitles {
  romaji: string;
  english: string;
}

export type ICountries = "JP" | "CN" | "KR" | "TW";

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
  textActive: string;
  background: string;
  backgroundSecondary: string;
  backgroundCard: string;
  backgroundCardText: string;
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
  UserList: undefined;
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
  countryOfOrigin: ICountries;
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
