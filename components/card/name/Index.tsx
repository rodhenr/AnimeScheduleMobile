import { StyleSheet, Text, View } from "react-native";
import { useTheme } from "../../../context/ThemeContext";
import { NameInfoProps } from "../Index.types";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    padding: 4,
  },
  text: {
    fontSize: 12,
    textAlign: "justify",
  },
});

export const NameInfo = ({ englishName, romajiName }: NameInfoProps) => {
  const { colors } = useTheme();

  return (
    <View
      style={[styles.container, { backgroundColor: colors.backgroundCard }]}
      testID="nameInfo"
    >
      <Text style={[styles.text, { color: colors.backgroundCardText }]}>
        {englishName ?? romajiName}
      </Text>
    </View>
  );
};
