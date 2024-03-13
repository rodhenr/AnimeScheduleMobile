import { StyleSheet, Text, View } from "react-native";
import { useTheme } from "../../context/ThemeContext";
import { formatTimeTo24Hour } from "../../utils/dateUtils";

type Props = {
  airingAt: Date;
  episode: number;
};

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

export const EpisodeInfo = ({ airingAt, episode }: Props) => {
  const { colors } = useTheme();

  return (
    <View
      style={[styles.container, { backgroundColor: colors.backgroundCard }]}
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
