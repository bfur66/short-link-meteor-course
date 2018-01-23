import { Meteor } from "meteor/meteor";
import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import createHistory from "history/createBrowserHistory";

import { Signup } from "../ui/Signup";
import Link from "../ui/Link";
import NotFound from "../ui/NotFound";
import { Login } from "../ui/Login";

const history = createHistory();
const unauthenticatedPages = ["/", "/signup"];
const authenticatedPages = ["/links"];

export const onAuthChange = isAuthenticated => {
  const pathname = location.pathname;
  const isUnauthenticatedPage = unauthenticatedPages.includes(pathname);
  const isAuthenticatedPage = authenticatedPages.includes(pathname);

  if (isUnauthenticatedPage && isAuthenticated) {
    history.push("/links");
  }

  if (isAuthenticatedPage && !isAuthenticated) {
    history.push("/");
  }
};

export const routes = (
  <Router history={history}>
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/links" component={Link} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);
