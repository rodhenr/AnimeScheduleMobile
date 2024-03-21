import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { ItemProps } from "../Index.types";

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
}: ItemProps) => {
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
