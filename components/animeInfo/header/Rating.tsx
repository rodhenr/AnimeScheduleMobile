import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, View } from "react-native";
import { RatingProps } from "./Index.types";

const styles = StyleSheet.create({
  container: { flexDirection: "row", gap: 8 },
});

export const Rating = ({ score }: RatingProps) => {
  const fullStars = Math.floor(score / 20);
  const halfStars = score % 20 >= 10 ? 1 : 0;
  const emptyStars = 5 - fullStars - halfStars;

  return (
    <View style={styles.container} testID="rating">
      {[...Array(fullStars)].map((_, index) => (
        <Ionicons key={index} name="star" size={24} color="#b8b500" />
      ))}
      {[...Array(halfStars)].map((_, index) => (
        <Ionicons key={index} name="star-half" size={24} color="#b8b500" />
      ))}
      {[...Array(emptyStars)].map((_, index) => (
        <Ionicons key={index} name="star-outline" size={24} color="#b8b500" />
      ))}
    </View>
  );
};
