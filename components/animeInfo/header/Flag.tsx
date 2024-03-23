import { Image, StyleSheet, View } from "react-native";
import { FlagProps } from "./Index.types";

const styles = StyleSheet.create({
  container: {},
  image: {
    borderColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: 4,
    borderWidth: 1,
    height: 30,
    width: 40,
  },
});

export const Flag = ({ flagName }: FlagProps) => {
  let imagePath;

  switch (flagName) {
    case "JP":
      imagePath = require("../../../assets/JP.png");
      break;
    case "KR":
      imagePath = require("../../../assets/KR.png");
      break;
    case "CN":
      imagePath = require("../../../assets/CN.jpg");
      break;
    default:
      imagePath = require("../../../assets/icon.png");
      break;
  }

  return (
    <View style={styles.container} testID="flag">
      <Image source={imagePath} style={styles.image} />
    </View>
  );
};
