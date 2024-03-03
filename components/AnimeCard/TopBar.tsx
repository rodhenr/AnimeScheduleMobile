import { StyleSheet, Text, View } from "react-native";

type IProps = {
  airingAt: Date;
  episode: number;
};

function TopBar({ airingAt, episode }: IProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Episode {episode}</Text>
      <Text style={styles.text}>
        {airingAt.toLocaleTimeString(undefined, {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        })}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.7)",
    flexDirection: "row",
    height: 30,
    justifyContent: "space-between",
    paddingLeft: 16,
    paddingRight: 16,
  },
  text: {
    color: "#FFF",
  },
});

export default TopBar;
