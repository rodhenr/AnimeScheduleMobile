import { Image, StyleSheet, View } from "react-native";
import {
  CountriesType,
  NextEpisodeType,
  TitlesType,
} from "../../../api/queries/AnimeInfoQueries.types";
import { Flag } from "./Flag";
import { FollowButton } from "./FollowButton";
import { NextEpisode } from "./NextEpisode";
import { Rating } from "./Rating";
import { Titles } from "./Titles";

const styles = StyleSheet.create({
  container: { flex: 1, gap: 8 },
  innerContainer: { justifyContent: "space-between", flex: 1, gap: 16 },
  image: { borderRadius: 8, height: 350 },
  ratingCountryContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

type Props = {
  countryOfOrigin: CountriesType;
  cover: string;
  id: number;
  name: string;
  nextEpisodeInfo: NextEpisodeType | null;
  score: number;
  titles: TitlesType;
};

export const Header = ({
  countryOfOrigin,
  cover,
  id,
  name,
  nextEpisodeInfo,
  score,
  titles,
}: Props) => {
  return (
    <View style={styles.container}>
      <View>
        <Image src={cover} alt="cover" style={styles.image} />
      </View>
      <View style={styles.innerContainer}>
        <Titles titles={titles} />
        <View style={styles.ratingCountryContainer}>
          <Rating score={score} />
          <Flag flagName={countryOfOrigin} />
        </View>
        {nextEpisodeInfo && (
          <NextEpisode
            airingAt={nextEpisodeInfo.airingAt}
            episode={nextEpisodeInfo.episode}
          />
        )}
        <FollowButton animeId={id} animeName={name} />
      </View>
    </View>
  );
};
