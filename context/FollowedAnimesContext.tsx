import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useContext, useEffect, useState } from "react";
import {
  FollowedAnimesContextProps,
  FollowedAnimesContextType,
  FollowedAnimeType,
} from "./FollowedAnimesContext.types";

const FollowedAnimesContext = createContext<FollowedAnimesContextType>({
  data: [],
  setData: () => {},
  loading: true,
  removeItem: () => {},
  removeAll: () => {},
});

const FollowedAnimesProvider = ({ children }: FollowedAnimesContextProps) => {
  const [data, setData] = useState<FollowedAnimeType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const key = "followedAnimes";

  useEffect(() => {
    const loadData = async () => {
      try {
        const value = await AsyncStorage.getItem(key);
        if (value !== null) {
          setData(JSON.parse(value));
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [key]);

  const setAsyncStorage = async (newValue: FollowedAnimeType[]) => {
    try {
      const value = JSON.stringify(newValue);
      await AsyncStorage.setItem(key, value);
      setData(newValue);
    } catch (error) {
      console.error(error);
    }
  };

  const removeItem = async (id: number) => {
    const items = data.filter((x) => x.id !== id);
    const itemsJSON = JSON.stringify(items);

    await AsyncStorage.setItem(key, itemsJSON);
    setData(items);
  };

  const removeAll = async () => {
    await AsyncStorage.multiRemove(["followedAnimes"]);

    setData([]);
  };

  return (
    <FollowedAnimesContext.Provider
      value={{ data, setData: setAsyncStorage, loading, removeItem, removeAll }}
    >
      {children}
    </FollowedAnimesContext.Provider>
  );
};

// Custom hook to use the context
const useFollowedAnimesContext = () => useContext(FollowedAnimesContext);

export { FollowedAnimesProvider, useFollowedAnimesContext };
