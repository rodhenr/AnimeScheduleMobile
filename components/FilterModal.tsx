import {
  StyleSheet,
  View,
  Text,
  Modal,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { IModalData } from "../interfaces/interfaces";

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

const FilterModal = ({ options, updateOption, onClick }: Props) => {
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
            <TouchableOpacity onPress={onClick}>
              <MaterialCommunityIcons
                name="close"
                size={24}
                color={colors.text}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.modalDataContainer}>
            {options.map((opt) => (
              <View style={{ gap: 8 }}>
                <Text style={{ color: colors.text }}>{opt.name}</Text>
                <View style={styles.modalOptionsContainer}>
                  {opt.options.map((op) => (
                    <TouchableOpacity
                      onPress={() =>
                        updateOption(
                          opt.name,
                          op.option,
                          opt.allowMultipleSelection,
                          op.isSelected
                        )
                      }
                    >
                      <Text
                        style={[
                          styles.modalOption,
                          {
                            backgroundColor: op.isSelected
                              ? "#1790fa"
                              : "#bdbdbd",
                          },
                        ]}
                      >
                        {op.option}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </Modal>
  );
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
  modalOptionsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  modalOption: {
    borderRadius: 8,
    color: "#FFF",
    paddingHorizontal: 8,
    paddingVertical: 4,
    textAlign: "center",
  },
});

export default FilterModal;
