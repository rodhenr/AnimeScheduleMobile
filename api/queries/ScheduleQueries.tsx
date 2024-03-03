import { useQuery } from "@tanstack/react-query";
import { AxiosClient } from "../../common/axios";
import { IApiData } from "../../interfaces/interfaces";

export const useGetDailySchedulesQuery = (date: string) => {
  const axios = AxiosClient();

  return useQuery({
    queryKey: ["dailySchedules", date, "daily"],
    queryFn: () =>
      axios
        .get<IApiData[]>(`/getSchedules?date=${date}&searchType=Daily`)
        .then((res) => res.data),
  });
};
