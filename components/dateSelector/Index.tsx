import { StyleSheet, View } from "react-native";
import { useTheme } from "../../context/ThemeContext";
import { DateActionType } from "../../utils/dateUtils";
import { DateInfo } from "./info/Index";
import { DateSelectorProps } from "./Index.types";
import { SelectorIcon } from "./icon/Index";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    borderRadius: 8,
    flex: 1,
    flexDirection: "row",
    gap: 32,
    justifyContent: "space-between",
    paddingBottom: 8,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 8,
  },
});

export const DateSelector = ({ date, updateDate }: DateSelectorProps) => {
  const { colors } = useTheme();

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: colors.backgroundSecondary },
      ]}
      testID="dateSelector"
    >
      <SelectorIcon
        iconName={"chevron-left"}
        type={DateActionType.Decrement}
        updateDate={updateDate}
      />
      <DateInfo date={date} />
      <SelectorIcon
        iconName={"chevron-right"}
        type={DateActionType.Increment}
        updateDate={updateDate}
      />
    </View>
  );
};
