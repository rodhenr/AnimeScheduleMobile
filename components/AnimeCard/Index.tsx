import { ImageBackground, StyleSheet } from "react-native";
import TopBar from "./TopBar";
import Name from "./Name";
import { IApiData } from "../../interfaces/interfaces";

type Props = {
  data: IApiData;
};

function Index({ data }: Props) {
  return (
    <ImageBackground
      source={{
        uri: data.media.coverImage.extraLarge,
      }}
      alt="animeImage"
      style={styles.container}
    >
      <TopBar airingAt={new Date(data.airingAt)} episode={data.episode} />
      <Name
        englishName={data.media.title.english}
        romajiName={data.media.title.romaji}
      />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 350,
    justifyContent: "space-between",
    width: 300,
  },
});

export default Index;
