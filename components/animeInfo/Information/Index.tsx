import { View } from "react-native";
import { Description } from "./Description";
import { Details } from "./Details";
import Genres from "./Genres";

type Props = {
  description: string;
  endDate: string;
  episodes: number;
  season: string;
  seasonYear: number;
  source: string;
  startDate: string;
  status: string;
  type: string;
  genres: string[];
};

export const Information = ({
  description,
  endDate,
  episodes,
  genres,
  season,
  seasonYear,
  source,
  startDate,
  status,
  type,
}: Props) => {
  return (
    <View>
      <Description description={description} />
      <Details
        endDate={endDate}
        episodes={episodes}
        season={season}
        seasonYear={seasonYear}
        source={source}
        startDate={startDate}
        status={status}
        type={type}
      />
      <Genres genres={genres} />
    </View>
  );
};