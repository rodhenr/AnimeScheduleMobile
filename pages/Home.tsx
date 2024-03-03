import { StyleSheet, View, Text } from "react-native";
import { fakeData } from "../data/fakeData";
import AnimeCard from "../components/AnimeCard/Index";
import CurrentTime from "../components/CurrentTime";
import { useGetDailySchedulesQuery } from "../api/queries/ScheduleQueries";
import { useEffect, useState } from "react";
import { incrementOrDecrementDate } from "../utils/dateUtils";
import { dateActionType } from "../interfaces/interfaces";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function Home() {
  const [date, setDate] = useState<Date>(new Date("2024-03-02"));
  console.log(date);

  useEffect(() => {
    setDate(new Date());
  }, []);

  const { data, error, isPending } = useGetDailySchedulesQuery(date!);

  const updateDate = (type: dateActionType): void => {
    const newDate = incrementOrDecrementDate(date, type);

    setDate(newDate);
  };

  return (
    <View style={styles.innerContainer}>
      <View style={styles.filterContainer}>
        <MaterialCommunityIcons name="cog" size={24} color="black" />
        <Text>Filter</Text>
      </View>
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
  filterContainer: {
    alignSelf: "flex-end",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 4,
    flexDirection: "row",
    gap: 4,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  filterText: {},
});

export default Home;
