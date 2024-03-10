import { StyleSheet, Text, View } from "react-native";
import { useTheme } from "../../../../context/ThemeContext";

const styles = StyleSheet.create({
  container: { gap: 4 },
  childrenContainer: { paddingHorizontal: 12, paddingVertical: 8 },
});

type Props = {
  children: React.ReactNode;
  title: string;
};

export const InfoContainer = ({ children, title }: Props) => {
  const { colors } = useTheme();

  return (
    <View style={[styles.container]}>
      <Text style={[{ color: colors.text }]}>{title}</Text>
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
