import { createContext } from "react";

interface IThemeContext {
  dark: boolean;
  toggleDark?: () => void;
}

export const defaultState = {
  dark: false,
};

export const ThemeContext = createContext<IThemeContext>( defaultState );
