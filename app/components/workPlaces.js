import React, {PropTypes} from 'react';
import WorkPlace from './workPlace';

function WorkPlaces (props) {
    return props.isLoading === true
        ? <p>Loading..</p>
        : <div>
            {props.workPlaces.map(x => <WorkPlace
                startDate={x.startDate}
                endDate={x.endDate}
                companyName={x.companyName}
                companyWebsite={x.companyWebsite}
                project={x.project}
                projectWebsite={x.projectWebsite}
                title={x.title}
                key={x. startDate}></WorkPlace>
            )}
        </div>

}

WorkPlaces.propTypes = {
    workPlaces: React.PropTypes.array
}

export default WorkPlaces;
