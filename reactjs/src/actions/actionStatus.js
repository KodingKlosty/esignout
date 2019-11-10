import API from '../API'
import uuid from 'uuid/v4'
import {
    FETCH_STATUSES_PENDING, FETCH_STATUSES_SUCCESS, FETCH_STATUSES_ERROR,
    GET_STATUS_PENDING, GET_STATUS_SUCCESS, GET_STATUS_ERROR,
    ADD_STATUS_PENDING,ADD_STATUS_SUCCESS,ADD_STATUS_ERROR, 
    DELETE_STATUS_PENDING, DELETE_STATUS_SUCCESS, DELETE_STATUS_ERROR
} from './types'

const CACHE_TIME = 1000 * 60 * 5;

export const fetchStatusByID = (orgId) => ({

    types: [ FETCH_STATUSES_PENDING, FETCH_STATUSES_SUCCESS, FETCH_STATUSES_ERROR],

    callAPI: () => API.get(`/status?orgid=${orgId}`),
      // receives the current app state and returns true if we should call the api
    shouldCallAPI: state => {
    const { loadedAt, pending} = state.status;
    // if items are currently loading don't call again
    if (pending) return false;
    const isCached = Date.now() - loadedAt < CACHE_TIME;
    // if we don't have the item or it's beyond the cache timeout make the api call
    return !loadedAt || !isCached; 
    }
  
});

export const fetchStatus = (id) => ({

  types: [GET_STATUS_PENDING, GET_STATUS_SUCCESS, GET_STATUS_ERROR],

  callAPI: () => API.get(`/status/${id}`),
  shouldCallAPI: state => {
    const status = state.status || {};
    const { loadedAt, pending} = status;
    if (pending) return false;
    const isCached = Date.now() - loadedAt < CACHE_TIME;
    // if we don't have the item or it's beyond the cache timeout make the api call
    return !loadedAt || !isCached;
  },
  payload: {id}
});

export const createStatus = status => {
  const id = uuid();
  return{
    types: [ADD_STATUS_PENDING,ADD_STATUS_SUCCESS,ADD_STATUS_ERROR ],
    callAPI: () => API.post('/status', {id, ...status}),
    payload: {id}
  }
}

export const deleteStatus = id => ({
  types: [DELETE_STATUS_PENDING, DELETE_STATUS_SUCCESS, DELETE_STATUS_ERROR],
  callAPI: () => API.delete(`/status/${id}`)
});
