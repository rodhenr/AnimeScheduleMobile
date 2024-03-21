import { Modal, ScrollView, StyleSheet, Text, View } from "react-native";
import { DefaultModalDataType } from "../../../common/defaultModalData.types";
import { useTheme } from "../../../context/ThemeContext";
import { FilterModalProps } from "../Index.types";
import { CloseIcon } from "./CloseIcon";
import { ItemGroup } from "./ItemGroup";

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

export const FilterModal = ({
  options,
  updateOption,
  onClick,
}: FilterModalProps) => {
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
            {options.map((opt: DefaultModalDataType) => (
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
