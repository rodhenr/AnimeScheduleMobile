import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import { Switch, Text, View } from "react-native";
import { useTheme } from "../../context/ThemeContext";
import { DrawerContentProps } from "./Index.types";

const DrawerContent = (props: DrawerContentProps) => {
  const { colors, isDarkTheme, toggleTheme } = useTheme();

  return (
    <DrawerContentScrollView
      {...props}
      style={[{ backgroundColor: colors.background, flex: 1 }]}
    >
      <DrawerItemList {...props} />
      <DrawerItem
        label={() => (
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={{ color: colors.text }}>Dark Mode</Text>
            <Switch value={isDarkTheme} onValueChange={() => toggleTheme()} />
          </View>
        )}
        onPress={() => {}}
      />
    </DrawerContentScrollView>
  );
};

export default DrawerContent;
