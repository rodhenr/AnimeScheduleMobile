import axios from "axios";
import { API_URL } from "@env";

export const AxiosClient = () => {
  const AxiosInstance = axios.create({
    baseURL: API_URL,
  });

  return AxiosInstance;
};
