import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const styles = StyleSheet.create({
  container: { flexDirection: "row", gap: 8 },
});

type Props = {
  score: number;
};

export const Stars = ({ score }: Props) => {
  const fullStars = Math.floor(score / 20);
  const halfStars = score % 20 >= 10 ? 1 : 0;
  const emptyStars = 5 - fullStars - halfStars;
  console.log(score);
  return (
    <View style={styles.container}>
      {[...Array(fullStars)].map((_, index) => (
        <Ionicons key={index} name="star" size={24} color="yellow" />
      ))}
      {[...Array(halfStars)].map((_, index) => (
        <Ionicons key={index} name="star-half" size={24} color="yellow" />
      ))}
      {[...Array(emptyStars)].map((_, index) => (
        <Ionicons key={index} name="star-outline" size={24} color="yellow" />
      ))}
    </View>
  );
};
