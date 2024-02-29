import { StyleSheet, Text, View } from "react-native";

type Props = {
  name: string;
};

function Name({ name }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{name}</Text>
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

export default Name;
