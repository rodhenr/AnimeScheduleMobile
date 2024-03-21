import { StyleSheet, Text, View } from "react-native";
import { TitlesType } from "../../../api/queries/AnimeInfoQueries.types";
import { useTheme } from "../../../context/ThemeContext";

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

type Props = {
  titles: TitlesType;
};

export const Titles = ({ titles }: Props) => {
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
