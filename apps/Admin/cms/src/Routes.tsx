import { Route, Switch } from "react-router-dom";
import React, { Suspense } from "react";

const DashboardAsync = React.lazy(() => import("./pages/Dashboard"));
const AboutAsync = React.lazy(() => import("./pages/About"));

export const Routes = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route path="/" exact>
          <DashboardAsync />
        </Route>
        <Route path="/about">
          <AboutAsync />
        </Route>
      </Switch>
    </Suspense>
  );
};
