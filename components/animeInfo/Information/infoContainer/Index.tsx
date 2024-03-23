import { StyleSheet, Text, View } from "react-native";
import { useTheme } from "../../../../context/ThemeContext";
import { InfoContainerProps } from "./Index.types";

const styles = StyleSheet.create({
  container: { gap: 4 },
  childrenContainer: {
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 12,
  },
  title: { fontWeight: "bold" },
});

export const InfoContainer = ({ children, title }: InfoContainerProps) => {
  const { colors } = useTheme();

  return (
    <View style={[styles.container]} testID="infoContainer">
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
