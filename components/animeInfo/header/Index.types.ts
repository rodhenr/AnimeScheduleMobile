import {
  CountriesType,
  NextEpisodeType,
  TitlesType,
} from "../../../api/queries/AnimeInfoQueries.types";

export type TitlesProps = {
  titles: TitlesType;
};

export type RatingProps = {
  score: number;
};

export type NextEpisodeProps = {
  airingAt: string;
  episode: number;
};

export type FollowButtonProps = {
  animeId: number;
  animeName: string;
};

export type FlagProps = {
  flagName: CountriesType;
};

export type HeaderProps = {
  countryOfOrigin: CountriesType;
  cover: string;
  id: number;
  name: string;
  nextEpisodeInfo: NextEpisodeType | null;
  score: number;
  titles: TitlesType;
};
