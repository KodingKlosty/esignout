import API from '../API'
import uuid from 'uuid/v4'
import {FETCH_TEAMS_PENDING,FETCH_TEAMS_SUCCESS,FETCH_TEAMS_ERROR,
        GET_TEAM_PENDING,GET_TEAM_SUCCESS,GET_TEAM_ERROR,
        ADD_TEAM_PENDING, ADD_TEAM_SUCCESS, ADD_TEAM_ERROR,
        DELETE_TEAM_PENDING,DELETE_TEAM_SUCCESS,DELETE_TEAM_ERROR
      } from './types'

const CACHE_TIME = 1000 * 60 * 5;

export const fetchAllTeams = () => ({

    types: [ FETCH_TEAMS_PENDING,FETCH_TEAMS_SUCCESS,FETCH_TEAMS_ERROR],

    callAPI: () => API.get('/teams'),
      // receives the current app state and returns true if we should call the api
    shouldCallAPI: state => {
    const { loadedAt, pending } = state.teams;
    // if items are currently loading don't call again
    if (pending) return false;
    const isCached = Date.now() - loadedAt < CACHE_TIME;
    // if we don't have the item or it's beyond the cache timeout make the api call
    return !loadedAt || !isCached; 
    }
});

export const fetchTeamByID = (orgId) => ({
    types: [GET_TEAM_PENDING,GET_TEAM_SUCCESS,GET_TEAM_ERROR],
    callAPI: () => API.get(`/teams?orgId=${orgId}`),
    shouldCallAPI: state => {
    const { loadedAt, pending } = state.teams;
    // if items are currently loading don't call again
    if (pending) return false;
    const isCached = Date.now() - loadedAt < CACHE_TIME;
    // if we don't have the item or it's beyond the cache timeout make the api call
    return !loadedAt || !isCached; 
    }
});

export const createTeam = team => {
  const id = uuid();
  return{
    types: [ADD_TEAM_PENDING,ADD_TEAM_SUCCESS,ADD_TEAM_ERROR],
    callAPI: () => API.post('/teams', {id, ...team}),
    payload: {id}
  }
}

export const deleteTeam = id => ({
  types: [DELETE_TEAM_PENDING,DELETE_TEAM_SUCCESS,DELETE_TEAM_ERROR],
  callAPI: () => API.delete(`/teams/${id}`)
});