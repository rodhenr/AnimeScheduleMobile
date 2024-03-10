import { StyleSheet, View } from "react-native";
import { InfoContainer } from "./infoContainer/Index";
import { InfoItem } from "./infoItem/Index";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
});

type Props = {
  endDate: string;
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
  return (
    <InfoContainer title="Information">
      <View style={styles.container}>
        <InfoItem info={type} title="Type" />
        <InfoItem info={episodes} title="Episodes" />
        <InfoItem info={status} title="Status" />
        <InfoItem info={source} title="Source" />
        <InfoItem
          info={new Date(startDate).toLocaleDateString()}
          title="Start Date"
        />
        <InfoItem
          info={new Date(endDate).toLocaleDateString()}
          title="End Date"
        />
        <InfoItem info={season} title="Season" />
        <InfoItem info={seasonYear} title="Season Year" />
      </View>
    </InfoContainer>
  );
};
