import React from 'react';
import { Switch, Route } from 'react-router-dom';

// import Home from './pages/Home';
import Hooks from './pages/Hooks';

export default function Routes() {
  return (
    <Switch>
      {/* <Route path="/" exact component={Home} /> */}
      <Route path="/hooks" component={Hooks} />
    </Switch>
  );
}
