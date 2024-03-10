import { StyleSheet, Text, View } from "react-native";
import { useTheme } from "../../../context/ThemeContext";
import { ITitles } from "../../../interfaces/interfaces";

const styles = StyleSheet.create({
  title: {
    textAlign: "left",
  },
  mainTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  secondaryTitle: { fontSize: 14 },
});

type Props = {
  titles: ITitles;
};

export const Titles = ({ titles }: Props) => {
  const { colors } = useTheme();

  return (
    <View>
      <Text style={[styles.title, styles.mainTitle, { color: colors.text }]}>
        {titles.english}
      </Text>
      <Text
        style={[styles.title, styles.secondaryTitle, { color: colors.text }]}
      >
        {titles.romaji}
      </Text>
    </View>
  );
};
