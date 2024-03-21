import { StyleSheet, Text, View } from "react-native";
import { useTheme } from "../../context/ThemeContext";
import { getDayOfTheWeek } from "../../utils/dateUtils";
import { DateInfoProps } from "./Index.types";

const styles = StyleSheet.create({
  dateContainer: {
    alignItems: "center",
  },
  dateFont: {
    fontSize: 16,
  },
});

export const DateInfo = ({ date }: DateInfoProps) => {
  const { colors } = useTheme();

  return (
    <View style={styles.dateContainer}>
      <Text style={[styles.dateFont, { color: colors.text }]}>
        {date.toLocaleDateString()}
      </Text>
      <Text style={{ color: colors.text }}>{getDayOfTheWeek(date)}</Text>
    </View>
  );
};
