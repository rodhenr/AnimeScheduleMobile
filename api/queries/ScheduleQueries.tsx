import { useQuery } from "@tanstack/react-query";
import { AxiosClient } from "../../common/axios";
import { IApiData } from "../../interfaces/interfaces";

export const useGetDailySchedulesQuery = (date: Date | null) => {
  const axios = AxiosClient();

  return useQuery({
    queryKey: ["dailySchedules", date?.toDateString(), "daily"],
    queryFn: () =>
      axios
        .get<IApiData[]>(
          `/getSchedules?date=${date?.toLocaleDateString()}&searchType=Daily`
        )
        .then((res) => res.data),
    enabled: !!date,
  });
};
