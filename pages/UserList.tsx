import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import {
  ActivityIndicator,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { AnimeCardNavigationProp } from "../components/card/Index";
import { useFollowedAnimesContext } from "../context/FollowedAnimesContext";
import { useTheme } from "../context/ThemeContext";

const styles = StyleSheet.create({
  container: { flex: 1 },
  title: { fontSize: 24, fontWeight: "bold" },
  listContainer: {
    flex: 1,
    gap: 4,
  },
  itemContainer: {
    alignItems: "center",
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    flex: 1,
    flexDirection: "row",
    gap: 24,
    justifyContent: "space-between",
    paddingVertical: 8,
  },
  clearButton: {
    alignSelf: "flex-end",
    borderRadius: 4,
    flexDirection: "row",
    elevation: 2,
    justifyContent: "center",
    padding: 4,
    width: 55,
    textAlign: "center",
  },
  clearButtonText: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
    textAlign: "center",
  },
});

type Props = {};

const UserList = ({}: Props) => {
  const { data, loading, removeItem, removeAll } = useFollowedAnimesContext();
  const { colors } = useTheme();
  const [isRemoving, setIsRemoving] = useState<boolean>(false);
  const navigation = useNavigation<AnimeCardNavigationProp>();

  const removeFollowedAnime = (id: number) => {
    try {
      setIsRemoving(true);
      removeItem(id);
    } catch (err) {
      console.log(err);
    } finally {
      setIsRemoving(false);
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      {loading || isRemoving ? (
        <ActivityIndicator
          size="large"
          color={colors.text}
          style={{ flex: 1 }}
        />
      ) : (
        <View style={styles.listContainer}>
          <View style={{ paddingHorizontal: 16 }}>
            <Pressable
              onPress={() => removeAll()}
              style={[
                styles.clearButton,
                { backgroundColor: colors.backgroundNotFollowing },
              ]}
            >
              <Text style={[styles.clearButtonText, { alignSelf: "flex-end" }]}>
                Clear
              </Text>
            </Pressable>
          </View>
          <FlatList
            contentContainerStyle={{
              padding: 16,
            }}
            data={data}
            renderItem={({ item }) => (
              <View key={item.id} style={styles.itemContainer}>
                <TouchableOpacity
                  onPress={() => navigation.navigate("Anime", { id: item.id })}
                  style={{ flexShrink: 1 }}
                >
                  <Text style={{ color: colors.text }}>{item.name}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => removeFollowedAnime(item.id)}>
                  <Feather name="x" size={24} color="red" />
                </TouchableOpacity>
              </View>
            )}
            keyExtractor={(item) => item.id.toString()}
          />
        </View>
      )}
    </View>
  );
};

export default UserList;
