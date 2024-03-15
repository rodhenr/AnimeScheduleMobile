import "react-native-gesture-handler";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import DrawerContent from "../components/DrawerContent";
import { useTheme } from "../context/ThemeContext";
import { RootStackParamList } from "../interfaces/interfaces";
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
          },
          headerTintColor: colors.text,
        }}
      >
        <Drawer.Screen component={Home} name="Home" />
        <Drawer.Screen component={UserList} name="UserList" />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default NavigationComponents;
