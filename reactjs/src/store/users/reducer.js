import createReducer from '../helpers/createReducer';

import {
  FETCH_USERS_PENDING, FETCH_USERS_SUCCESS, FETCH_USERS_ERROR,
  GET_USER_PENDING, GET_USER_SUCCESS, GET_USER_ERROR,
  ADD_USER_PENDING, ADD_USER_SUCCESS, ADD_USER_ERROR,
  DELETE_USER_PENDING, DELETE_USER_SUCCESS, DELETE_USER_ERROR
} from '../../actions/types';

const initialState = {
    pending: false,
    data: null,
    error: null,
    successful: false
};

function usersPending(state, action) {
    return {
        ...state,
        pending: true,
        successful: false

    }
}

function usersSuccess(state, action) {
    return {
        ...state,
        pending: false,
        data: action.data,
        successful: true
    }
}

function usersError(state, action) {
    return {
        ...state,
        error: action.error,
        successful: false

    }
}


export default createReducer(initialState, {
  [FETCH_USERS_PENDING]: usersPending,
  [FETCH_USERS_SUCCESS]: usersSuccess,
  [FETCH_USERS_ERROR]: usersError,
  [GET_USER_PENDING]: usersPending,
  [GET_USER_SUCCESS]: usersSuccess,
  [GET_USER_ERROR]: usersError,
  [ADD_USER_PENDING]: usersPending,
  [ADD_USER_SUCCESS]: usersSuccess,
  [ADD_USER_ERROR]: usersError,
  [DELETE_USER_PENDING]: usersPending,
  [DELETE_USER_SUCCESS]: usersSuccess,
  [DELETE_USER_ERROR]: usersError,
});