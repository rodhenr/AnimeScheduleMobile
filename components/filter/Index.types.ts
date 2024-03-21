import {
  DefaultModalDataType,
  ModalOptionType,
} from "../../common/defaultModalData.types";

export type FilterProps = {
  onClick: () => void;
};

export type CloseIconProps = {
  onClick: () => void;
};

export type FilterModalProps = {
  onClick: () => void;
  options: DefaultModalDataType[];
  updateOption: (
    categoryName: string,
    optionName: string,
    allowMultipleSelection: boolean,
    isSelected: boolean
  ) => void;
};

export type ItemProps = {
  name: string;
  option: string;
  allowMultipleSelection: boolean;
  isSelected: boolean;
  updateOption: (
    categoryName: string,
    optionName: string,
    allowMultipleSelection: boolean,
    isSelected: boolean
  ) => void;
};

export type ItemGroupProps = {
  name: string;
  options: ModalOptionType[];
  allowMultipleSelection: boolean;
  updateOption: (
    categoryName: string,
    optionName: string,
    allowMultipleSelection: boolean,
    isSelected: boolean
  ) => void;
};
