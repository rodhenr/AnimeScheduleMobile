import { StackNavigationProp } from "@react-navigation/stack";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useGetDailySchedulesQuery } from "../api/queries/ScheduleQueries";
import { defaultModalOptions } from "../common/defaultModalData";
import { DefaultModalDataType } from "../common/defaultModalData.types";
import { FilterModal } from "../components/filter/modal/Index";
import { HomeContainer } from "../components/home/Index";
import { HomeOptions } from "../components/home/options/Index";
import { useFollowedAnimesContext } from "../context/FollowedAnimesContext";
import { useTheme } from "../context/ThemeContext";
import useAsyncStorage from "../hooks/useAsyncStorageHook";
import { RootStackParamList } from "./Index";

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, "Home">;
type HomeProps = {
  navigation: HomeScreenNavigationProp;
};

const styles = StyleSheet.create({
  innerContainer: {
    flex: 1,
    gap: 16,
    padding: 16,
  },
});

export const Home = ({}: HomeProps) => {
  const { colors } = useTheme();
  const [date, setDate] = useState<Date | null>(null);
  const [openFilterModal, setOpenFilterModal] = useState(false);
  const { data: followedAnimes, loading: loadingFollowedAnimes } =
    useFollowedAnimesContext();
  const [modalOptions, setModalOptions] = useAsyncStorage<
    DefaultModalDataType[]
  >("filterModalOptions", defaultModalOptions);

  useEffect(() => {
    setDate(new Date());
  }, []);

  const { data, error, isPending } = useGetDailySchedulesQuery(date);

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
        <HomeOptions
          changeFilterModalState={changeFilterModalState}
          date={date}
          setDate={setDate}
        />
        {error ? (
          <Text>Error...</Text>
        ) : isPending || loadingFollowedAnimes ? (
          <ActivityIndicator size="large" color={colors.text} />
        ) : (
          <HomeContainer
            followedAnimes={followedAnimes}
            scheduleData={data}
            modalOptions={modalOptions}
          />
        )}
      </View>
    </ScrollView>
  );
};
