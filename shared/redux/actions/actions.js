/* eslint no-unused-vars: 0 */
import * as ActionTypes from '../constants/constants';
import fetch from 'isomorphic-fetch';

const baseURL = typeof window === 'undefined' ? process.env.BASE_URL || (`http://localhost:${(process.env.PORT || 8000)}`) : '';

export function addWorkplace(workPlace) {
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

export function changeSelectedWorkplace(slug) {
  return {
    type: ActionTypes.CHANGE_SELECTED_WORKPLACE,
    slug,
  };
}

export function addWorkplaceRequest(workPlace) {
  return (dispatch) => {
    fetch(`${baseURL}/api/addWorkplace`, {
      method: 'workPlace',
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
  }).then((res) => res.json()).then(res => dispatch(addWorkplace(res.workPlace)));
  };
}

export function addSelectedWorkplace(workPlace) {
  return {
    type: ActionTypes.ADD_SELECTED_WORKPLACE,
    workPlace,
  };
}

export function getWorkplaceRequest(workPlace) {
  return (dispatch) => {
    return fetch(`${baseURL}/api/getWorkplace?slug=${workPlace}`, {
      method: 'get',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
  }).then(response => response.json()).then(res => dispatch(addSelectedWorkplace(res.workPlace)));
  };
}

export function deleteWorkplace(workPlace) {
  return {
    type: ActionTypes.DELETE_WORKPLACE,
    workPlace,
  };
}

export function addWorkplaces(workPlaces) {
  return {
    type: ActionTypes.ADD_WORKPLACES,
    workPlaces,
  };
}

export function fetchWorkplaces() {
  return (dispatch) => {
    return fetch(`${baseURL}/api/getWorkplaces`).
      then((response) => response.json()).
      then((response) => dispatch(addWorkplaces(response.workPlaces)));
  };
}

export function deleteWorkplaceRequest(workPlace) {
  return (dispatch) => {
    fetch(`${baseURL}/api/deleteWorkplace`, {
      method: 'workPlace',
      body: JSON.stringify({
        workPlaceId: workPlace._id,
      }),
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
  }).then(() => dispatch(deleteWorkplace(workPlace)));
  };
}
