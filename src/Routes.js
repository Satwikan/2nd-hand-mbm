import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import Sell from "./Sell";
import history from "./history";
import Home from "./Home";

export default class Routes extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Sell" component={Sell} />
        </Switch>
      </Router>
    );
  }
}
