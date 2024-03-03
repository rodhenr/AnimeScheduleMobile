import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { getUserCurrentDate, getDayOfTheWeek } from "../utils/dateUtils";
import { dateActionType } from "../interfaces/interfaces";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useTheme } from "../context/ThemeContext";

type Props = {
  updateDate: (type: dateActionType) => void;
  date: Date;
};

function CurrentTime({ date, updateDate }: Props) {
  const { colors } = useTheme();

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: colors.backgroundSecondary },
      ]}
    >
      <TouchableOpacity onPress={() => updateDate(dateActionType.Decrement)}>
        <MaterialCommunityIcons
          name="chevron-left"
          size={32}
          color={colors.text}
        />
      </TouchableOpacity>
      <View style={styles.dateContainer}>
        <Text style={[styles.dateFont, { color: colors.text }]}>
          {date.toLocaleDateString()}
        </Text>
        <Text style={{ color: colors.text }}>{getDayOfTheWeek(date)}</Text>
      </View>
      <TouchableOpacity onPress={() => updateDate(dateActionType.Increment)}>
        <MaterialCommunityIcons
          name="chevron-right"
          size={32}
          color={colors.text}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    borderRadius: 8,
    flexDirection: "row",
    gap: 32,
    justifyContent: "space-between",
    paddingBottom: 8,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 8,
  },
  dateContainer: {
    alignItems: "center",
  },
  dateFont: {
    fontSize: 16,
  },
});

export default CurrentTime;
