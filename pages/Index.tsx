import "react-native-gesture-handler";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import DrawerContent from "../components/drawer/Index";
import { useTheme } from "../context/ThemeContext";
import { Anime } from "./Anime";
import { Home } from "./Home";
import UserFollowList from "./UserFollowList";

export type RootStackParamList = {
  Home: undefined;
  Anime: { id: number };
  Following: undefined;
};

const Drawer = createDrawerNavigator<RootStackParamList>();

const NavigationComponents = () => {
  const { colors } = useTheme();

  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        drawerContent={(props) => <DrawerContent {...props} />}
        screenOptions={{
          drawerStyle: { width: 200 },
          headerStyle: {
            backgroundColor: colors.background,
            elevation: 0,
          },
          headerTintColor: colors.text,
          drawerInactiveTintColor: colors.text,
        }}
      >
        <Drawer.Screen component={Home} name="Home" />
        <Drawer.Screen component={UserFollowList} name="Following" />
        <Drawer.Screen
          component={Anime}
          name="Anime"
          options={{
            drawerItemStyle: { display: "none", flex: 1 },
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default NavigationComponents;
