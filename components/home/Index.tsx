import { useMemo } from "react";
import { StyleSheet, View } from "react-native";
import { ScheduleType } from "../../api/queries/ScheduleQueries.types";
import { DefaultModalDataType } from "../../common/defaultModalData.types";
import { AnimeCard } from "../card/Index";
import { HomeContainerProps } from "./Index.types";

const styles = StyleSheet.create({
  cardsContainer: {
    flex: 1,
    gap: 8,
    width: "100%",
  },
});

export const HomeContainer = ({
  modalOptions,
  followedAnimes,
  scheduleData,
}: HomeContainerProps) => {
  const getSelectedOptions = (
    optionName: string,
    options: DefaultModalDataType[]
  ): string[] => {
    var filteredOptions = options.find((opt) => opt.name === optionName);

    return filteredOptions
      ? filteredOptions.options
          .filter((opt) => opt.isSelected)
          .map((opt) => opt.option)
      : [];
  };

  const isFollowing = (animeId: number) => {
    return followedAnimes.some((x) => x.id === animeId);
  };

  const filterAndSortData: ScheduleType[] = useMemo(() => {
    const countries = getSelectedOptions("Country", modalOptions);
    const formats = getSelectedOptions("Format", modalOptions);
    const mediaTypes = getSelectedOptions("Media Type", modalOptions);
    const sortBy = getSelectedOptions("Sort By", modalOptions);
    const userStatus = getSelectedOptions("User Status", modalOptions);

    if (scheduleData) {
      let filteredData = scheduleData;

      if (userStatus.includes("Watching")) {
        filteredData = filteredData.filter((data) =>
          followedAnimes.some((x) => x.id === data.mediaId)
        );
      }

      filteredData = filteredData.filter((d) => {
        return (
          countries.includes(d.media.countryOfOrigin) &&
          formats.includes(d.media.format) &&
          mediaTypes.includes(d.media.type)
        );
      });

      if (sortBy.includes("Date")) {
        filteredData.sort(
          (a, b) =>
            new Date(a.airingAt).getTime() - new Date(b.airingAt).getTime()
        );
      } else {
        filteredData.sort((a, b) => a.episode - b.episode);
      }

      return filteredData;
    }

    return [];
  }, [modalOptions, scheduleData, followedAnimes]);

  return (
    <View style={styles.cardsContainer} testID="cardsContainer">
      {filterAndSortData.map((anime) => (
        <AnimeCard
          data={anime}
          key={`${anime.mediaId}-${anime.episode}`}
          isFollowing={isFollowing(anime.mediaId)}
        />
      ))}
    </View>
  );
};
