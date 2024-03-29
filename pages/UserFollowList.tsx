import { useState } from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { ClearButton } from "../components/followList/clearButton/Index";
import { AnimeItem } from "../components/followList/item/Index";
import { useFollowedAnimesContext } from "../context/FollowedAnimesContext";
import { useTheme } from "../context/ThemeContext";

const styles = StyleSheet.create({
  container: { flex: 1 },
  title: { fontSize: 24, fontWeight: "bold" },
  listContainer: {
    flex: 1,
    gap: 4,
  },
});

const UserFollowList = () => {
  const { colors } = useTheme();
  const [isRemoving, setIsRemoving] = useState<boolean>(false);

  const { data, loading, removeItem, removeAll } = useFollowedAnimesContext();

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
          <ClearButton hasItems={data.length > 0} removeAll={removeAll} />
          <FlatList
            contentContainerStyle={{
              padding: 16,
            }}
            data={data}
            renderItem={({ item }) => (
              <AnimeItem
                id={item.id}
                name={item.name}
                remove={removeFollowedAnime}
              />
            )}
            keyExtractor={(item) => item.id.toString()}
          />
        </View>
      )}
    </View>
  );
};

export default UserFollowList;
