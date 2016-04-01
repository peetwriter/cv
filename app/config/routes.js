import React from 'react';
import ReactRouter from 'react-router';

import {Router, Route, IndexRoute, hashHistory} from 'react-router';

import Main from "../components/main";
import Home from "../components/home";
import WorkPlacesContainer from "../containers/WorkPlacesContainer";

var routes = (
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
            <IndexRoute path="" component={Home}/>
            <Route path="workplaces" component={WorkPlacesContainer}></Route>
        </Route>
    </Router>
)

export default routes;
