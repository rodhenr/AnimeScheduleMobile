import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { useTheme } from "../../context/ThemeContext";
import { SelectorIconProps } from "./Index.types";

export const SelectorIcon = ({
  iconName,
  updateDate,
  type,
}: SelectorIconProps) => {
  const { colors } = useTheme();

  return (
    <TouchableOpacity onPress={() => updateDate(type)}>
      <MaterialCommunityIcons name={iconName} size={32} color={colors.text} />
    </TouchableOpacity>
  );
};
