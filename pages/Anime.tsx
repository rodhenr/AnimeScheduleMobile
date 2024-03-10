import { RouteProp } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import { AnimeInfo } from "../components/animeInfo/Index";
import { IAnimeInfo, RootStackParamList } from "../interfaces/interfaces";
import { Layout } from "../layouts/Layout";

const testData: IAnimeInfo = {
  id: 151807,
  idMal: 52299,
  source: "OTHER",
  siteUrl: "https://anilist.co/anime/151807",
  title: {
    romaji: "Ore dake Level Up na Ken",
    english: "Solo Leveling",
  },
  coverImage:
    "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx151807-m1gX3iwfIsLu.png",
  format: "TV",
  type: "ANIME",
  countryOfOrigin: "JP",
  status: "RELEASING",
  description:
    "They say whatever doesn’t kill you makes you stronger, but that’s not the case for the world’s weakest hunter Sung Jinwoo. After being brutally slaughtered by monsters in a high-ranking dungeon, Jinwoo came back with the System, a program only he could see, that’s leveling him up in every way. Now, he’s inspired to discover the secrets behind his powers and the dungeon that spawned them.(Source: Crunchyroll)",
  averageScore: 82,
  season: "WINTER",
  seasonYear: 2024,
  episodes: 12,
  startDate: "2024-01-07T00:00Z",
  endDate: "2024-03-31T00:00Z",
  genres: ["Action", "Adventure", "Fantasy"],
  nextAiringEpisode: {
    airingAt: "2024-03-16T15:00:00Z",
    episode: 10,
  },
};

const styles = StyleSheet.create({
  container: { gap: 8, marginHorizontal: 12 },
});

type AnimeScreenRouteProp = RouteProp<RootStackParamList, "Anime">;

type Props = {
  route: AnimeScreenRouteProp;
};

export const Anime = ({ route }: Props) => {
  const { id } = route.params;

  return (
    <Layout>
      <AnimeInfo data={testData} />
    </Layout>
  );
};
