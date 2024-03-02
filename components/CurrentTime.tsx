import { StyleSheet, Text, View } from "react-native";
import { getUserCurrentDate, getDayOfTheWeek } from "../utils/dateUtils";

function CurrentTime() {
  const date = getUserCurrentDate();

  return (
    <View style={styles.container}>
      <Text>{`<`}</Text>
      <View style={styles.dateContainer}>
        <Text>{date.toLocaleDateString()}</Text>
        <Text>{getDayOfTheWeek(date)}</Text>
      </View>
      <Text>{`>`}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
    gap: 16,
    justifyContent: "space-between",
  },
  dateContainer: {
    alignItems: "center",
    backgroundColor: "#FFF",
    padding: 8,
  },
});

export default CurrentTime;
