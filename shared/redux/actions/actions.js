/* eslint no-unused-vars: 0 */
import * as ActionTypes from '../constants/constants';
import fetch from 'isomorphic-fetch';
import _ from 'lodash'

const baseURL = typeof window === 'undefined' ? process.env.BASE_URL || (`http://localhost:${(process.env.PORT || 8000)}`) : '';

export function addWorkPlace(workPlace) {
  return {
    type: ActionTypes.ADD_WORKPLACE,
    title: workPlace.title,
    content: workPlace.content,
    companyName: workPlace.companyName,
    companyUrl: workPlace.companyUrl,
    startDate: workPlace.startDate,
    endDate: workPlace.endDate,
    slug: workPlace.slug,
    cuid: workPlace.cuid,
    _id: workPlace._id,
  };
}

export function changeSelectedWorkPlace(slug) {
  return {
    type: ActionTypes.CHANGE_SELECTED_WORKPLACE,
    slug,
  };
}

export function addWorkPlaceRequest(workPlace) {
  return (dispatch) => {
    fetch(`${baseURL}/api/addWorkPlace`, {
      method: 'post',
      body: JSON.stringify({
        workPlace: {
          name: workPlace.name,
          title: workPlace.title,
          content: workPlace.content,
          companyName: workPlace.companyName,
          companyUrl: workPlace.companyUrl,
          startDate: workPlace.startDate,
          endDate: workPlace.endDate,
        },
      }),
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
  }).then((res) => res.json()).then(res => dispatch(addWorkPlace(res.workPlace)));
  };
}

export function addSelectedWorkPlace(workPlace) {
  return {
    type: ActionTypes.ADD_SELECTED_WORKPLACE,
    workPlace,
  };
}

export function getWorkPlaceRequest(workPlace) {
  return (dispatch) => {
    return fetch(`${baseURL}/api/getWorkPlace?slug=${workPlace}`, {
      method: 'get',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
  }).then(response => response.json()).then(res => {
      console.log("==================================");
      dispatch(addSelectedWorkPlace(res.workPlace))
  });
  };
}

export function deleteWorkPlace(workPlace) {
  return {
    type: ActionTypes.DELETE_WORKPLACE,
    workPlace,
  };
}

export function addWorkPlaces(workPlaces) {
  return {
    type: ActionTypes.ADD_WORKPLACES,
    workPlaces,
  };
}

export function fetchWorkPlaces() {
  return (dispatch) => {
    return fetch(`${baseURL}/api/getWorkPlaces`).
    then((response) =>
      {
          return response.json()
      }).
      then((response) => {
          _.forEach(response.workPlaces, workPlace => {
             workPlace.startDate = new Date();
             console.log(workPlace.startDate);
             console.log("===============");
            //   workPlace.startDate = new Date(workPlace.startDate);
            //   workPlace.endDate = new Date(workPlace.endDate);
          })
          return dispatch(addWorkPlaces(response.workPlaces));
        }
      );

  };
}

export function deleteWorkPlaceRequest(workPlace) {
  return (dispatch) => {
    fetch(`${baseURL}/api/deleteWorkPlace`, {
      method: 'post',
      body: JSON.stringify({
        workPlaceId: workPlace._id,
      }),
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
  }).then(() => dispatch(deleteWorkPlace(workPlace)));
  };
}
