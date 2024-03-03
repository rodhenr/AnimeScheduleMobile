import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import ThemeButton from "../components/ThemeButton";
import { MaterialCommunityIcons } from "@expo/vector-icons";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <ScrollView style={styles.root}>
      <View>
        <View style={styles.titleContainer}>
          <Text style={{ color: "white", fontSize: 20 }}>ANIME SCHEDULE</Text>
          <MaterialCommunityIcons
            name="moon-waning-crescent"
            size={20}
            color="white"
          />
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
    backgroundColor: "#4b4b4b",
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
