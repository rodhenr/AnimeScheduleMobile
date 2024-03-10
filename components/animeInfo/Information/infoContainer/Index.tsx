import { StyleSheet, Text, View } from "react-native";
import { useTheme } from "../../../../context/ThemeContext";

const styles = StyleSheet.create({
  container: { gap: 4 },
  childrenContainer: {
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 12,
  },
  title: { fontWeight: "bold" },
});

type Props = {
  children: React.ReactNode;
  title: string;
};

export const InfoContainer = ({ children, title }: Props) => {
  const { colors } = useTheme();

  return (
    <View style={[styles.container]}>
      <Text style={[styles.title, { color: colors.text }]}>{title}</Text>
      <View
        style={[
          styles.childrenContainer,
          { backgroundColor: colors.backgroundSecondary },
        ]}
      >
        {children}
      </View>
    </View>
  );
};
