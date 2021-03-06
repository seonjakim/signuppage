import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignUp from "./pages/SignUp";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={SignUp} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
