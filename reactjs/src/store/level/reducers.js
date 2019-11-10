import createReducer from '../helpers/createReducer';

import {
  FETCH_LEVEL_PENDING, FETCH_LEVEL_SUCCESS, FETCH_LEVEL_ERROR,
  GET_LEVEL_PENDING, GET_LEVEL_SUCCESS, GET_LEVEL_ERROR,
  ADD_LEVEL_PENDING, ADD_LEVEL_SUCCESS, ADD_LEVEL_ERROR,
  DELETE_LEVEL_PENDING, DELETE_LEVEL_SUCCESS, DELETE_LEVEL_ERROR
} from '../../actions/types';

const initialState = {
    pending: false,
    data: null,
    error: null,
};

function levelsPending(state, action) {
    return {
        ...state,
        pending: true
    }
}

function levelsSuccess(state, action) {
    return {
        ...state,
        pending: false,
        data: action.data
    }
}

function levelsError(state, action) {
    return {
        ...state,
        error: action.error
    }
}


export default createReducer(initialState, {
  [FETCH_LEVEL_PENDING]: levelsPending,
  [FETCH_LEVEL_SUCCESS]: levelsSuccess,
  [FETCH_LEVEL_ERROR]: levelsError,
  [GET_LEVEL_PENDING]: levelsPending,
  [GET_LEVEL_SUCCESS]: levelsSuccess,
  [GET_LEVEL_ERROR]: levelsError,
  [ADD_LEVEL_PENDING]: levelsPending,
  [ADD_LEVEL_SUCCESS]: levelsSuccess,
  [ADD_LEVEL_ERROR]: levelsError,
  [DELETE_LEVEL_PENDING]: levelsPending,
  [DELETE_LEVEL_SUCCESS]: levelsSuccess,
  [DELETE_LEVEL_ERROR]: levelsError,
});