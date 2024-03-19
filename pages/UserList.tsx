import { Feather } from "@expo/vector-icons";
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {
  IFollowedAnime,
  useFollowedAnimesContext,
} from "../context/FollowedAnimesContext";
import { useTheme } from "../context/ThemeContext";
import { FlatList } from "react-native-gesture-handler";
import { useState } from "react";

const styles = StyleSheet.create({
  container: { flex: 1, gap: 24, padding: 16 },
  title: { fontSize: 24, fontWeight: "bold" },
  listContainer: { flex: 1, gap: 24 },
  itemContainer: {
    alignItems: "center",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 8,
  },
  item: {},
});

type Props = {};

const UserList = ({}: Props) => {
  const { data, loading, removeItem, removeAll } = useFollowedAnimesContext();
  const { colors } = useTheme();
  const [isRemoving, setIsRemoving] = useState<boolean>(false);

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
          <TouchableOpacity onPress={() => removeAll()}>
            <Text style={{ alignSelf: "flex-end", color: colors.text }}>
              Clear All
            </Text>
          </TouchableOpacity>
          <FlatList
            contentContainerStyle={{
              gap: 8,
            }}
            data={data}
            renderItem={({ item }) => (
              <View key={item.id} style={styles.itemContainer}>
                <Text style={{ color: colors.text }}>{item.name}</Text>
                <TouchableOpacity
                  onPress={() => removeFollowedAnime(item.id)}
                  style={{ flex: 1 }}
                >
                  <Feather name="x" size={20} color="red" style={{ flex: 1 }} />
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
