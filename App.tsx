import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./common/queryClient";
import { ThemeProvider } from "./context/ThemeContext";
import { RootStackParamList } from "./interfaces/interfaces";
import { Anime } from "./pages/Anime";
import { Home } from "./pages/Home";
import { FollowedAnimesProvider } from "./context/FollowedAnimesContext";

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <FollowedAnimesProvider>
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen
                component={Home}
                name="Home"
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Anime"
                component={Anime}
                options={{ headerShown: false }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </FollowedAnimesProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
