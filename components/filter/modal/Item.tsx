import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type Props = {
  name: string;
  option: string;
  allowMultipleSelection: boolean;
  isSelected: boolean;
  updateOption: (
    categoryName: string,
    optionName: string,
    allowMultipleSelection: boolean,
    isSelected: boolean
  ) => void;
};

const styles = StyleSheet.create({
  modalOption: {
    borderRadius: 8,
    color: "#FFF",
    paddingHorizontal: 8,
    paddingVertical: 4,
    textAlign: "center",
  },
});

export const Item = ({
  name,
  option,
  allowMultipleSelection,
  isSelected,
  updateOption,
}: Props) => {
  return (
    <TouchableOpacity
      onPress={() =>
        updateOption(name, option, allowMultipleSelection, isSelected)
      }
    >
      <Text
        style={[
          styles.modalOption,
          {
            backgroundColor: isSelected ? "#1790fa" : "#bdbdbd",
          },
        ]}
      >
        {option}
      </Text>
    </TouchableOpacity>
  );
};
