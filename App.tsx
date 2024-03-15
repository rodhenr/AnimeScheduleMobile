import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { queryClient } from "./common/queryClient";
import { FollowedAnimesProvider } from "./context/FollowedAnimesContext";
import { ThemeProvider } from "./context/ThemeContext";
import { RootStackParamList } from "./interfaces/interfaces";
import { Anime } from "./pages/Anime";
import { Home } from "./pages/Home";

const Stack = createNativeStackNavigator<RootStackParamList>();
const Drawer = createDrawerNavigator<RootStackParamList>();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <FollowedAnimesProvider>
          <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home">
              <Drawer.Screen component={Home} name="Home" />
              <Drawer.Screen component={Anime} name="Anime" />
            </Drawer.Navigator>
          </NavigationContainer>
        </FollowedAnimesProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
