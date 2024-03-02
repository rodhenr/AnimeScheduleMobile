import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, ScrollView } from "react-native";
import ThemeButton from "./components/ThemeButton";
import CurrentTime from "./components/CurrentTime";
import Home from "./pages/Home";

export default function App() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <ThemeButton />
        <CurrentTime />
        <Home />
        <StatusBar style="inverted" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 32,
    paddingTop: 32,
  },
});
