import { StyleSheet, Text, View } from "react-native";
import { useTheme } from "../../../context/ThemeContext";
import { formatTimeTo24Hour } from "../../../utils/dateUtils";
import { EpisodeInfoProps } from "../Index.types";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 2,
  },
  text: {
    fontSize: 12,
  },
});

export const EpisodeInfo = ({ airingAt, episode }: EpisodeInfoProps) => {
  const { colors } = useTheme();

  return (
    <View
      style={[styles.container, { backgroundColor: colors.backgroundCard }]}
      testID="episodeInfo"
    >
      <Text style={[styles.text, { color: colors.backgroundCardText }]}>
        Episode {episode}
      </Text>
      <Text style={[styles.text, { color: colors.backgroundCardText }]}>
        {formatTimeTo24Hour(airingAt)}
      </Text>
    </View>
  );
};
