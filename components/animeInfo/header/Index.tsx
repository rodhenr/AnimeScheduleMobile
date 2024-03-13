import { Image, StyleSheet, View } from "react-native";
import { INextEpisode, ITitles } from "../../../interfaces/interfaces";
import { FollowButton } from "./FollowButton";
import { NextEpisode } from "./NextEpisode";
import { Titles } from "./Titles";
import { Stars } from "./Stars";

const styles = StyleSheet.create({
  container: { flex: 1, gap: 8 },
  innerContainer: { justifyContent: "space-between", flex: 1, gap: 16 },
  image: { borderRadius: 8, height: 350 },
});

type Props = {
  cover: string;
  id: number;
  nextEpisodeInfo: INextEpisode | null;
  score: number;
  titles: ITitles;
};

export const Header = ({
  cover,
  id,
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
        <Stars score={score} />
        {nextEpisodeInfo && (
          <NextEpisode
            airingAt={nextEpisodeInfo.airingAt}
            episode={nextEpisodeInfo.episode}
          />
        )}
        <FollowButton animeId={id} />
      </View>
    </View>
  );
};
