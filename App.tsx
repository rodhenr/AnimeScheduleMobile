import { StyleSheet, View } from "react-native";
import { SafeAreaView as SafeAreaViewAndroid } from "react-native-safe-area-context";
import Home from "./pages/Home";
import Layout from "./layouts/Layout";
import { queryClient } from "./common/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaViewAndroid style={{ flex: 1 }}>
        <View style={styles.container}>
          <Layout>
            <Home />
          </Layout>
        </View>
      </SafeAreaViewAndroid>
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
