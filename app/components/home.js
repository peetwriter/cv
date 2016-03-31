var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var MainContainer = require("../containers/mainContainer");

var Home = React.createClass({
    render: function(){
        return(
            <MainContainer>
                <h1>Home</h1>
                <Link to="/workplaces">
                    <button type="button" className="btn btn-large btn-success">See workplaces</button>
                </Link>
            </MainContainer>
        )
    }
});

module.exports = Home;
