import { Modal, ScrollView, StyleSheet, Text, View } from "react-native";
import { useTheme } from "../../../context/ThemeContext";
import { IModalData } from "../../../interfaces/interfaces";
import { CloseIcon } from "./CloseIcon";
import { ItemGroup } from "./ItemGroup";

type Props = {
  onClick: () => void;
  options: IModalData[];
  updateOption: (
    categoryName: string,
    optionName: string,
    allowMultipleSelection: boolean,
    isSelected: boolean
  ) => void;
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  container: {
    gap: 16,
    padding: 16,
  },
  titleContainer: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  modalDataContainer: {
    gap: 24,
  },
});

export const FilterModal = ({ options, updateOption, onClick }: Props) => {
  const { colors } = useTheme();

  return (
    <Modal style={styles.root}>
      <ScrollView style={[styles.root, { backgroundColor: colors.background }]}>
        <View
          style={[
            styles.root,
            styles.container,
            { backgroundColor: colors.background },
          ]}
        >
          <View style={styles.titleContainer}>
            <Text style={{ color: colors.text, fontSize: 24 }}>FILTERS</Text>
            <CloseIcon onClick={onClick} />
          </View>
          <View style={styles.modalDataContainer}>
            {options.map((opt: IModalData) => (
              <ItemGroup
                key={opt.name}
                allowMultipleSelection={opt.allowMultipleSelection}
                name={opt.name}
                options={opt.options}
                updateOption={updateOption}
              />
            ))}
          </View>
        </View>
      </ScrollView>
    </Modal>
  );
};
