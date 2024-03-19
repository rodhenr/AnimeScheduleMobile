import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

type UseAsyncStorageResult<T> = [T, (value: T) => void, boolean];

const useAsyncStorage = <T,>(
  key: string,
  initialValue: T
): UseAsyncStorageResult<T> => {
  const [data, setData] = useState<T>(initialValue);
  const [loading, setLoading] = useState<boolean>(true);

  //AsyncStorage.clear();

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

  useEffect(() => {
    const value = JSON.stringify(data);
    AsyncStorage.setItem(key, value);
  }, [data]);

  const setAsyncStorage = async (newValue: T) => {
    setData(newValue);
  };

  return [data, setAsyncStorage, loading];
};

export default useAsyncStorage;
