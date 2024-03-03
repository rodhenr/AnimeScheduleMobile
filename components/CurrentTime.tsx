import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { getUserCurrentDate, getDayOfTheWeek } from "../utils/dateUtils";
import { dateActionType } from "../interfaces/interfaces";
import { MaterialCommunityIcons } from "@expo/vector-icons";

type Props = {
  updateDate: (type: dateActionType) => void;
  date: Date;
};

function CurrentTime({ date, updateDate }: Props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => updateDate(dateActionType.Decrement)}>
        <MaterialCommunityIcons name="chevron-left" size={32} color="#e6e6e6" />
      </TouchableOpacity>
      <View style={styles.dateContainer}>
        <Text style={[styles.dateRoot, styles.dateFont]}>
          {date.toLocaleDateString()}
        </Text>
        <Text style={styles.dateRoot}>{getDayOfTheWeek(date)}</Text>
      </View>
      <TouchableOpacity onPress={() => updateDate(dateActionType.Increment)}>
        <MaterialCommunityIcons
          name="chevron-right"
          size={32}
          color="#e6e6e6"
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#6a6a6a",
    borderRadius: 10,
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
  dateRoot: {
    color: "#e6e6e6",
  },
  dateFont: {
    fontSize: 16,
  },
});

export default CurrentTime;
