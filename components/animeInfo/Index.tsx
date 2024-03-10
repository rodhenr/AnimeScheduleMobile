import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View } from "react-native";
import { useTheme } from "../../context/ThemeContext";
import { IAnimeInfo } from "../../interfaces/interfaces";
import { Information } from "./Information/Index";
import { Header } from "./header/Index";

const styles = StyleSheet.create({
  container: { gap: 8, marginHorizontal: 12 },
});

type Props = {
  data: IAnimeInfo;
};

export const AnimeInfo = ({ data }: Props) => {
  const navigation = useNavigation();
  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      <Feather
        name="arrow-left"
        size={32}
        onPress={() => navigation.goBack()}
        color={colors.text}
      />
      <Header
        cover={data.coverImage}
        nextEpisodeInfo={data.nextAiringEpisode}
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
