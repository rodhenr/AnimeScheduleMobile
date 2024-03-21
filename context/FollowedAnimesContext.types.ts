export type FollowedAnimeType = {
  id: number;
  name: string;
};

export type FollowedAnimesContextType = {
  data: FollowedAnimeType[];
  setData: (value: FollowedAnimeType[]) => void;
  loading: boolean;
  removeItem: (id: number) => void;
  removeAll: () => void;
};

export type FollowedAnimesContextProps = {
  children: React.ReactNode;
};
