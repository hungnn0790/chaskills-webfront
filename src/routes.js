import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './store';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import { Home, Layout, About } from './components';

// Call the configureStore function previously exported
const store = configureStore();

// Use hashHistory for easier development
const routes = (
	<Provider store={store}>
  	<Router history={hashHistory}>
  		<Route path="/" component={Layout}>
  			<IndexRoute component={Home} />
  		<Route path="/about" component={About} />
  		</Route>
  	</Router>
  </Provider>
);

export default routes;