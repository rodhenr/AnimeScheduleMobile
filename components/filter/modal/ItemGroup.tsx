import { StyleSheet, Text, View } from "react-native";
import { useTheme } from "../../../context/ThemeContext";
import { IModalOption } from "../../../interfaces/interfaces";
import { Item } from "./Item";

type Props = {
  name: string;
  options: IModalOption[];
  allowMultipleSelection: boolean;
  updateOption: (
    categoryName: string,
    optionName: string,
    allowMultipleSelection: boolean,
    isSelected: boolean
  ) => void;
};

const styles = StyleSheet.create({
  modalOptionsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
});

export const ItemGroup = ({
  allowMultipleSelection,
  name,
  options,
  updateOption,
}: Props) => {
  const { colors } = useTheme();

  return (
    <View style={{ gap: 8 }}>
      <Text style={{ color: colors.text }}>{name}</Text>
      <View style={styles.modalOptionsContainer}>
        {options.map((op) => (
          <Item
            key={`${name}-${op.option}`}
            allowMultipleSelection={allowMultipleSelection}
            isSelected={op.isSelected}
            name={name}
            option={op.option}
            updateOption={updateOption}
          />
        ))}
      </View>
    </View>
  );
};
