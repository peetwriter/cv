import * as ActionTypes from '../constants/constants';

const initialState = { workPlaces: [], selectedWorkPlace: null };

const workPlaceReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_WORKPLACE :
      return {
        workPlaces: [{
            title: action.title,
            content: action.content,
            companyName: action.companyName,
            companyUrl: action.companyUrl,
            startDate: action.startDate,
            endDate: action.endDate,
            slug: action.slug,
            cuid: action.cuid,
            _id: action._id,
      }].concat(state.workPlaces),
        workPlace: state.workPlace };

    case ActionTypes.CHANGE_SELECTED_WORKPLACE :
      return {
        workPlaces: state.workPlaces,
        workPlace: action.slug,
      };

    case ActionTypes.ADD_WORKPLACES :
      return {
        workPlaces: action.workPlaces,
        workPlace: state.workPlace,
      };

    case ActionTypes.ADD_SELECTED_WORKPLACE :
      return {
        workPlace: action.workPlace,
        workPlaces: state.workPlaces,
      };

    case ActionTypes.DELETE_WORKPLACE :
      return {
        workPlaces: state.workPlaces.filter((workPlace) => workPlace._id !== action.workPlace._id),
      };

    default:
      return state;
  }
};

export default workPlaceReducer;
