import React, { createContext, useState, useContext } from "react";
import { lightColors, darkColors } from "../themes/colors";
import { IColors } from "../interfaces/interfaces";

interface ThemeContextType {
  isDarkTheme: boolean;
  toggleTheme: () => void;
  colors: IColors;
}

type Props = {
  children: React.ReactNode;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
};

export const ThemeProvider = ({ children }: Props) => {
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false);

  const toggleTheme = () => {
    setIsDarkTheme((prevTheme) => !prevTheme);
  };

  const theme: ThemeContextType = {
    isDarkTheme,
    toggleTheme,
    colors: isDarkTheme ? darkColors : lightColors,
  };

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};
