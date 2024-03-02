import { StyleSheet, Text, View } from "react-native";

type IProps = {
  airingAt: Date;
  episode: number;
};

function TopBar({ airingAt, episode }: IProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Episode {episode} - {airingAt.toLocaleTimeString()}
      </Text>
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
