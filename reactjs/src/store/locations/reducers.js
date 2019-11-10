import createReducer from '../helpers/createReducer';

import {
  FETCH_LOCATIONS_PENDING, FETCH_LOCATIONS_SUCCESS, FETCH_LOCATIONS_ERROR,
  GET_LOCATION_PENDING, GET_LOCATION_SUCCESS, GET_LOCATION_ERROR,
  ADD_LOCATION_PENDING, ADD_LOCATION_SUCCESS, ADD_LOCATION_ERROR,
  DELETE_LOCATION_PENDING, DELETE_LOCATION_SUCCESS, DELETE_LOCATION_ERROR
} from '../../actions/types';

const initialState = {
    pending: false,
    data: null,
    error: null,
    successful: false
};

function locationsPending(state, action) {
    return {
        ...state,
        pending: true
    }
}

function locationsSuccess(state, action) {
    return {
        ...state,
        pending: false,
        data: action.data,
        successful: true
    }
}

function locationsError(state, action) {
    return {
        ...state,
        error: action.error
    }
}


export default createReducer(initialState, {
  [FETCH_LOCATIONS_PENDING]: locationsPending,
  [FETCH_LOCATIONS_SUCCESS]: locationsSuccess,
  [FETCH_LOCATIONS_ERROR]: locationsError,
  [GET_LOCATION_PENDING]: locationsPending,
  [GET_LOCATION_SUCCESS]: locationsSuccess,
  [GET_LOCATION_ERROR]: locationsError,
  [ADD_LOCATION_PENDING]: locationsPending,
  [ADD_LOCATION_SUCCESS]: locationsSuccess,
  [ADD_LOCATION_ERROR]: locationsError,
  [DELETE_LOCATION_PENDING]: locationsPending,
  [DELETE_LOCATION_SUCCESS]: locationsSuccess,
  [DELETE_LOCATION_ERROR]: locationsError,
});