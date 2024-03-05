import { createContext, useContext, useState } from "react";
import { IColors } from "../interfaces/interfaces";
import { darkColors, lightColors } from "../themes/colors";
import useAsyncStorage from "../hooks/CustomHooks";

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
  const [storageIsDarkTheme, setStorageIsDarkTheme] = useAsyncStorage<boolean>(
    "isDarkTheme",
    false
  );

  const toggleTheme = () => {
    setStorageIsDarkTheme(!storageIsDarkTheme);
  };

  const theme: ThemeContextType = {
    isDarkTheme: storageIsDarkTheme,
    toggleTheme: toggleTheme,
    colors: storageIsDarkTheme ? darkColors : lightColors,
  };

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};
