import API from '../API'
import uuid from 'uuid/v4'
import {
    FETCH_LOCATIONS_PENDING, FETCH_LOCATIONS_SUCCESS,FETCH_LOCATIONS_ERROR, 
    GET_LOCATION_PENDING,GET_LOCATION_SUCCESS,GET_LOCATION_ERROR,
    ADD_LOCATION_PENDING, ADD_LOCATION_SUCCESS, ADD_LOCATION_ERROR,
    DELETE_LOCATION_PENDING, DELETE_LOCATION_SUCCESS, DELETE_LOCATION_ERROR
} from './types'

const CACHE_TIME = 1000 * 60 * 5;

export const fetchLocationsByID = (orgid) => ({

    types: [ FETCH_LOCATIONS_PENDING, FETCH_LOCATIONS_SUCCESS, FETCH_LOCATIONS_ERROR],

    callAPI: () => API.get(`/locations?orgId=${orgid}`),
      // receives the current app state and returns true if we should call the api
    shouldCallAPI: state => {
    const { loadedAt, pending} = state.locations;
    // if items are currently loading don't call again
    if (pending) return false;
    const isCached = Date.now() - loadedAt < CACHE_TIME;
    // if we don't have the item or it's beyond the cache timeout make the api call
    return !loadedAt || !isCached; 
    }
  
});

export const fetchLocation = (id) => ({

  types: [GET_LOCATION_PENDING,GET_LOCATION_SUCCESS,GET_LOCATION_ERROR],

  callAPI: () => API.get(`/locations/${id}`),
  shouldCallAPI: state => {
    const locations = state.locations || {};
    const { loadedAt, pending} = locations;
    if (pending) return false;
    const isCached = Date.now() - loadedAt < CACHE_TIME;
    // if we don't have the item or it's beyond the cache timeout make the api call
    return !loadedAt || !isCached;
  },
  payload: {id}
});

export const createLocation = location => {
  console.log("location", location)
  const id = uuid();
  return{
    types: [ADD_LOCATION_PENDING, ADD_LOCATION_SUCCESS, ADD_LOCATION_ERROR],
    callAPI: () => API.post('/locations', {id, ...location}),
    payload: {id}
  }
}

export const deleteLocation = id => ({
  types: [DELETE_LOCATION_PENDING, DELETE_LOCATION_SUCCESS, DELETE_LOCATION_ERROR],
  callAPI: () => API.delete(`/locations/${id}`)
});
