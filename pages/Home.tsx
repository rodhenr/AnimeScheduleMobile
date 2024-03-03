import { StyleSheet, View, Text } from "react-native";
import AnimeCard from "../components/AnimeCard/Index";
import CurrentTime from "../components/CurrentTime";
import { useGetDailySchedulesQuery } from "../api/queries/ScheduleQueries";
import { useEffect, useState } from "react";
import { incrementOrDecrementDate } from "../utils/dateUtils";
import { IModalData, dateActionType } from "../interfaces/interfaces";
import Filter from "../components/Filter";
import FilterModal from "../components/FilterModal";
import useAsyncStorage from "../hooks/CustomHooks";

const defaultModalOptions: IModalData[] = [
  {
    name: "Country",
    options: [
      { option: "JP", isSelected: true },
      { option: "CN", isSelected: true },
      { option: "KR", isSelected: true },
      { option: "EN", isSelected: true },
    ],
    allowMultipleSelection: true,
  },
  {
    name: "Format",
    options: [
      { option: "ANIME", isSelected: true },
      { option: "MOVIE", isSelected: true },
    ],
    allowMultipleSelection: true,
  },
  {
    name: "Media Type",
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
    name: "Sort By",
    options: [
      { option: "Date", isSelected: true },
      { option: "Episode", isSelected: false },
    ],
    allowMultipleSelection: false,
  },
];

function Home() {
  const [storageFilterModalOptions, setStorageFilterModalOptions, loading] =
    useAsyncStorage<IModalData[]>("filterModalOptions", defaultModalOptions);

  const [filterModalOptions, setFilterModalOptions] = useState<IModalData[]>(
    []
  );
  const [date, setDate] = useState<Date>(new Date("2024-03-02"));
  const [openFilterModal, setOpenFilterModal] = useState(false);

  useEffect(() => {
    setDate(new Date());
  }, []);

  useEffect(() => {
    setFilterModalOptions(storageFilterModalOptions);
  }, [storageFilterModalOptions]);

  const { data, error, isPending } = useGetDailySchedulesQuery(date!);

  const updateDate = (type: dateActionType): void => {
    const newDate = incrementOrDecrementDate(date, type);

    setDate(newDate);
  };

  const changeFilterModalState = () => {
    setOpenFilterModal((op) => !op);
  };

  // TODO: Refactor this method - it was not implemented correctly
  const updateOption = (
    categoryName: string,
    optionName: string,
    allowMultipleSelection: boolean,
    isSelected: boolean
  ) => {
    setFilterModalOptions((prevOptions) => {
      return prevOptions.map((category) => {
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
      });
    });

    setStorageFilterModalOptions(filterModalOptions);
  };

  return (
    <View style={styles.innerContainer}>
      <Filter onClick={changeFilterModalState} />
      {openFilterModal && (
        <FilterModal
          options={filterModalOptions}
          updateOption={updateOption}
          onClick={changeFilterModalState}
        />
      )}
      <CurrentTime date={date!} updateDate={updateDate} />
      {isPending ? (
        <Text>Pending...</Text>
      ) : error ? (
        <Text>Error...</Text>
      ) : data ? (
        <View style={styles.cardsContainer}>
          {data.map((i) => (
            <AnimeCard data={i} key={i.mediaId} />
          ))}
        </View>
      ) : (
        <View>
          <Text>Unknown...</Text>
        </View>
      )}
    </View>
  );
}

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

export default Home;
