export type HomeOptionsProps = {
  changeFilterModalState: () => void;
  date: Date | null;
  setDate: React.Dispatch<React.SetStateAction<Date | null>>;
};
