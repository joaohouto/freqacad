import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import GlobalStyle from "./themes/Global";

import Home from "./pages/Home";
import Subject from "./pages/Subject";
import NewSubject from "./pages/NewSubject";
import NewEvent from "./pages/NewEvent";

export default function Routes() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/subject/new" component={NewSubject} />
        <Route exact path="/subject/:id" component={Subject} />
        <Route exact path="/event/:id" component={NewEvent} />
      </Switch>
    </BrowserRouter>
  );
}
