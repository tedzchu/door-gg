import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, Migada } from './views';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/migada" component={Migada} />
    </Switch>
  );
};

export default App;
