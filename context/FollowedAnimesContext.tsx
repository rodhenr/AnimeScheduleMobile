import React, { createContext, useContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export interface IFollowedAnime {
  id: number;
  name: string;
}

// Define the context type
type FollowedAnimesContextType = {
  data: IFollowedAnime[];
  setData: (value: IFollowedAnime[]) => void;
  loading: boolean;
  removeItem: (id: number) => void;
  removeAll: () => void;
};

type Props = {
  children: React.ReactNode;
};

// Create the context
const FollowedAnimesContext = createContext<FollowedAnimesContextType>({
  data: [],
  setData: () => {},
  loading: true,
  removeItem: () => {},
  removeAll: () => {},
});

// Provider component with async storage logic
const FollowedAnimesProvider = ({ children }: Props) => {
  const [data, setData] = useState<IFollowedAnime[]>([]);
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

  const setAsyncStorage = async (newValue: IFollowedAnime[]) => {
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
