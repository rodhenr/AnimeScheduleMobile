import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useTheme } from "../../context/ThemeContext";

type Props = {
  onClick: () => void;
};

const styles = StyleSheet.create({
  container: {
    alignSelf: "flex-end",
  },
  filterContainer: {
    alignItems: "center",
    borderRadius: 4,
    flexDirection: "row",
    gap: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
});

export const Filter = ({ onClick }: Props) => {
  const { colors } = useTheme();

  return (
    <TouchableOpacity onPress={onClick} style={styles.container}>
      <View
        style={[
          styles.filterContainer,
          { backgroundColor: colors.backgroundSecondary },
        ]}
      >
        <MaterialCommunityIcons name="cog" size={16} color={colors.text} />
        <Text style={{ color: colors.text }}>Filter</Text>
      </View>
    </TouchableOpacity>
  );
};
