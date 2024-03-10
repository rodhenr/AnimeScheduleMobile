import { StyleSheet, Text, View } from "react-native";
import { useTheme } from "../../../context/ThemeContext";
import { InfoContainer } from "./infoContainer/Index";

const styles = StyleSheet.create({
  container: { gap: 2 },
  description: { fontSize: 12, textAlign: "justify" },
});

type Props = {
  description: string;
};

export const Description = ({ description }: Props) => {
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
