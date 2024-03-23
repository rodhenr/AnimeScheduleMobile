import { StyleSheet, Text, View } from "react-native";
import { useTheme } from "../../../../context/ThemeContext";
import { InfoItemProps } from "./Index.types";

const styles = StyleSheet.create({
  container: {
    borderRadius: 4,
    flex: 1,
    gap: 4,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  title: { fontSize: 10, fontWeight: "bold" },
  text: { fontSize: 12 },
});

export const InfoItem = ({ info, title }: InfoItemProps) => {
  const { colors } = useTheme();

  return (
    <View
      style={[styles.container, { backgroundColor: colors.background }]}
      testID="infoItem"
    >
      <Text style={[styles.title, { color: colors.text }]}>{title}</Text>
      <Text style={[styles.text, { color: colors.text }]}>{info ?? "-"}</Text>
    </View>
  );
};
