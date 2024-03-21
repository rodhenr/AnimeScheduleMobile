export type DefaultModalDataType = {
  name: string;
  options: ModalOptionType[];
  allowMultipleSelection: boolean;
};

export interface ModalOptionType {
  option: string;
  isSelected: boolean;
}
