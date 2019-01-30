import React from 'react';
import { Route } from 'react-router';
import AppContainer from './containers/App';
import HomeContainer from './containers/Home';
import NoMatch from './components/NoMatch';
import ErrorView from './components/Error';

const onRouteChange = () => {};

export default (
  <Route component={AppContainer} onChange={onRouteChange}>
    <Route path='/' component={HomeContainer} />
    <Route path='/error' component={ErrorView} />
    <Route path='*' component={NoMatch} />
  </Route>
);
