import createReducer from '../helpers/createReducer';

import {
  FETCH_STATUSES_PENDING,FETCH_STATUSES_SUCCESS,FETCH_STATUSES_ERROR,
  ADD_STATUS_PENDING, ADD_STATUS_SUCCESS, ADD_STATUS_ERROR,
  GET_STATUS_PENDING, GET_STATUS_SUCCESS, GET_STATUS_ERROR,
  DELETE_STATUS_PENDING, DELETE_STATUS_SUCCESS, DELETE_STATUS_ERROR
} from '../../actions/types';

const initialState = {
    pending: false,
    data: null,
    error: null,
    successful: false
};

function statusesPending(state, action) {
    return {
        ...state,
        pending: true,
        successful: false
    }
}

function statusesSuccess(state, action) {
    return {
        ...state,
        pending: false,
        data: action.data,
        successful: true,
    }
}

function statusesError(state, action) {
    return {
        ...state,
        error: action.error,
        successful: false
    }
}


export default createReducer(initialState, {
  [FETCH_STATUSES_PENDING]: statusesPending,
  [FETCH_STATUSES_SUCCESS]: statusesSuccess,
  [FETCH_STATUSES_ERROR]: statusesError,
  [ADD_STATUS_PENDING]: statusesPending,
  [ADD_STATUS_SUCCESS]: statusesSuccess,
  [ADD_STATUS_ERROR]: statusesError,
  [GET_STATUS_PENDING]: statusesPending,
  [GET_STATUS_SUCCESS]: statusesSuccess,
  [GET_STATUS_ERROR]: statusesError,
  [DELETE_STATUS_PENDING]: statusesPending,
  [DELETE_STATUS_SUCCESS]: statusesSuccess,
  [DELETE_STATUS_ERROR]: statusesError
});