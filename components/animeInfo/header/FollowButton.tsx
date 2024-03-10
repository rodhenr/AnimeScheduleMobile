import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  container: { backgroundColor: "green", padding: 4 },
});

type Props = {};

export const FollowButton = ({}: Props) => {
  return (
    <View style={styles.container}>
      <Text>Following</Text>
    </View>
  );
};
