import { View, Text } from "react-native";
import React from "react";
import { RootStackParamList } from "../interfaces/interfaces";
import { RouteProp, useNavigation } from "@react-navigation/native";

type AnimeScreenRouteProp = RouteProp<RootStackParamList, "Anime">;

type Props = {
  route: AnimeScreenRouteProp;
};

export const Anime = ({ route }: Props) => {
  const { id } = route.params;
  const navigation = useNavigation();

  return (
    <View>
      <Text onPress={() => navigation.goBack()}>Anime</Text>
    </View>
  );
};
