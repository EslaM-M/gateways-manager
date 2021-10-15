import { Switch, Route, withRouter } from "react-router-dom";
import React from "react";
import Gateway from "../pages/Gateway";
import PeripheralDevices from "../pages/PeripheralDevices";

function Routes() {
  return (
    <Switch>
      <Route path="/:id" component={PeripheralDevices}>
      </Route>
      <Route path="/" component={Gateway}>
      </Route>
    </Switch>
  );
}

export default Routes;
