import { StyleSheet, Text, View } from "react-native";
import { useTheme } from "../../../../context/ThemeContext";

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

type Props = {
  info: string | number | null;
  title: string;
};

export const InfoItem = ({ info, title }: Props) => {
  const { colors } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.title, { color: colors.text }]}>{title}</Text>
      <Text style={[styles.text, { color: colors.text }]}>{info ?? "-"}</Text>
    </View>
  );
};
