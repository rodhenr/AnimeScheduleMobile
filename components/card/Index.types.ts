import { ScheduleType } from "../../api/queries/ScheduleQueries.types";

export type NameInfoProps = {
  englishName: string;
  romajiName: string;
};

export type AnimeCardProps = {
  data: ScheduleType;
  isFollowing: boolean;
};

export type EpisodeInfoProps = {
  airingAt: Date;
  episode: number;
};