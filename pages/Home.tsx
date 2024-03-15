import { StackNavigationProp } from "@react-navigation/stack";
import { useEffect, useMemo, useState } from "react";
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useGetDailySchedulesQuery } from "../api/queries/ScheduleQueries";
import { AnimeCard } from "../components/card/Index";
import { DateSelector } from "../components/dateSelector/Index";
import { Filter } from "../components/filter/Index";
import { FilterModal } from "../components/filter/modal/Index";
import { defaultModalOptions } from "../config/defaultData";
import { useFollowedAnimesContext } from "../context/FollowedAnimesContext";
import { useTheme } from "../context/ThemeContext";
import useAsyncStorage from "../hooks/CustomHooks";
import {
  IApiData,
  IModalData,
  RootStackParamList,
  dateActionType,
} from "../interfaces/interfaces";
import { incrementOrDecrementDate } from "../utils/dateUtils";

const styles = StyleSheet.create({
  innerContainer: {
    flex: 1,
    gap: 16,
    padding: 16,
  },
  filterContainer: {
    flexDirection: "row",
    gap: 16,
    justifyContent: "space-between",
  },
  cardsContainer: {
    flex: 1,
    gap: 8,
    width: "100%",
  },
});

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, "Home">;

type Props = {
  navigation: HomeScreenNavigationProp;
};

export const Home = ({ navigation }: Props) => {
  const { colors } = useTheme();
  const [date, setDate] = useState<Date | null>(null);
  const [openFilterModal, setOpenFilterModal] = useState(false);
  const { data: followedAnimes, loading: loadingFollowedAnimes } =
    useFollowedAnimesContext<number[]>();
  const [modalOptions, setModalOptions] = useAsyncStorage<IModalData[]>(
    "filterModalOptions",
    defaultModalOptions
  );

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
    setModalOptions(
      modalOptions.map((category) => {
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
    const countries = getSelectedOptions("Country", modalOptions);
    const formats = getSelectedOptions("Format", modalOptions);
    const mediaTypes = getSelectedOptions("Media Type", modalOptions);
    const sortBy = getSelectedOptions("Sort By", modalOptions);
    const userStatus = getSelectedOptions("User Status", modalOptions);

    if (data) {
      let filteredData = data;

      if (userStatus.includes("Watching")) {
        filteredData = filteredData.filter((data) =>
          followedAnimes.includes(data.mediaId)
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
  }, [modalOptions, data, followedAnimes]);

  const isFollowing = (animeId: number) => {
    return followedAnimes.includes(animeId);
  };

  return (
    <ScrollView
      contentContainerStyle={{
        backgroundColor: colors.background,
        flexGrow: 1,
      }}
    >
      <View style={styles.innerContainer}>
        {openFilterModal && (
          <FilterModal
            options={modalOptions}
            updateOption={updateOption}
            onClick={changeFilterModalState}
          />
        )}
        <View style={styles.filterContainer}>
          {date && <DateSelector date={date!} updateDate={updateDate} />}
          <Filter onClick={changeFilterModalState} />
        </View>
        {isPending || loadingFollowedAnimes ? (
          <ActivityIndicator size="large" color={colors.text} />
        ) : data ? (
          <View style={styles.cardsContainer}>
            {filterAndSortData.map((i) => (
              <AnimeCard
                data={i}
                key={i.mediaId}
                isFollowing={isFollowing(i.mediaId)}
              />
            ))}
          </View>
        ) : (
          <Text>Error...</Text>
        )}
      </View>
    </ScrollView>
  );
};
