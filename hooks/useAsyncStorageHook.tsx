import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { UseAsyncStorageResultType } from "./useAsyncStorageHook.types";

const useAsyncStorage = <T,>(
  key: string,
  initialValue: T
): UseAsyncStorageResultType<T> => {
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

  useEffect(() => {
    AsyncStorage.setItem(key, JSON.stringify(data));
  }, [data]);

  const setAsyncStorage = async (newValue: T) => setData(newValue);

  return [data, setAsyncStorage, loading];
};

export default useAsyncStorage;
