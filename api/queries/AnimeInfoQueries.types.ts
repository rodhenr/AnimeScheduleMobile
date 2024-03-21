export type AnimeInfoType = {
  id: number;
  idMal: number;
  source: string;
  siteUrl: string;
  title: TitlesType;
  coverImage: string;
  format: string;
  type: string;
  countryOfOrigin: CountriesType;
  status: string;
  description: string;
  averageScore: number;
  season: string;
  seasonYear: number;
  episodes: number;
  startDate: string;
  endDate: string | null;
  genres: string[];
  nextAiringEpisode: NextEpisodeType | null;
};

export type TitlesType = {
  romaji: string;
  english: string;
};

export type CountriesType = "JP" | "CN" | "KR" | "TW";

export type NextEpisodeType = {
  airingAt: string;
  episode: number;
};
