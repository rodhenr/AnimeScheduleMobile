import { StyleSheet, Text, View } from "react-native";
import { useTheme } from "../../../context/ThemeContext";
import { InfoContainer } from "./infoContainer/Index";

const styles = StyleSheet.create({
  container: { flexDirection: "row", gap: 8 },
});

type Props = { genres: string[] };

const Genres = ({ genres }: Props) => {
  const { colors } = useTheme();

  return (
    <InfoContainer title="Genres">
      <View style={styles.container}>
        {genres.map((g) => (
          <Text style={{ color: colors.text }}>{g}</Text>
        ))}
      </View>
    </InfoContainer>
  );
};

export default Genres;
