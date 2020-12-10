import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, Migada } from './views';
import './App.css';

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/migada" component={Migada} />
    </Switch>
  );
};

export default App;
