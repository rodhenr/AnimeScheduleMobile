import { Image, StyleSheet, View } from "react-native";

interface Props {
  url: string;
  site: string;
}

function SourceIcon({ url, site }: Props) {
  return (
    <View style={styles.container}>
      <Image source={{ uri: url }} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.7)",
    borderRadius: 13,
    gap: 1,
    height: 30,
    justifyContent: "center",
    width: 30,
  },
  image: { borderRadius: 13, height: 26, width: 26 },
});

export default SourceIcon;
