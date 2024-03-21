import { useMemo } from "react";
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import { useFollowedAnimesContext } from "../../../context/FollowedAnimesContext";
import { useTheme } from "../../../context/ThemeContext";
import { FollowButtonProps } from "./Index.types";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    borderRadius: 4,
    height: 35,
    justifyContent: "center",
  },
  text: { color: "#ededed", fontSize: 16 },
});

export const FollowButton = ({ animeId, animeName }: FollowButtonProps) => {
  const { colors } = useTheme();
  const {
    data: followedAnimes,
    setData: setFollowedAnimes,
    loading: loadingFollowedAnimes,
  } = useFollowedAnimesContext();

  const isFollowing: boolean = useMemo(() => {
    return followedAnimes.some((x) => x.id === animeId);
  }, [followedAnimes]);

  const changeFollowState = () => {
    if (isFollowing) {
      const filter = followedAnimes.filter((x) => x.id !== animeId);

      setFollowedAnimes(filter);
    } else {
      setFollowedAnimes([...followedAnimes, { id: animeId, name: animeName }]);
    }
  };

  return (
    <View>
      {loadingFollowedAnimes ? (
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
            {followedAnimes.some((x) => x.id === animeId) ? (
              <Text style={styles.text}>Watching</Text>
            ) : (
              <Text style={styles.text}>Not Watching</Text>
            )}
          </View>
        </TouchableHighlight>
      )}
    </View>
  );
};
