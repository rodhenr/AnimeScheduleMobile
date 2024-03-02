import { StyleSheet, View } from "react-native";
import { fakeData } from "../data/fakeData";
import AnimeCard from "../components/AnimeCard/Index";

export default function Home() {
  return (
    <View style={styles.container}>
      {fakeData.map((i) => (
        <AnimeCard data={i} key={i.mediaId} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#262626",
    flex: 1,
    gap: 16,
  },
});
