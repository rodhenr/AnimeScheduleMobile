import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { useTheme } from "../../context/ThemeContext";
import { dateActionType } from "../../interfaces/interfaces";

type Props = {
  iconName: "chevron-left" | "chevron-right";
  updateDate: (type: dateActionType) => void;
  type: dateActionType;
};

export const SelectorIcon = ({ iconName, updateDate, type }: Props) => {
  const { colors } = useTheme();

  return (
    <TouchableOpacity onPress={() => updateDate(type)}>
      <MaterialCommunityIcons name={iconName} size={32} color={colors.text} />
    </TouchableOpacity>
  );
};
