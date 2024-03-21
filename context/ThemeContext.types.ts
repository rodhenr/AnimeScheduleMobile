import { IColors } from "../interfaces/interfaces";

export interface ThemeContextType {
  isDarkTheme: boolean;
  toggleTheme: () => void;
  colors: IColors;
}

export type ThemeContextProps = {
  children: React.ReactNode;
};
