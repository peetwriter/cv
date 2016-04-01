import React from 'react';
import {PropTypes} from 'react';

function WorkPlace (props) {
    return (
        <div>
            <p>{props.companyName}</p>
        </div>
    )
}

WorkPlace.propTypes = {
    startDate: PropTypes.string.isRequired,
    endDate: PropTypes.string,
    companyName: PropTypes.string.isRequired,
    companyWebsite: PropTypes.string.isRequired,
    project: PropTypes.string,
    projectWebsite: PropTypes.string,
    title: PropTypes.string
}

export default WorkPlace;
