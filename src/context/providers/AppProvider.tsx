import React from "react";
import SearchInput from "../../components/SearchInput";
import { TestText } from "../../components/TestText";
import { ToogleThemeButton } from "../../components/ToogleThemeButton";
import FilmsPage from "../../pages/FilmsPage/FilmsPage";
import { ThemeProvider } from "./ThemeProvider";

export const AppProvider = () => {
  return (
    <div>
      <ThemeProvider>
        <FilmsPage />
      </ThemeProvider>
    </div>
  );
};
