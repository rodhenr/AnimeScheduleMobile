import { StyleSheet, View } from "react-native";
import SourceIcon from "./SourceIcon";
import { IExternalLinks } from "../../interfaces/interfaces";

type Props = {
  sources: IExternalLinks[];
};

function Sources({ sources }: Props) {
  return (
    <View style={styles.container}>
      {sources.map((i) => (
        <SourceIcon url={i.url} site={i.site} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "flex-end",
    gap: 4,
    justifyContent: "flex-start",
    paddingRight: 8,
  },
});

export default Sources;
