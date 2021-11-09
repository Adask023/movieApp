import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export const TestText = () => {
  const theme = useContext(ThemeContext);
  return (
    <div>
      {/* <h1 style={{backgroundColor: theme.colors.light.bgc}}>Hi, im test</h1> */}
      <p>im just a paragraph</p>
    </div>
  );
};
