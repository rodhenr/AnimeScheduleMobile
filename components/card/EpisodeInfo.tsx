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
    height: 30,
    justifyContent: "space-between",
    paddingHorizontal: 16,
  },
  text: {
    color: "#FFF",
  },
});

export const EpisodeInfo = ({ airingAt, episode }: Props) => {
  const { colors } = useTheme();

  return (
    <View
      style={[styles.container, { backgroundColor: colors.backgroundCard }]}
    >
      <Text style={styles.text}>Episode {episode}</Text>
      <Text style={styles.text}>{formatTimeTo24Hour(airingAt)}</Text>
    </View>
  );
};
