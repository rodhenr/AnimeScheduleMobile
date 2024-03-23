import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { useTheme } from "../../../context/ThemeContext";
import { CloseIconProps } from "../Index.types";

export const CloseIcon = ({ onClick }: CloseIconProps) => {
  const { colors } = useTheme();

  return (
    <TouchableOpacity onPress={onClick} testID="closeButton">
      <MaterialCommunityIcons name="close" size={24} color={colors.text} />
    </TouchableOpacity>
  );
};
