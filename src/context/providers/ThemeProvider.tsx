import React, { FC, useState } from "react";
import { defaultState, ThemeContext } from "../ThemeContext";

export const ThemeProvider: FC<{}> = ({ children }) => {
  const [dark, setDark] = useState(defaultState.dark);

  const toggleDark = () => {
    console.log('toggle' + dark)
    setDark(!dark);
  };
  return (
    <ThemeContext.Provider
      value={{
        dark,
        toggleDark,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
