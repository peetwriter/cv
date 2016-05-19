import React from 'react';
import WorkPlaces from '../components/workPlaces';
import WorkPlaceTimeline from '../components/workPlaceTimeline';

import workPlacesData from 'json!../data/workplaces';

class WorkPlacesContainer extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            workPlaces: []
        }
    }
    componentDidMount() {
        this.setState({
            isLoading: false,
            workPlaces: workPlacesData.workPlaces
        });
    }
    render () {
        return (
            <div>
                <WorkPlaces
                    isLoading={this.state.isLoading}
                    workPlaces={this.state.workPlaces}
                    />
                <WorkPlaceTimeline></WorkPlaceTimeline>
            </div>
        )
    }
};

WorkPlacesContainer.contextTypes = {
    router: React.PropTypes.object.isRequired
};

export default WorkPlacesContainer;
