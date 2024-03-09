import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView as SafeAreaViewAndroid } from "react-native-safe-area-context";
import { useTheme } from "../context/ThemeContext";

type Props = {
  children: React.ReactNode;
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

export const Layout = ({ children }: Props) => {
  const { isDarkTheme, toggleTheme, colors } = useTheme();

  return (
    <SafeAreaViewAndroid style={{ flex: 1 }}>
      <View style={styles.container}>
        <ScrollView
          style={[styles.root, { backgroundColor: colors.background }]}
        >
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
      </View>
    </SafeAreaViewAndroid>
  );
};
