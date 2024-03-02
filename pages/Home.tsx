import { StyleSheet, View, Text } from "react-native";
import { fakeData } from "../data/fakeData";
import AnimeCard from "../components/AnimeCard/Index";
import CurrentTime from "../components/CurrentTime";

function Home() {
  return (
    <View style={styles.innerContainer}>
      <CurrentTime />
      <View style={styles.cardsContainer}>
        {fakeData.map((i) => (
          <AnimeCard data={i} key={i.mediaId} />
        ))}
      </View>
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
    gap: 16,
  },
});

export default Home;
