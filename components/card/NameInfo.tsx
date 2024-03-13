import { StyleSheet, Text, View } from "react-native";
import { useTheme } from "../../context/ThemeContext";

type Props = {
  englishName: string;
  romajiName: string;
};

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

export const NameInfo = ({ englishName, romajiName }: Props) => {
  const { colors } = useTheme();

  return (
    <View
      style={[styles.container, { backgroundColor: colors.backgroundCard }]}
    >
      <Text style={[styles.text, { color: colors.backgroundCardText }]}>
        {englishName ?? romajiName}
      </Text>
    </View>
  );
};
