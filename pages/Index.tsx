import "react-native-gesture-handler";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import DrawerContent from "../components/DrawerContent";
import { useTheme } from "../context/ThemeContext";
import { RootStackParamList } from "../interfaces/interfaces";
import { Anime } from "./Anime";
import { Home } from "./Home";
import UserList from "./UserList";

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
        <Drawer.Screen component={UserList} name="Following" />
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
