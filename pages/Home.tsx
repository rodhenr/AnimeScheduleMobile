import { StyleSheet, View, Text } from "react-native";
import AnimeCard from "../components/AnimeCard/Index";
import CurrentTime from "../components/CurrentTime";
import { useGetDailySchedulesQuery } from "../api/queries/ScheduleQueries";
import { useEffect, useState } from "react";
import { incrementOrDecrementDate } from "../utils/dateUtils";
import { dateActionType } from "../interfaces/interfaces";
import Filter from "../components/Filter";
import FilterModal from "../components/FilterModal";

function Home() {
  const [date, setDate] = useState<Date>(new Date("2024-03-02"));
  const [openFilterModal, setOpenFilterModal] = useState(false);

  useEffect(() => {
    setDate(new Date());
  }, []);

  const { data, error, isPending } = useGetDailySchedulesQuery(date!);

  const updateDate = (type: dateActionType): void => {
    const newDate = incrementOrDecrementDate(date, type);

    setDate(newDate);
  };

  const changeFilterModalState = () => {
    setOpenFilterModal((op) => !op);
  };

  return (
    <View style={styles.innerContainer}>
      <Filter onClick={changeFilterModalState} />
      {openFilterModal && <FilterModal onClick={changeFilterModalState} />}
      <CurrentTime date={date!} updateDate={updateDate} />
      {isPending ? (
        <Text>Pending...</Text>
      ) : error ? (
        <Text>Error...</Text>
      ) : data ? (
        <View style={styles.cardsContainer}>
          {data.map((i) => (
            <AnimeCard data={i} key={i.mediaId} />
          ))}
        </View>
      ) : (
        <View>
          <Text>Unknown...</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  innerContainer: {
    alignItems: "center",
    gap: 16,
    padding: 16,
  },
  cardsContainer: {
    alignItems: "center",
    flex: 1,
    gap: 8,
  },
});

export default Home;
