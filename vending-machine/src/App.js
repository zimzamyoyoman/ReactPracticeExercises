import React from 'react';
import VendingMachine from './VendingMachine';
import Chips from './Chips';
import Soda from './Soda';
import Chocolate from './Chocolate';
import Navbar from './Navbar';
import { Route, Switch } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" render={() => <VendingMachine />} />
        <Route exact path="/chips" render={() => <Chips />} />
        <Route exact path="/soda" render={() => <Soda />} />
        <Route exact path="/chocolate" render={() => <Chocolate />} />
      </Switch>

    </div>
  );
}

export default App;
