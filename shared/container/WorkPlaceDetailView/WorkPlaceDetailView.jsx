/* eslint no-unused-vars: 0 */
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as Actions from '../../redux/actions/actions';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

class WorkPlaceDetailView extends Component {

  constructor(props, context) {
    super(props, context);
    this.handleClick = this.handleClick.bind(this);
    this.handleLogoClick = this.handleLogoClick.bind(this);
  }

  handleClick() {
    this.setState({
      showAddWorkPlace: true,
    });
  }

  handleLogoClick() {
    this.props.dispatch(Actions.fetchWorkPlaces());
  }

  render() {
    return (
      <div>
        <Header onClick={function noop() {}} handleLogoClick={this.handleLogoClick}/>
        <div className="container">
          <div className="single-post post-detail">
            <h3 className="post-title">{this.props.workPlace.title}</h3>
            <p className="author-name">By {this.props.workPlace.name}</p>
            <p className="post-desc">{this.props.workPlace.content}</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

WorkPlaceDetailView.need = [(params) => {
  return Actions.getWorkPlaceRequest.bind(null, params.slug)();
}];

WorkPlaceDetailView.contextTypes = {
  router: React.PropTypes.object,
};

WorkPlaceDetailView.propTypes = {
  workPlace: PropTypes.shape({
      startDate: React.PropTypes.instanceOf(Date).isRequired,
      endDate: React.PropTypes.instanceOf(Date),
      companyName: PropTypes.string,
      companyUrl: PropTypes.string,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
      cuid: PropTypes.string.isRequired,
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(store) {
  return {
    workPlace: (store.workPlace),
  };
}

export default connect(mapStateToProps)(WorkPlaceDetailView);
