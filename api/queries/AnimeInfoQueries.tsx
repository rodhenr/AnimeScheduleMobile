import { useQuery } from "@tanstack/react-query";
import { AxiosClient } from "../../common/axios";
import { IAnimeInfo } from "../../interfaces/interfaces";

export const useGetAnimeInfoQuery = (id: number) => {
  const axios = AxiosClient();

  return useQuery({
    queryKey: ["anime", id],
    queryFn: () =>
      axios.get<IAnimeInfo>(`/getAnimeInfo?id=${id}`).then((res) => res.data),
    enabled: !!id,
    retry: 2,
  });
};
