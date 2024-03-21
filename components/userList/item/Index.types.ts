import { AnimeCardNavigationProp } from "../../card/Index";

export type AnimeItemProps = {
  id: number;
  name: string;
  remove: (id: number) => void;
};
