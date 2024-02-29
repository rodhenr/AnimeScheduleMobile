import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import ThemeButton from "./components/ThemeButton";
import AnimeCard from "./components/AnimeCard/Index";
import CurrentTime from "./components/CurrentTime";
import { fakeData } from "./data/fakeData";

export default function App() {
  return (
    <View style={styles.container}>
      <ThemeButton />
      <CurrentTime />
      {fakeData.map((i) => (
        <AnimeCard data={i} key={i.id} />
      ))}
      <StatusBar style="inverted" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#262626",
    flex: 1,
    gap: 16,
    paddingTop: 32,
  },
});
