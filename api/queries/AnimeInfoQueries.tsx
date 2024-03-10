import { useQuery } from "@tanstack/react-query";
import { AxiosClient } from "../../common/axios";
import { IApiData } from "../../interfaces/interfaces";

export const useGetAnimeInfoQuery = (id: number) => {
  const axios = AxiosClient();

  return useQuery({
    queryKey: ["anime", id],
    queryFn: () =>
      axios.get<IApiData[]>(`/getAnimeInfo?id=${id}`).then((res) => res.data),
    enabled: !!id,
  });
};
