import { ImageBackground, StyleSheet, TouchableOpacity } from "react-native";
import { IApiData, RootStackParamList } from "../../interfaces/interfaces";
import { EpisodeInfo } from "./EpisodeInfo";
import { NameInfo } from "./NameInfo";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

type Props = {
  data: IApiData;
};

const styles = StyleSheet.create({
  container: {
    height: 350,
    justifyContent: "space-between",
    width: 300,
  },
});

type AnimeCardNavigationProp = StackNavigationProp<RootStackParamList, "Anime">;

export const AnimeCard = ({ data }: Props) => {
  const navigation = useNavigation<AnimeCardNavigationProp>();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Anime", { id: data.mediaId })}
    >
      <ImageBackground
        source={{
          uri: data.media.coverImage,
        }}
        alt="animeImage"
        style={styles.container}
      >
        <EpisodeInfo
          airingAt={new Date(data.airingAt)}
          episode={data.episode}
        />
        <NameInfo
          englishName={data.media.title.english}
          romajiName={data.media.title.romaji}
        />
      </ImageBackground>
    </TouchableOpacity>
  );
};
