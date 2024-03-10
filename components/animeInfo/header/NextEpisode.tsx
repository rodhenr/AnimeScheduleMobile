import { StyleSheet, Text, View } from "react-native";
import { useTheme } from "../../../context/ThemeContext";
import { timeUntil } from "../../../utils/dateUtils";

const styles = StyleSheet.create({
  container: { padding: 4 },
  flexRow: { flexDirection: "row", gap: 4 },
  text: {},
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
      <Text style={[styles.text, { color: colors.text }]}>Countdown</Text>
      <View>
        <Text style={[styles.text, { color: colors.text }]}>
          Episode {episode}
        </Text>
        <Text style={[styles.text, { color: colors.text }]}>
          {timeUntil(new Date(airingAt))}
        </Text>
      </View>
    </View>
  );
};
