import { StyleSheet, View } from "react-native";
import { Description } from "./Description";
import { Details } from "./Details";
import Genres from "./Genres";
import { InformationProps } from "./Index.types";

const styles = StyleSheet.create({ container: { gap: 8 } });

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
}: InformationProps) => {
  return (
    <View style={styles.container}>
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
