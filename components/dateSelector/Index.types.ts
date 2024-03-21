import { DateActionType } from "../../utils/dateUtils";

export type DateInfoProps = { date: Date };

export type DateSelectorProps = {
  updateDate: (type: DateActionType) => void;
  date: Date;
};

export type SelectorIconProps = {
  iconName: "chevron-left" | "chevron-right";
  updateDate: (type: DateActionType) => void;
  type: DateActionType;
};
