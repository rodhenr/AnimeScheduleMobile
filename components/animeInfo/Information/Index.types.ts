export type DescriptionProps = {
  description: string;
};

export type DetailsProps = {
  endDate: string | null;
  episodes: number;
  season: string;
  seasonYear: number;
  source: string;
  startDate: string;
  status: string;
  type: string;
};

export type GenresProps = { genres: string[] };

export type InformationProps = {
  description: string;
  endDate: string | null;
  episodes: number;
  season: string;
  seasonYear: number;
  source: string;
  startDate: string;
  status: string;
  type: string;
  genres: string[];
};
