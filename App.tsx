import { StatusBar, SafeAreaView, StyleSheet, View } from "react-native";
import { SafeAreaView as SafeAreaViewAndroid } from "react-native-safe-area-context";
import Home from "./pages/Home";
import Layout from "./layouts/Layout";

export default function App() {
  return (
    <SafeAreaViewAndroid style={{ flex: 1 }}>
      <View style={styles.container}>
        <Layout>
          <Home />
        </Layout>
      </View>
    </SafeAreaViewAndroid>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
