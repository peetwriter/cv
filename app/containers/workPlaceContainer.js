var React = require('react');
var WorkPlaces = require('../components/workPlaces');
var workPlacesData = require('json!../data/workplaces');

var WorkPlacesContainer = React.createClass({
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },
    getInitialState: function () {
        return {
            isLoading: true,
            workPlaces: []
        }
    },
    componentDidMount: function () {
        console.log(workPlacesData.workPlaces);
        this.setState({
            isLoading: false,
            workPlaces: workPlacesData.workPlaces
        });
    },
    render: function (){
        return (
            <WorkPlaces
                isLoading={this.state.isLoading}
                workPlaces={this.state.workPlaces}
                />

        );
    }
});

module.exports = WorkPlacesContainer;
