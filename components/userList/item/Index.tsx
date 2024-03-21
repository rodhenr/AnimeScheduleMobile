import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useTheme } from "../../../context/ThemeContext";
import { AnimeCardNavigationProp } from "../../card/Index";
import { AnimeItemProps } from "./Index.types";

const styles = StyleSheet.create({
  itemContainer: {
    alignItems: "center",
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    flex: 1,
    flexDirection: "row",
    gap: 24,
    justifyContent: "space-between",
    paddingVertical: 8,
  },
});

export const AnimeItem = ({ id, name, remove }: AnimeItemProps) => {
  const { colors } = useTheme();
  const navigation = useNavigation<AnimeCardNavigationProp>();

  return (
    <View key={id} style={styles.itemContainer}>
      <TouchableOpacity
        onPress={() => navigation.navigate("Anime", { id: id })}
        style={{ flexShrink: 1 }}
      >
        <Text style={{ color: colors.text }}>{name}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => remove(id)}>
        <Feather name="x" size={24} color="red" />
      </TouchableOpacity>
    </View>
  );
};
