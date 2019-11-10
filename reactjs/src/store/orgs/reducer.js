import createReducer from '../helpers/createReducer';

import {
  FETCH_ORGS_PENDING,FETCH_ORGS_SUCCESS,FETCH_ORGS_ERROR,
  ADD_ORG_PENDING, ADD_ORG_SUCCESS, ADD_ORG_ERROR,
  GET_ORG_PENDING, GET_ORG_SUCCESS, GET_ORG_ERROR,
  DELETE_ORG_PENDING, DELETE_ORG_SUCCESS, DELETE_ORG_ERROR
} from '../../actions/types';

const initialState = {
    pending: false,
    data: null,
    error: null,
    successful: false
};

function orgsPending(state, action) {
    return {
        ...state,
        pending: true,
        successful: false
    }
}

function orgsSuccess(state, action) {
    return {
        ...state,
        pending: false,
        data: action.data,
        successful: true,
    }
}

function orgsError(state, action) {
    return {
        ...state,
        error: action.error,
        successful: false
    }
}


export default createReducer(initialState, {
  [FETCH_ORGS_PENDING]: orgsPending,
  [FETCH_ORGS_SUCCESS]: orgsSuccess,
  [FETCH_ORGS_ERROR]: orgsError,
  [ADD_ORG_PENDING]: orgsPending,
  [ADD_ORG_SUCCESS]: orgsSuccess,
  [ADD_ORG_ERROR]: orgsError,
  [GET_ORG_PENDING]: orgsPending,
  [GET_ORG_SUCCESS]: orgsSuccess,
  [GET_ORG_ERROR]: orgsError,
  [DELETE_ORG_PENDING]: orgsPending,
  [DELETE_ORG_SUCCESS]: orgsSuccess,
  [DELETE_ORG_ERROR]: orgsError
});