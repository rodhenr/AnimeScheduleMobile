import { StyleSheet, View, Text, Modal, TouchableOpacity } from "react-native";
import React from "react";
import { useTheme } from "../context/ThemeContext";

type Props = {
  onClick: () => void;
};

const FilterModal = ({ onClick }: Props) => {
  const { colors } = useTheme();

  return (
    <Modal style={styles.root}>
      <View style={[styles.root, { backgroundColor: colors.background }]}>
        <TouchableOpacity onPress={onClick}>
          <Text>X</Text>
        </TouchableOpacity>
        <View>
          <Text>FilterModal</Text>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  container: {},
});

export default FilterModal;
