import { ImageBackground, StyleSheet } from "react-native";
import TopBar from "./TopBar";
import Name from "./Name";
import Sources from "./Sources";
import { IApiData } from "../../interfaces/interfaces";

type Props = {
  data: IApiData;
};

function Index({ data }: Props) {
  return (
    <ImageBackground
      source={{
        uri: data.media.coverImages.extraLarge,
      }}
      alt="animeImage"
      style={styles.container}
    >
      <TopBar airingAt={data.airingAt} episode={data.episode} />
      <Name name={data.media.titles.english} />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 400,
    justifyContent: "space-between",
    width: 300,
  },
});

export default Index;
