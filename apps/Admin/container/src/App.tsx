import React, { Suspense, lazy } from "react";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import NavBar from './components/NavBar';
import "./App.css";

const AppAsync = lazy(() => import("./micro-apps/App"));
const App1Async = lazy(() => import("./micro-apps/App1"));

const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <div>
      <Suspense fallback={<div>Loading...</div>}>
          <NavBar />
        </Suspense>

        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route path="/app">
              <AppAsync />
            </Route>
            <Route path="/app1">
              <App1Async />
            </Route>
          </Switch>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
