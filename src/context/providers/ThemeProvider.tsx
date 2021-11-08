import React from "react";
import { theme } from "../../Theme/Theme";
import { ThemeContext } from "../ThemeContext";

export const ThemeProvider = (children: React.ReactNode) => {
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};
