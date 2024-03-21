import { View, Text, Pressable, StyleSheet } from "react-native";
import { useTheme } from "../../../context/ThemeContext";
import { ClearButtonProps } from "./Index.types";

const styles = StyleSheet.create({
  clearButton: {
    alignSelf: "flex-end",
    borderRadius: 4,
    flexDirection: "row",
    elevation: 2,
    justifyContent: "center",
    padding: 4,
    width: 55,
    textAlign: "center",
  },
  clearButtonText: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export const ClearButton = ({ removeAll }: ClearButtonProps) => {
  const { colors } = useTheme();

  return (
    <View style={{ paddingHorizontal: 16 }}>
      <Pressable
        onPress={() => removeAll()}
        style={[
          styles.clearButton,
          { backgroundColor: colors.backgroundNotFollowing },
        ]}
      >
        <Text style={[styles.clearButtonText, { alignSelf: "flex-end" }]}>
          Clear
        </Text>
      </Pressable>
    </View>
  );
};
