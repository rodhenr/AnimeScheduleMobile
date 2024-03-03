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
};

const defaultModalOptions: IModalData[] = [
  {
    name: "Country",
    options: [
      { option: "JP", isSelected: true },
      { option: "CN", isSelected: true },
      { option: "KR", isSelected: true },
      { option: "EN", isSelected: true },
    ],
    allowMultipleSelection: true,
  },
  {
    name: "Format",
    options: [
      { option: "ANIME", isSelected: true },
      { option: "MOVIE", isSelected: true },
    ],
    allowMultipleSelection: true,
  },
  {
    name: "Media Type",
    options: [
      { option: "TV", isSelected: true },
      { option: "TV SHORT", isSelected: true },
      { option: "ONA", isSelected: true },
      { option: "OVA", isSelected: true },
      { option: "SPECIAL", isSelected: true },
      { option: "MOVIE", isSelected: true },
    ],
    allowMultipleSelection: true,
  },
  {
    name: "Sort By",
    options: [
      { option: "Date", isSelected: true },
      { option: "Episode", isSelected: false },
    ],
    allowMultipleSelection: false,
  },
];

const FilterModal = ({ onClick }: Props) => {
  const [modalOptions, setModalOptions] =
    useState<IModalData[]>(defaultModalOptions);

  const { colors } = useTheme();

  const updateOption = (
    categoryName: string,
    optionName: string,
    allowMultipleSelection: boolean,
    isSelected: boolean
  ) => {
    setModalOptions((prevOptions) => {
      return prevOptions.map((category) => {
        if (category.name === categoryName) {
          return {
            ...category,
            options: category.options.map((option) => {
              if (option.option === optionName) {
                return {
                  ...option,
                  isSelected:
                    (!allowMultipleSelection && !isSelected) ||
                    allowMultipleSelection
                      ? !isSelected
                      : option.isSelected,
                };
              } else if (!allowMultipleSelection) {
                return { ...option, isSelected: false };
              }

              return option;
            }),
          };
        }

        return category;
      });
    });
  };

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
            {modalOptions.map((opt) => (
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
