import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import  Dashboard  from './pages/DashBoard';
import  Search  from './pages/Search';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';

function App() {
  return (
    <div className="App">
     <Router>
      <Switch>
      <Route exact path="/bookmark" component={Dashboard} />

        <Route exact path="/" component={Search} />
      </Switch>
    </Router>
    </div>
  );
}

export default App;
