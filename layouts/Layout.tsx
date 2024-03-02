import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import ThemeButton from "../components/ThemeButton";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <ScrollView style={styles.root}>
      <View>
        <View>
          <ThemeButton />
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
  footer: {
    alignItems: "center",
    padding: 16,
  },
});

export default Layout;
