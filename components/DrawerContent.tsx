// DrawerContent.js
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import {
  DrawerDescriptorMap,
  DrawerNavigationHelpers,
} from "@react-navigation/drawer/lib/typescript/src/types";
import { DrawerNavigationState, ParamListBase } from "@react-navigation/native";
import { Switch, Text, View } from "react-native";
import { useTheme } from "../context/ThemeContext";

type Props = {
  state: DrawerNavigationState<ParamListBase>;
  navigation: DrawerNavigationHelpers;
  descriptors: DrawerDescriptorMap;
};

const DrawerContent = (props: Props) => {
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
            <Switch value={isDarkTheme} onValueChange={toggleTheme} />
          </View>
        )}
        onPress={() => {}}
      />
    </DrawerContentScrollView>
  );
};

export default DrawerContent;
