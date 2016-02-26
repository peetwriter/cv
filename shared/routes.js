/* eslint no-unused-vars:0 */
import { Route, IndexRoute } from 'react-router';
import React from 'react';
import App from './container/App';
import WorkPlaceContainer from './container/WorkPlaceContainer/WorkPlaceContainer';
import WorkPlaceDetailView from './container/WorkPlaceDetailView/WorkPlaceDetailView';

const routes = (
  <Route path="/" component={App} >
    <IndexRoute component={WorkPlaceContainer} />
    <Route path="/workPlace/:slug" component={WorkPlaceDetailView}/>
  </Route>
);

export default routes;
