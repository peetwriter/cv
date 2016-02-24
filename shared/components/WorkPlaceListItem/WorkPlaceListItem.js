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
      <p className="post-action"><a href="#" onClick={props.onDelete}>Delete WorkPlace</a></p>
      <hr className="divider"/>
    </div>
  );
}

WorkPlaceListItem.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    startDate: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    cuid: PropTypes.string.isRequired,
  }).isRequired,

  onClick: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default WorkPlaceListItem;