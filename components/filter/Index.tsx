import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StyleSheet, TouchableOpacity } from "react-native";
import { useTheme } from "../../context/ThemeContext";

type Props = {
  onClick: () => void;
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    justifyContent: "center",
    paddingHorizontal: 16,
  },
});

export const Filter = ({ onClick }: Props) => {
  const { colors } = useTheme();

  return (
    <TouchableOpacity
      onPress={onClick}
      style={[
        styles.container,
        ,
        { backgroundColor: colors.backgroundSecondary },
      ]}
    >
      <MaterialCommunityIcons name="cog" size={20} color={colors.text} />
    </TouchableOpacity>
  );
};
