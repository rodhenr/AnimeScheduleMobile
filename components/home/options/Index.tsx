import { StyleSheet, View } from "react-native";
import {
  DateActionType,
  incrementOrDecrementDate,
} from "../../../utils/dateUtils";
import { DateSelector } from "../../dateSelector/Index";
import { Filter } from "../../filter/Index";
import { HomeOptionsProps } from "./Index.types";

const styles = StyleSheet.create({
  filterContainer: {
    flexDirection: "row",
    gap: 16,
    justifyContent: "space-between",
  },
});

export const HomeOptions = ({
  changeFilterModalState,
  date,
  setDate,
}: HomeOptionsProps) => {
  const updateDate = (type: DateActionType): void => {
    if (date !== null) {
      const newDate = incrementOrDecrementDate(date, type);

      setDate(newDate);
    }
  };

  return (
    <View style={styles.filterContainer}>
      {date && <DateSelector date={date!} updateDate={updateDate} />}
      <Filter onClick={changeFilterModalState} />
    </View>
  );
};
