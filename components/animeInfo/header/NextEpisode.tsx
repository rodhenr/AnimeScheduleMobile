import { StyleSheet, Text, View } from "react-native";
import { useTheme } from "../../../context/ThemeContext";
import { timeUntil } from "../../../utils/dateUtils";

const styles = StyleSheet.create({
  container: {
    borderRadius: 4,
    flex: 1,
    height: 35,
    justifyContent: "center",
  },
  text: { fontSize: 14, textAlign: "center" },
});

type Props = {
  airingAt: string;
  episode: number;
};

export const NextEpisode = ({ airingAt, episode }: Props) => {
  const { colors } = useTheme();

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: colors.backgroundSecondary },
      ]}
    >
      <Text style={[styles.text, { color: colors.text }]}>
        Episode {episode} in {timeUntil(new Date(airingAt))}
      </Text>
    </View>
  );
};
