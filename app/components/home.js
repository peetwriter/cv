var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var MainContainer = require("../containers/mainContainer");

var Home = React.createClass({
    render: function(){
        return(
            <MainContainer>
                <h1>Hello World</h1>
            </MainContainer>
        )
    }
});

module.exports = Home;
