import axios from "axios";

export const AxiosClient = () => {
  const AxiosInstance = axios.create({
    baseURL: "http://10.0.2.2:5267",
  });

  return AxiosInstance;
};
