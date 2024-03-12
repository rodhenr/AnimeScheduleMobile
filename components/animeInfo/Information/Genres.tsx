import { StyleSheet, Text, View } from "react-native";
import { useTheme } from "../../../context/ThemeContext";
import { InfoContainer } from "./infoContainer/Index";

const styles = StyleSheet.create({
  container: { flexDirection: "row", flexWrap: "wrap", gap: 8 },
  itemContainer: { borderRadius: 4, paddingHorizontal: 8, paddingVertical: 4 },
});

type Props = { genres: string[] };

const Genres = ({ genres }: Props) => {
  const { colors } = useTheme();

  return (
    <InfoContainer title="Genres">
      <View style={styles.container}>
        {genres.map((g) => (
          <View
            key={g}
            style={[
              styles.itemContainer,
              { backgroundColor: colors.background },
            ]}
          >
            <Text style={{ color: colors.text, fontSize: 12 }}>{g}</Text>
          </View>
        ))}
      </View>
    </InfoContainer>
  );
};

export default Genres;
