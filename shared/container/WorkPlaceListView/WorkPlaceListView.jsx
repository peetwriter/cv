/* eslint no-unused-vars:0 */
import React, { PropTypes } from 'react';
import WorkPlaceListItem from '../../components/WorkPlaceListItem/WorkPlaceListItem';
import { connect } from 'react-redux';
import * as Actions from '../../redux/actions/actions';

function WorkPlaceListView(props, context) {
  return (
    <div className="listView">
      {
        props.workPlaces.map((workPlace, i, arr) => (
          <WorkPlaceListItem workPlace={workPlace} key={i}
            onClick={function handleClick() {
              props.dispatch(Actions.addSelectedWorkPlace(workPlace));
            }}
            onDelete={function handleDelete() {
              if (confirm('Do you want to delete this workPlace')) { // eslint-disable-line
                props.dispatch(Actions.deleteWorkPlaceRequest(workPlace));
              }
            }}
          />
        ))
      }
    </div>
  );
}

WorkPlaceListView.propTypes = {
  workPlaces: PropTypes.arrayOf(PropTypes.shape({
    startDate: React.PropTypes.instanceOf(Date).isRequired,
    endDate: React.PropTypes.instanceOf(Date),
    companyName: PropTypes.string,
    companyUrl: PropTypes.string,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    cuid: PropTypes.string.isRequired,
  })).isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect()(WorkPlaceListView);
