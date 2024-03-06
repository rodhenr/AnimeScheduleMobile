import { useEffect, useMemo, useState } from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { useGetDailySchedulesQuery } from "../api/queries/ScheduleQueries";
import { AnimeCard } from "../components/card/Index";
import { DateSelector } from "../components/dateSelector/Index";
import { Filter } from "../components/filter/Index";
import { FilterModal } from "../components/filter/modal/Index";
import useAsyncStorage from "../hooks/CustomHooks";
import { IApiData, IModalData, dateActionType } from "../interfaces/interfaces";
import { incrementOrDecrementDate } from "../utils/dateUtils";
import { useTheme } from "../context/ThemeContext";

const defaultModalOptions: IModalData[] = [
  {
    name: "Country",
    options: [
      { option: "JP", isSelected: true },
      { option: "CN", isSelected: true },
      { option: "KR", isSelected: true },
      { option: "US", isSelected: true },
    ],
    allowMultipleSelection: true,
  },
  {
    name: "Format",
    options: [
      { option: "TV", isSelected: true },
      { option: "TV SHORT", isSelected: true },
      { option: "ONA", isSelected: true },
      { option: "OVA", isSelected: true },
      { option: "SPECIAL", isSelected: true },
      { option: "MOVIE", isSelected: true },
    ],
    allowMultipleSelection: true,
  },
  {
    name: "Media Type",
    options: [
      { option: "ANIME", isSelected: true },
      { option: "MOVIE", isSelected: true },
    ],
    allowMultipleSelection: true,
  },
  {
    name: "Sort By",
    options: [
      { option: "Date", isSelected: true },
      { option: "Episode", isSelected: false },
    ],
    allowMultipleSelection: false,
  },
];

const styles = StyleSheet.create({
  innerContainer: {
    alignItems: "center",
    gap: 16,
    padding: 16,
  },
  cardsContainer: {
    alignItems: "center",
    flex: 1,
    gap: 8,
  },
});

export const Home = () => {
  const { colors } = useTheme();
  const [storageFilterModalOptions, setStorageFilterModalOptions, loading] =
    useAsyncStorage<IModalData[]>("filterModalOptions", defaultModalOptions);

  const [date, setDate] = useState<Date | null>(null);
  const [openFilterModal, setOpenFilterModal] = useState(false);

  useEffect(() => {
    setDate(new Date());
  }, []);

  const { data, error, isPending } = useGetDailySchedulesQuery(date);

  const updateDate = (type: dateActionType): void => {
    if (date !== null) {
      const newDate = incrementOrDecrementDate(date, type);

      setDate(newDate);
    }
  };

  const changeFilterModalState = () => {
    setOpenFilterModal((op) => !op);
  };

  const updateOption = (
    categoryName: string,
    optionName: string,
    allowMultipleSelection: boolean,
    isSelected: boolean
  ) => {
    setStorageFilterModalOptions(
      storageFilterModalOptions.map((category) => {
        if (category.name === categoryName) {
          return {
            ...category,
            options: category.options.map((option) => {
              if (option.option === optionName) {
                return {
                  ...option,
                  isSelected:
                    (!allowMultipleSelection && !isSelected) ||
                    allowMultipleSelection
                      ? !isSelected
                      : option.isSelected,
                };
              } else if (!allowMultipleSelection) {
                return { ...option, isSelected: false };
              }

              return option;
            }),
          };
        }

        return category;
      })
    );
  };

  const getSelectedOptions = (
    optionName: string,
    options: IModalData[]
  ): string[] => {
    var filteredOptions = options.find((o) => o.name === optionName);

    return filteredOptions
      ? filteredOptions.options.filter((o) => o.isSelected).map((o) => o.option)
      : [];
  };

  const filterAndSortData: IApiData[] = useMemo(() => {
    const countries = getSelectedOptions("Country", storageFilterModalOptions);
    const formats = getSelectedOptions("Format", storageFilterModalOptions);
    const mediaTypes = getSelectedOptions(
      "Media Type",
      storageFilterModalOptions
    );
    const sortBy = getSelectedOptions("Sort By", storageFilterModalOptions);

    if (data) {
      let filteredData = data.filter((d) => {
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
  }, [storageFilterModalOptions, data]);

  return (
    <View style={styles.innerContainer}>
      <Filter onClick={changeFilterModalState} />
      {openFilterModal && (
        <FilterModal
          options={storageFilterModalOptions}
          updateOption={updateOption}
          onClick={changeFilterModalState}
        />
      )}
      {date && <DateSelector date={date!} updateDate={updateDate} />}
      {isPending ? (
        <ActivityIndicator size="large" color={colors.text} />
      ) : data ? (
        <View style={styles.cardsContainer}>
          {filterAndSortData.map((i) => (
            <AnimeCard data={i} key={i.mediaId} />
          ))}
        </View>
      ) : (
        <Text>Error...</Text>
      )}
    </View>
  );
};
