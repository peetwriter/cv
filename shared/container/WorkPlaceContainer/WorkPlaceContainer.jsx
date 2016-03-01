/* eslint no-unused-vars:0 */
import React, { PropTypes, Component } from 'react';
import WorkPlaceListView from '../WorkPlaceListView/WorkPlaceListView';
import WorkPlaceCreateView from '../../components/WorkPlaceCreateView/WorkPlaceCreateView';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { connect } from 'react-redux';
import * as Actions from '../../redux/actions/actions';

class WorkPlaceContainer extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      showAddWorkPlace: false,
    };
    this.handleClick = this.handleClick.bind(this);
    this.add = this.add.bind(this);
  }

  handleClick(e) {
    this.setState({
      showAddWorkPlace: !this.state.showAddWorkPlace,
    });

    e.preventDefault();
  }

  add(name, title, content) {
    this.props.dispatch(Actions.addWorkPlaceRequest({ name, title, content }));
    this.setState({
      showAddWorkPlace: false,
    });
  }

  render() {
    return (
      <div>
        <Header onClick={this.handleClick} />
        <div className="container">
          <WorkPlaceCreateView addWorkPlace={this.add}
            showAddWorkPlace={this.state.showAddWorkPlace}
          />
          <WorkPlaceListView workPlaces={this.props.workPlaces}/>
        </div>
        <Footer />
      </div>
    );
  }
}

WorkPlaceContainer.need = [() => {
    return Actions.fetchWorkPlaces();
}];
WorkPlaceContainer.contextTypes = {
  router: React.PropTypes.object,
};

function mapStateToProps(store) {
  return {
    workPlaces: store.workPlaces,
  };
}

WorkPlaceContainer.propTypes = {
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

export default connect(mapStateToProps)(WorkPlaceContainer);
