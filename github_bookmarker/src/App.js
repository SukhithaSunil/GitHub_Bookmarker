import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import Dashboard from "./pages/DashBoard";
import Users from "./pages/Users";

import Search from "./pages/Search";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import AppToolBar from "./components/AppToolBar";

function App() {
  return (
    <div className="App">
      <Router>
        <AppToolBar />
        <Switch>
        <Route  exact path="/search/:id" component={Search} />

          <Route exact path="/search" component={Search} />
          <Route exact path="/users" component={Users} />

          <Route exact path="/" component={Dashboard} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
