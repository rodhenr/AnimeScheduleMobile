import { Image, StyleSheet, View } from "react-native";
import { INextEpisode, ITitles } from "../../../interfaces/interfaces";
import { FollowButton } from "./FollowButton";
import { NextEpisode } from "./NextEpisode";
import { Titles } from "./Titles";

const styles = StyleSheet.create({
  container: { flexDirection: "row", gap: 8 },
  innerContainer: { justifyContent: "space-between", flex: 1 },
});

type Props = {
  cover: string;
  id: number;
  nextEpisodeInfo: INextEpisode | null;
  titles: ITitles;
};

export const Header = ({ cover, id, nextEpisodeInfo, titles }: Props) => {
  return (
    <View style={styles.container}>
      <View>
        <Image src={cover} alt="cover" style={{ height: 250, width: 150 }} />
      </View>
      <View style={styles.innerContainer}>
        <Titles titles={titles} />
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
