/* eslint-disable no-unused-vars*/
/* eslint-disable prefer-template*/
import React, { Component, PropTypes } from 'react';

class WorkPlaceCreateView extends Component {
  constructor(props, context) {
    super(props, context);
    this.addWorkPlace = this.addWorkPlace.bind(this);
  }

  addWorkPlace() {
    const nameRef = this.refs.name;
    const titleRef = this.refs.title;
    const contentRef = this.refs.content;
    if (nameRef.value && titleRef.value && contentRef.value) {
      this.props.addWorkPlace(nameRef.value, titleRef.value, contentRef.value);
      nameRef.value = titleRef.value = contentRef.value = '';
    }
  }

  render() {
    const cls = 'form ' + (this.props.showAddWorkPlace ? 'appear' : '');
    return (
      <div className={cls}>
        <div className="form-content">
          <h2 className="form-title">Create new post</h2>
          <input placeholder="WorkPlace Title" className="form-field" ref="title"/>
          <input placeholder="Start Date" className="form-field" ref="startDate"/>
          <input placeholder="End Date" className="form-field" ref="endDate"/>
          <textarea placeholder="WorkPlace Content" className="form-field" ref="content"></textarea>
          <a className="post-submit-button align-right" href="#" onClick={this.addWorkPlace}>Submit</a>
        </div>
      </div>
    );
  }
}

WorkPlaceCreateView.propTypes = {
  addWorkPlace: PropTypes.func.isRequired,
  showAddWorkPlace: PropTypes.bool.isRequired,
};

export default WorkPlaceCreateView;
