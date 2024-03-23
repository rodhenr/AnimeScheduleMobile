import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StyleSheet, TouchableOpacity } from "react-native";
import { useTheme } from "../../context/ThemeContext";
import { FilterProps } from "./Index.types";

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    justifyContent: "center",
    paddingHorizontal: 16,
  },
});

export const Filter = ({ onClick }: FilterProps) => {
  const { colors } = useTheme();

  return (
    <TouchableOpacity
      onPress={onClick}
      style={[
        styles.container,
        ,
        { backgroundColor: colors.backgroundSecondary },
      ]}
      testID="filter"
    >
      <MaterialCommunityIcons name="cog" size={20} color={colors.text} />
    </TouchableOpacity>
  );
};
