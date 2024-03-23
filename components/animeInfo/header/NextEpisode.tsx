import { StyleSheet, Text, View } from "react-native";
import { useTheme } from "../../../context/ThemeContext";
import { timeUntil } from "../../../utils/dateUtils";
import { NextEpisodeProps } from "./Index.types";

const styles = StyleSheet.create({
  container: {
    borderRadius: 4,
    flex: 1,
    height: 35,
    justifyContent: "center",
  },
  text: { fontSize: 14, textAlign: "center" },
});

export const NextEpisode = ({ airingAt, episode }: NextEpisodeProps) => {
  const { colors } = useTheme();

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: colors.backgroundSecondary },
      ]}
      testID="nextEpisode"
    >
      <Text style={[styles.text, { color: colors.text }]}>
        Episode {episode} in {timeUntil(new Date(airingAt))}
      </Text>
    </View>
  );
};
