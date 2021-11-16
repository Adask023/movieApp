import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { SingleMovie } from "../components/SingleMovie/SingleMovie";
import { ROUTES } from "../constants/routes";
import { FavouritePage } from "../pages/FavouritePage/FavouritePage";
import FilmsPage from "../pages/FilmsPage/FilmsPage";
import { HomePage } from "../pages/HomePage/HomePage";
import { SettingPage } from "../pages/SettingsPage/SettingPage";

export const AppRoutes = () => {
  return (
    <>
      <Switch>
        <Route exact path={ROUTES.START} component={HomePage} />
        <Route exact path={ROUTES.FILMS} component={FilmsPage} />
        <Route path={ROUTES.FILM} component={SingleMovie} />
        <Route path={ROUTES.FAVOURITE} component={FavouritePage} />
        <Route path={ROUTES.SETTINGS} component={SettingPage} />
      </Switch>
    </>
  );
};
