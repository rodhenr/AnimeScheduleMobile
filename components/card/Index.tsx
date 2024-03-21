import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import {
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { useTheme } from "../../context/ThemeContext";
import { RootStackParamList } from "../../pages/Index";
import { EpisodeInfo } from "./EpisodeInfo";
import { AnimeCardProps } from "./Index.types";
import { NameInfo } from "./NameInfo";

const styles = StyleSheet.create({
  container: { borderRadius: 4, opacity: 0.9 },
  imageBackground: {
    borderRadius: 4,
    height: 150,
    justifyContent: "space-between",
    width: "100%",
  },
});

export type AnimeCardNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Anime"
>;

export const AnimeCard = ({ data, isFollowing }: AnimeCardProps) => {
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
