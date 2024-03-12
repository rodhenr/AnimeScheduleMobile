import React, { createContext, useContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Define the context type
type FollowedAnimesContextType = {
  data: number[];
  setData: (value: number[]) => void;
  loading: boolean;
};

type Props = {
  children: React.ReactNode;
};

// Create the context
const FollowedAnimesContext = createContext<FollowedAnimesContextType>({
  data: [],
  setData: () => {},
  loading: true,
});

// Provider component with async storage logic
const FollowedAnimesProvider = ({ children }: Props) => {
  const [data, setData] = useState<number[]>([]);
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

  const setAsyncStorage = async (newValue: number[]) => {
    try {
      const value = JSON.stringify(newValue);
      await AsyncStorage.setItem(key, value);
      setData(newValue);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <FollowedAnimesContext.Provider
      value={{ data, setData: setAsyncStorage, loading }}
    >
      {children}
    </FollowedAnimesContext.Provider>
  );
};

// Custom hook to use the context
const useFollowedAnimesContext = <T,>() => useContext(FollowedAnimesContext);

export { FollowedAnimesProvider, useFollowedAnimesContext };
