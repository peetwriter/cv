/* eslint no-unused-vars: 0 */
/* eslint-disable prefer-template*/
import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';

function WorkPlaceListItem(props, context) {
  return (
    <div className="single-post">
      <h3 className="post-title ">
        <Link to={'/workPlace/' + props.workPlace.slug + '-' + props.workPlace.cuid} onClick={props.onClick}>
            {props.workPlace.title}
        </Link>
      </h3>
      <p className="post-desc">{props.workPlace.content}</p>
      <p className="post-date"> Started From {props.workPlace.startDate}</p>
      <p className="post-date"> Ended {props.workPlace.endDate}</p>

      <p className="post-action"><a href="#" onClick={props.onDelete}>Delete WorkPlace</a></p>
      <hr className="divider"/>
    </div>
  );
}

WorkPlaceListItem.propTypes = {
  workPlace: PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    startDate: React.PropTypes.instanceOf(Date).isRequired,
    endDate: React.PropTypes.instanceOf(Date),
    companyName: PropTypes.string,
    companyUrl: PropTypes.string,
    slug: PropTypes.string.isRequired,
    cuid: PropTypes.string.isRequired,
  }).isRequired,

  onClick: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default WorkPlaceListItem;
