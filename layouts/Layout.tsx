import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useTheme } from "../context/ThemeContext";
import { StatusBar } from "expo-status-bar";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  const { isDarkTheme, toggleTheme, colors } = useTheme();

  return (
    <ScrollView style={[styles.root, { backgroundColor: colors.background }]}>
      <StatusBar
        style={isDarkTheme ? "light" : "dark"}
        backgroundColor={colors.background}
      />
      <View>
        <View style={styles.titleContainer}>
          <Text style={{ color: colors.text, fontSize: 20 }}>
            ANIME SCHEDULE
          </Text>
          <TouchableOpacity onPress={toggleTheme}>
            <MaterialCommunityIcons
              name={isDarkTheme ? "moon-waning-crescent" : "weather-sunny"}
              size={20}
              color={colors.text}
            />
          </TouchableOpacity>
        </View>
        <View>{children}</View>
        <View style={styles.footer}>
          <Text></Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  titleContainer: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    height: 50,
    paddingLeft: 16,
    paddingRight: 16,
  },
  footer: {
    alignItems: "center",
    padding: 16,
  },
});

export default Layout;
