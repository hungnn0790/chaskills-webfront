import React from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import { Home, Layout, About } from './components';
import { HomeContainer } from './containers';

// Use hashHistory for easier development
const routes = (
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={HomeContainer} />
      <Route path="/about" component={About} />
    </Route>
  </Router>
);

export default routes;