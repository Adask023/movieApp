import React, { FC, ReactChild } from "react";
import { theme } from "../../Utils/Theme";
import { ThemeContext } from "../ThemeContext";

export const ThemeProvider: FC<{}> = ({ children }) => {
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};
