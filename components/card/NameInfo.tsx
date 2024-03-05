import { StyleSheet, Text, View } from "react-native";

type Props = {
  englishName: string;
  romajiName: string;
};

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

export const NameInfo = ({ englishName, romajiName }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{englishName ?? romajiName}</Text>
    </View>
  );
};
