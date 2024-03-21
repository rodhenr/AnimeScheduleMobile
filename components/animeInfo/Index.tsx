import { StyleSheet, View } from "react-native";
import { Information } from "./Information/Index";
import { Header } from "./header/Index";
import { AnimeInfoType } from "../../api/queries/AnimeInfoQueries.types";

const styles = StyleSheet.create({
  container: { gap: 16 },
});

type Props = {
  data: AnimeInfoType;
};

export const AnimeInfo = ({ data }: Props) => {
  return (
    <View style={styles.container}>
      <Header
        countryOfOrigin={data.countryOfOrigin}
        cover={data.coverImage}
        id={data.id}
        name={data.title.english ?? data.title.romaji}
        nextEpisodeInfo={data.nextAiringEpisode}
        score={data.averageScore}
        titles={data.title}
      />
      <Information
        description={data.description}
        endDate={data.endDate}
        episodes={data.episodes}
        genres={data.genres}
        season={data.season}
        seasonYear={data.seasonYear}
        source={data.source}
        startDate={data.startDate}
        status={data.status}
        type={data.type}
      />
    </View>
  );
};
