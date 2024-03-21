import { CountriesType, TitlesType } from "./AnimeInfoQueries.types";

export type ScheduleType = {
  mediaId: number;
  episode: number;
  airingAt: string;
  media: MediaType;
};

export type MediaType = {
  siteUrl: string;
  title: TitlesType;
  coverImage: string;
  format: string;
  type: string;
  countryOfOrigin: CountriesType;
};
