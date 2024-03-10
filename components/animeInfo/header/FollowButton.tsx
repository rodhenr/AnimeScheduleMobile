import { useMemo } from "react";
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import { useTheme } from "../../../context/ThemeContext";
import useAsyncStorage from "../../../hooks/CustomHooks";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    borderRadius: 4,
    height: 40,
    justifyContent: "center",
    padding: 4,
  },
});

type Props = {
  animeId: number;
};

export const FollowButton = ({ animeId }: Props) => {
  const [storageFollowedAnimes, setStorageFollowedAnimes, loading] =
    useAsyncStorage<number[]>("followedAnimes", []);
  const { colors } = useTheme();

  const isFollowing: boolean = useMemo(() => {
    return storageFollowedAnimes.includes(animeId);
  }, [storageFollowedAnimes]);

  const changeFollowState = () => {
    if (isFollowing) {
      const filter = storageFollowedAnimes.filter((x) => x !== animeId);
      setStorageFollowedAnimes(filter);
    } else {
      setStorageFollowedAnimes([...storageFollowedAnimes, animeId]);
    }
  };

  return (
    <View>
      {loading ? (
        <ActivityIndicator size="large" color={colors.text} />
      ) : (
        <TouchableHighlight onPress={changeFollowState}>
          <View
            style={[
              styles.container,
              {
                backgroundColor: isFollowing
                  ? colors.backgroundFollowing
                  : colors.backgroundNotFollowing,
              },
            ]}
          >
            {storageFollowedAnimes.includes(animeId) ? (
              <Text>Unfollow</Text>
            ) : (
              <Text>Follow</Text>
            )}
          </View>
        </TouchableHighlight>
      )}
    </View>
  );
};
