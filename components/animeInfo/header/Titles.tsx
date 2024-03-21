import { StyleSheet, Text, View } from "react-native";
import { useTheme } from "../../../context/ThemeContext";
import { TitlesProps } from "./Index.types";

const styles = StyleSheet.create({
  title: {
    textAlign: "left",
  },
  mainTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  secondaryTitle: { fontSize: 12 },
});

export const Titles = ({ titles }: TitlesProps) => {
  const { colors } = useTheme();

  return (
    <View>
      <Text style={[styles.title, styles.mainTitle, { color: colors.text }]}>
        {titles.english ?? titles.romaji}
      </Text>
      <Text
        style={[styles.title, styles.secondaryTitle, { color: colors.text }]}
      >
        {titles.romaji}
      </Text>
    </View>
  );
};
