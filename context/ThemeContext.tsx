import { createContext, useContext } from "react";
import useAsyncStorage from "../hooks/useAsyncStorageHook";
import { darkColors, lightColors } from "../themes/colors";
import { ThemeContextProps, ThemeContextType } from "./ThemeContext.types";

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
};

export const ThemeProvider = ({ children }: ThemeContextProps) => {
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
