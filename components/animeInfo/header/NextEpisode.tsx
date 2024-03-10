import { StyleSheet, Text, View } from "react-native";
import { useTheme } from "../../../context/ThemeContext";
import { timeUntil } from "../../../utils/dateUtils";

const styles = StyleSheet.create({
  container: {
    borderRadius: 4,
    gap: 8,
    height: 75,
    padding: 8,
  },
  flexRow: { flexDirection: "row", gap: 4 },
  title: { fontSize: 12, fontWeight: "bold" },
  textContainer: { flex: 1, justifyContent: "center" },
  text: { fontSize: 14 },
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
      <Text style={[styles.title, { color: colors.text }]}>Countdown</Text>
      <View style={styles.textContainer}>
        <Text style={[styles.text, { color: colors.text }]}>
          Episode {episode} in {timeUntil(new Date(airingAt))}
        </Text>
      </View>
    </View>
  );
};
