import {
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { IApiData, RootStackParamList } from "../../interfaces/interfaces";
import { EpisodeInfo } from "./EpisodeInfo";
import { NameInfo } from "./NameInfo";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useTheme } from "../../context/ThemeContext";

type Props = {
  data: IApiData;
  isFollowing: boolean;
};

const styles = StyleSheet.create({
  container: { borderRadius: 4, opacity: 0.9 },
  imageBackground: {
    borderRadius: 4,
    height: 150,
    justifyContent: "space-between",
    width: "100%",
  },
});

type AnimeCardNavigationProp = StackNavigationProp<RootStackParamList, "Anime">;

export const AnimeCard = ({ data, isFollowing }: Props) => {
  const navigation = useNavigation<AnimeCardNavigationProp>();
  const { colors } = useTheme();

  return (
    <View
      style={[
        styles.container,
        isFollowing && {
          borderColor: colors.backgroundFollowing,
          borderWidth: 4,
        },
      ]}
    >
      <TouchableOpacity
        onPress={() => navigation.navigate("Anime", { id: data.mediaId })}
      >
        <ImageBackground
          source={{
            uri: data.media.coverImage,
          }}
          alt={`${data.media.title.english} cover`}
          style={styles.imageBackground}
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
    </View>
  );
};
