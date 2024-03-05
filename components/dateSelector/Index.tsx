import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { useTheme } from "../../context/ThemeContext";
import { dateActionType } from "../../interfaces/interfaces";
import { DateInfo } from "./DateInfo";
import { SelectorIcon } from "./SelectorIcon";

type Props = {
  updateDate: (type: dateActionType) => void;
  date: Date;
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    borderRadius: 8,
    flexDirection: "row",
    gap: 32,
    justifyContent: "space-between",
    paddingBottom: 8,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 8,
  },
});

export const DateSelector = ({ date, updateDate }: Props) => {
  const { colors } = useTheme();

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: colors.backgroundSecondary },
      ]}
    >
      <SelectorIcon
        iconName={"chevron-left"}
        type={dateActionType.Decrement}
        updateDate={updateDate}
      />
      <DateInfo date={date} />
      <SelectorIcon
        iconName={"chevron-right"}
        type={dateActionType.Increment}
        updateDate={updateDate}
      />
    </View>
  );
};
