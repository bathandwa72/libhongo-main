import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./containers/Home";
import Portfolio from "./containers/Portfolio";
import Resume from "./containers/Resume";
import Contact from "./containers/Contact";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/portfolio" component={Portfolio} />
    <Route exact path="/resume" component={Resume} />
    <Route exact path="/contact" component={Contact} />
  </Switch>
);

export default Routes;
