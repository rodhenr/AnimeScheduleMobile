import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

type UseAsyncStorageResult<T> = [T, (value: T) => void, boolean];

const useAsyncStorage = <T,>(
  key: string,
  initialValue: T
): UseAsyncStorageResult<T> => {
  const [data, setData] = useState<T>(initialValue);
  const [loading, setLoading] = useState<boolean>(true);

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

  const setAsyncStorage = async (newValue: T) => {
    try {
      const value = JSON.stringify(newValue);

      await AsyncStorage.setItem(key, value);
      
      setData(newValue);
    } catch (error) {
      console.error(error);
    }
  };

  return [data, setAsyncStorage, loading];
};

export default useAsyncStorage;
