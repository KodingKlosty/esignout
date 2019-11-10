import API from '../API'
import uuid from 'uuid/v4'

import {FETCH_USERS_PENDING,FETCH_USERS_SUCCESS,FETCH_USERS_ERROR,
        GET_USER_PENDING,GET_USER_SUCCESS,GET_USER_ERROR,
        ADD_USER_PENDING,ADD_USER_SUCCESS,ADD_USER_ERROR,
        DELETE_USER_PENDING,DELETE_USER_SUCCESS,DELETE_USER_ERROR} 
        from './types'

const CACHE_TIME = 1000 * 60 * 5;

export const fetchAllUsers = () => ({

    types: [ FETCH_USERS_PENDING,FETCH_USERS_SUCCESS,FETCH_USERS_ERROR],

    callAPI: () => API.get('/users'),
      // receives the current app state and returns true if we should call the api
    shouldCallAPI: state => {
    const { loadedAt, pending } = state.users;
    // if items are currently loading don't call again
    if (pending) return false;
    const isCached = Date.now() - loadedAt < CACHE_TIME;
    // if we don't have the item or it's beyond the cache timeout make the api call
    return !loadedAt || !isCached; 
    }
});

export const fetchUsersByOrgID = (orgId) => ({
  types: [GET_USER_PENDING,GET_USER_SUCCESS,GET_USER_ERROR],
  callAPI: () => API.get(`/users?org=${orgId}`),
  shouldCallAPI: state => {
  const { loadedAt, pending } = state.users;
  // if items are currently loading don't call again
  if (pending) return false;
  const isCached = Date.now() - loadedAt < CACHE_TIME;
  // if we don't have the item or it's beyond the cache timeout make the api call
  return !loadedAt || !isCached; 
  }
});

export const fetchUsersByID = (teamId,orgId) => ({
    types: [GET_USER_PENDING,GET_USER_SUCCESS,GET_USER_ERROR],
    callAPI: () => API.get(`/users?team=${teamId}&org=${orgId}`),
    shouldCallAPI: state => {
    const { loadedAt, pending } = state.users;
    // if items are currently loading don't call again
    if (pending) return false;
    const isCached = Date.now() - loadedAt < CACHE_TIME;
    // if we don't have the item or it's beyond the cache timeout make the api call
    return !loadedAt || !isCached; 
    }
});

export const fetchUsersByTeamID = (teamId) => ({
  types: [GET_USER_PENDING,GET_USER_SUCCESS,GET_USER_ERROR],
  callAPI: () => API.get(`/users?team=${teamId}`),
  shouldCallAPI: state => {
  const { loadedAt, pending } = state.users;
  // if items are currently loading don't call again
  if (pending) return false;
  const isCached = Date.now() - loadedAt < CACHE_TIME;
  // if we don't have the item or it's beyond the cache timeout make the api call
  return !loadedAt || !isCached; 
  }
});

export const fetchUsersByOrgLevel = (orgId,level) => ({
  types: [GET_USER_PENDING,GET_USER_SUCCESS,GET_USER_ERROR],
  callAPI: () => API.get(`/users?org=${orgId}&level=${level}`),
  shouldCallAPI: state => {
  const { loadedAt, pending } = state.users;
  // if items are currently loading don't call again
  if (pending) return false;
  const isCached = Date.now() - loadedAt < CACHE_TIME;
  // if we don't have the item or it's beyond the cache timeout make the api call
  return !loadedAt || !isCached; 
  }
});

export const fetchUsersByLevel = (level) => ({
  types: [GET_USER_PENDING,GET_USER_SUCCESS,GET_USER_ERROR],
  callAPI: () => API.get(`/users?level=${level}`),
  shouldCallAPI: state => {
  const { loadedAt, pending } = state.users;
  // if items are currently loading don't call again
  if (pending) return false;
  const isCached = Date.now() - loadedAt < CACHE_TIME;
  // if we don't have the item or it's beyond the cache timeout make the api call
  return !loadedAt || !isCached; 
  }
});

export const createUser = user => {
  const id = uuid();
  return{
    types: [ADD_USER_PENDING, ADD_USER_SUCCESS, ADD_USER_ERROR],
    callAPI: () => API.post('/users', {id, ...user}),
    payload: {user}
  }
}

export const deleteUser = id => ({
  types: [DELETE_USER_PENDING,DELETE_USER_SUCCESS,DELETE_USER_ERROR],
  callAPI: () => API.delete(`/orgs/${id}`)
});