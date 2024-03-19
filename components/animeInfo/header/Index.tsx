import { Image, StyleSheet, View } from "react-native";
import {
  ICountries,
  INextEpisode,
  ITitles,
} from "../../../interfaces/interfaces";
import { FollowButton } from "./FollowButton";
import { NextEpisode } from "./NextEpisode";
import { Titles } from "./Titles";
import { Rating } from "./Rating";
import { Flag } from "./Flag";

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
  countryOfOrigin: ICountries;
  cover: string;
  id: number;
  name: string;
  nextEpisodeInfo: INextEpisode | null;
  score: number;
  titles: ITitles;
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
