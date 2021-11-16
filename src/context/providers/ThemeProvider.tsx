import React, { FC, ReactChild, useState } from "react";
import { theme } from "../../Utils/Theme";
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
