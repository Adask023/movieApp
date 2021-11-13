import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SearchInput from "../../components/SearchInput";
import { TestText } from "../../components/TestText";
import { ToogleThemeButton } from "../../components/ToogleThemeButton";
import { AppLayout } from "../../Layouts/AppLayout";
import FilmsPage from "../../pages/FilmsPage/FilmsPage";
import { AppRoutes } from "../../routing/AppRoutes";
import { ThemeProvider } from "./ThemeProvider";

export const AppProvider = () => {
  return (
    <ThemeProvider>
      <Router>
        <AppLayout>
          <AppRoutes />
        </AppLayout>
      </Router>
    </ThemeProvider>
  );
};
