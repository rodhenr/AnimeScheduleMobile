import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { useTheme } from "../../../context/ThemeContext";

type Props = {
  onClick: () => void;
};

export const CloseIcon = ({ onClick }: Props) => {
  const { colors } = useTheme();

  return (
    <TouchableOpacity onPress={onClick}>
      <MaterialCommunityIcons name="close" size={24} color={colors.text} />
    </TouchableOpacity>
  );
};
