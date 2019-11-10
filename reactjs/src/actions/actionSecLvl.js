import API from '../API'
import {
    FETCH_LEVEL_PENDING, FETCH_LEVEL_SUCCESS, FETCH_LEVEL_ERROR,
    GET_LEVEL_PENDING, GET_LEVEL_SUCCESS, GET_LEVEL_ERROR,
    DELETE_LEVEL_PENDING, DELETE_LEVEL_SUCCESS, DELETE_LEVEL_ERROR
} from './types'

const CACHE_TIME = 1000 * 60 * 5;

export const fetchAllLevels = (id) => ({

    types: [FETCH_LEVEL_PENDING, FETCH_LEVEL_SUCCESS, FETCH_LEVEL_ERROR],

    callAPI: () => API.get(`/level`),
      // receives the current app state and returns true if we should call the api
    shouldCallAPI: state => {
    const { loadedAt, pending} = state.level;
    // if items are currently loading don't call again
    if (pending) return false;
    const isCached = Date.now() - loadedAt < CACHE_TIME;
    // if we don't have the item or it's beyond the cache timeout make the api call
    return !loadedAt || !isCached; 
    }
  
});

export const fetchSecLevel = (id) => ({

  types: [    GET_LEVEL_PENDING, GET_LEVEL_SUCCESS, GET_LEVEL_ERROR  ],

  callAPI: () => API.get(`/level/${id}`),
  shouldCallAPI: state => {
    const level = state.level || {};
    const { loadedAt, pending} = level;
    if (pending) return false;
    const isCached = Date.now() - loadedAt < CACHE_TIME;
    // if we don't have the item or it's beyond the cache timeout make the api call
    return !loadedAt || !isCached;
  },
  payload: {id}
});

/* Security Levels are set by programming. 
export const createLevel = status => {
  const id = uuid();
  return{
    types: [ADD_LEVEL_PENDING,ADD_LEVEL_SUCCESS,ADD_LEVEL_ERROR ],
    callAPI: () => API.post('/status', {id, ...}),
    payload: {id}
  }
}
*/
export const deleteStatus = id => ({
  types: [DELETE_LEVEL_PENDING, DELETE_LEVEL_SUCCESS, DELETE_LEVEL_ERROR],
  callAPI: () => API.delete(`/status/${id}`)
});