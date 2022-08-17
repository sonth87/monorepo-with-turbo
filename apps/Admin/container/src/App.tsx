import React, { Suspense, lazy } from "react";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import MainLayout from "./components/Layout";
import NavBar from "./components/NavBar";
import "./App.css";

const CmsAppAsync = lazy(() => import("./micro-apps/CMS"));
const AdminSystemAppAsync = lazy(() => import("./micro-apps/AdminSystem"));

const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          <MainLayout />
          {/* <NavBar /> */}
        </Suspense>

        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route path="/cms">
              <CmsAppAsync />
            </Route>
            <Route path="/admin-system">
              <AdminSystemAppAsync />
            </Route>
          </Switch>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
