var React = require('react');
var PropTypes = React.PropTypes;
var WorkPlace = require('./workPlace');

function WorkPlaces (props) {
    console.log(props);
    return props.isLoading === true
        ? <p>Loading..</p>
        : <div>
            {props.workPlaces.map(x => WorkPlace({
                    startDate: x.startDate,
                    endDate: x.endDate,
                    companyName: x.companyName,
                    companyWebsite: x.companyWebsite,
                    project: x.project,
                    projectWebsite: x.projectWebsite,
                    title: x.title
                })
            )}
        </div>

}

WorkPlaces.propTypes = {
    workPlaces: React.PropTypes.array
}

module.exports = WorkPlaces;
