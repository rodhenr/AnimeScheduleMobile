import { QueryClientProvider } from "@tanstack/react-query";
import { StyleSheet, View } from "react-native";
import { SafeAreaView as SafeAreaViewAndroid } from "react-native-safe-area-context";
import { queryClient } from "./common/queryClient";
import { ThemeProvider } from "./context/ThemeContext";
import { Layout } from "./layouts/Layout";
import { Home } from "./pages/Home";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <SafeAreaViewAndroid style={{ flex: 1 }}>
          <View style={styles.container}>
            <Layout>
              <Home />
            </Layout>
          </View>
        </SafeAreaViewAndroid>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
