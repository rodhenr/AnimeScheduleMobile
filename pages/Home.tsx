import { StyleSheet, View, Text } from "react-native";
import { fakeData } from "../data/fakeData";
import AnimeCard from "../components/AnimeCard/Index";
import CurrentTime from "../components/CurrentTime";
import { useGetDailySchedulesQuery } from "../api/queries/ScheduleQueries";

function Home() {
  const { data, error, isPending } = useGetDailySchedulesQuery(
    new Date().toLocaleDateString()
  );

  return (
    <View style={styles.innerContainer}>
      <CurrentTime />
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
    paddingTop: 16,
  },
  cardsContainer: {
    alignItems: "center",
    flex: 1,
    gap: 4,
  },
});

export default Home;
