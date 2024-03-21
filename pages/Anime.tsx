import { Feather } from "@expo/vector-icons";
import { RouteProp, useNavigation } from "@react-navigation/native";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useGetAnimeInfoQuery } from "../api/queries/AnimeInfoQueries";
import { AnimeInfo } from "../components/animeInfo/Index";
import { useTheme } from "../context/ThemeContext";
import { RootStackParamList } from "./Index";

const styles = StyleSheet.create({
  container: { flex: 1, gap: 16, paddingHorizontal: 16, paddingVertical: 20 },
});

type AnimeScreenRouteProp = RouteProp<RootStackParamList, "Anime">;

type AnimeProps = {
  route: AnimeScreenRouteProp;
};

export const Anime = ({ route }: AnimeProps) => {
  const navigation = useNavigation();
  const { colors } = useTheme();

  const { id } = route.params;

  const { data, isLoading, isError } = useGetAnimeInfoQuery(id);

  return (
    <ScrollView style={{ backgroundColor: colors.background, flex: 1 }}>
      <View style={styles.container}>
        <Feather
          name="arrow-left"
          size={24}
          onPress={() => navigation.goBack()}
          color={colors.text}
        />
        {data ? (
          <AnimeInfo data={data} />
        ) : isLoading && !isError ? (
          <ActivityIndicator
            size="large"
            color={colors.text}
            style={{ flex: 1 }}
          />
        ) : (
          <View>
            <Text>Error...</Text>
          </View>
        )}
      </View>
    </ScrollView>
  );
};
