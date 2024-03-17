import { Feather } from "@expo/vector-icons";
import { RouteProp, useNavigation } from "@react-navigation/native";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { useGetAnimeInfoQuery } from "../api/queries/AnimeInfoQueries";
import { AnimeInfo } from "../components/animeInfo/Index";
import { useTheme } from "../context/ThemeContext";
import { RootStackParamList } from "../interfaces/interfaces";
import { ScrollView } from "react-native-gesture-handler";

const styles = StyleSheet.create({
  container: { gap: 16, paddingHorizontal: 12 },
});

type AnimeScreenRouteProp = RouteProp<RootStackParamList, "Anime">;

type Props = {
  route: AnimeScreenRouteProp;
};

export const Anime = ({ route }: Props) => {
  const { id } = route.params;
  const navigation = useNavigation();
  const { colors } = useTheme();

  const { data, isLoading, isError } = useGetAnimeInfoQuery(id);

  return (
    <ScrollView>
      <View style={[styles.container, { backgroundColor: colors.background }]}>
        <Feather
          name="arrow-left"
          size={20}
          onPress={() => navigation.goBack()}
          color={colors.text}
        />
        {data ? (
          <AnimeInfo data={data} />
        ) : isLoading && !isError ? (
          <ActivityIndicator />
        ) : (
          <View>
            <Text>Error...</Text>
          </View>
        )}
      </View>
    </ScrollView>
  );
};
