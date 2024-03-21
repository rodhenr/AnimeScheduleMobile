import { StyleSheet, Text, View } from "react-native";
import { useTheme } from "../../../context/ThemeContext";
import { DescriptionProps } from "./Index.types";
import { InfoContainer } from "./infoContainer/Index";

const styles = StyleSheet.create({
  container: { gap: 2 },
  description: { fontSize: 12, textAlign: "justify" },
});

export const Description = ({ description }: DescriptionProps) => {
  const { colors } = useTheme();

  return (
    <InfoContainer title="Description">
      <View style={styles.container}>
        <Text style={[styles.description, { color: colors.text }]}>
          {description}
        </Text>
      </View>
    </InfoContainer>
  );
};
