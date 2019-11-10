import createReducer from '../helpers/createReducer';

import {
  FETCH_TEAMS_PENDING, FETCH_TEAMS_SUCCESS, FETCH_TEAMS_ERROR,
  GET_TEAM_PENDING, GET_TEAM_SUCCESS, GET_TEAM_ERROR,
  ADD_TEAM_PENDING, ADD_TEAM_SUCCESS, ADD_TEAM_ERROR,
  DELETE_TEAM_PENDING, DELETE_TEAM_SUCCESS,DELETE_TEAM_ERROR
} from '../../actions/types';

const initialState = {
    pending: false,
    data: null,
    error: null,
};

function teamsPending(state, action) {
    return {
        ...state,
        pending: true
    }
}

function teamsSuccess(state, action) {
    return {
        ...state,
        pending: false,
        data: action.data
    }
}

function teamsError(state, action) {
    return {
        ...state,
        error: action.error
    }
}


export default createReducer(initialState, {
  [FETCH_TEAMS_PENDING]: teamsPending,
  [FETCH_TEAMS_SUCCESS]: teamsSuccess,
  [FETCH_TEAMS_ERROR]: teamsError,
  [GET_TEAM_PENDING]: teamsPending,
  [GET_TEAM_SUCCESS]: teamsSuccess,
  [GET_TEAM_ERROR]: teamsError,
  [ADD_TEAM_PENDING]: teamsPending,
  [ADD_TEAM_SUCCESS]: teamsSuccess,
  [ADD_TEAM_ERROR]: teamsError,
  [DELETE_TEAM_PENDING]: teamsPending,
  [DELETE_TEAM_SUCCESS]: teamsSuccess,
  [DELETE_TEAM_ERROR]: teamsError,
});