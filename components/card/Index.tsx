import { ImageBackground, StyleSheet } from "react-native";
import { IApiData } from "../../interfaces/interfaces";
import { EpisodeInfo } from "./EpisodeInfo";
import { NameInfo } from "./NameInfo";

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

export const AnimeCard = ({ data }: Props) => {
  return (
    <ImageBackground
      source={{
        uri: data.media.coverImage.extraLarge,
      }}
      alt="animeImage"
      style={styles.container}
    >
      <EpisodeInfo airingAt={new Date(data.airingAt)} episode={data.episode} />
      <NameInfo
        englishName={data.media.title.english}
        romajiName={data.media.title.romaji}
      />
    </ImageBackground>
  );
};
