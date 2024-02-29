import { StyleSheet, Text, View } from "react-native";

function TopBar() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Episode 9 - 12:00PM</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.7)",
    height: 30,
    justifyContent: "center",
  },
  text: {
    color: "#FFF",
    fontSize: 12,
  },
});

export default TopBar;
