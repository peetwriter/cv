var React = require('react');
var ReactRouter = require('react-router');

var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.HashHistory;

var Main = require("../components/main");
var Home = require("../components/home");
var WorkPlaceContainer = require("../containers/WorkPlaceContainer");

var routes = (
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
            <IndexRoute path="" component={Home}/>
            <Route path="workpalces" component={WorkPlaceContainer}></Route>
        </Route>
    </Router>
)

module.exports = routes;
