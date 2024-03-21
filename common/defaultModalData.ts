import { DefaultModalDataType } from "./defaultModalData.types";

export const defaultModalOptions: DefaultModalDataType[] = [
  {
    name: "Country",
    options: [
      { option: "JP", isSelected: true },
      { option: "CN", isSelected: true },
      { option: "KR", isSelected: true },
      { option: "US", isSelected: true },
    ],
    allowMultipleSelection: true,
  },
  {
    name: "Format",
    options: [
      { option: "TV", isSelected: true },
      { option: "TV SHORT", isSelected: true },
      { option: "ONA", isSelected: true },
      { option: "OVA", isSelected: true },
      { option: "SPECIAL", isSelected: true },
      { option: "MOVIE", isSelected: true },
    ],
    allowMultipleSelection: true,
  },
  {
    name: "Media Type",
    options: [
      { option: "ANIME", isSelected: true },
      { option: "MOVIE", isSelected: true },
    ],
    allowMultipleSelection: true,
  },
  {
    name: "Sort By",
    options: [
      { option: "Date", isSelected: true },
      { option: "Episode", isSelected: false },
    ],
    allowMultipleSelection: false,
  },
  {
    name: "User Status",
    options: [{ option: "Watching", isSelected: false }],
    allowMultipleSelection: true,
  },
];
