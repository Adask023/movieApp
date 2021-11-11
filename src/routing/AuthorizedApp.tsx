import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { ROUTES } from "../constants/routes";
import FilmsPage from "../pages/FilmsPage/FilmsPage";

export const AuthorizedApp = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path={ROUTES.START} component={FilmsPage} />
        </Switch>
      </Router>
    </>
  );
};
