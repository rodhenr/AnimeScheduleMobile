import { FlatList, StyleSheet, View } from "react-native";
import { InfoContainer } from "./infoContainer/Index";
import { InfoItem } from "./infoItem/Index";

const styles = StyleSheet.create({
  container: { flex: 1, width: "100%" },
  listContainer: { gap: 8 },
  listColumn: { gap: 8, justifyContent: "space-between" },
});

type Props = {
  endDate: string | null;
  episodes: number;
  season: string;
  seasonYear: number;
  source: string;
  startDate: string;
  status: string;
  type: string;
};

export const Details = ({
  endDate,
  episodes,
  season,
  seasonYear,
  source,
  startDate,
  status,
  type,
}: Props) => {
  const data = [
    { info: status, title: "Status" },
    { info: type, title: "Type" },
    { info: episodes, title: "Episodes" },
    { info: source, title: "Source" },
    { info: new Date(startDate).toLocaleDateString(), title: "Start Date" },
    {
      info: endDate ? new Date(endDate).toLocaleDateString() : null,
      title: "End Date",
    },
    { info: seasonYear, title: "Season Year" },
    { info: season, title: "Season" },
  ];
  return (
    <InfoContainer title="Information">
      <View style={styles.container}>
        <FlatList
          data={data}
          numColumns={3}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item }) => (
            <InfoItem info={item.info} title={item.title} />
          )}
          contentContainerStyle={styles.listContainer}
          columnWrapperStyle={styles.listColumn}
          scrollEnabled={false}
        />
      </View>
    </InfoContainer>
  );
};
