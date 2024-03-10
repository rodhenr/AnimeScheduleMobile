import { StyleSheet, Text, View } from "react-native";
import { useTheme } from "../../../../context/ThemeContext";

const styles = StyleSheet.create({ container: {} });

type Props = {
  info: string | number;
  title: string;
};

export const InfoItem = ({ info, title }: Props) => {
  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      <Text style={[{ color: colors.text }]}>{title}</Text>
      <Text style={[{ color: colors.text }]}>{info}</Text>
    </View>
  );
};
