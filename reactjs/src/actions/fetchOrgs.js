import API from '../API'
import uuid from 'uuid/v4'
import {
    FETCH_ORGS_PENDING, FETCH_ORGS_SUCCESS,FETCH_ORGS_ERROR, 
    GET_ORG_SUCCESS, GET_ORG_ERROR,GET_ORG_PENDING,
    DELETE_ORG_SUCCESS, DELETE_ORG_ERROR, DELETE_ORG_PENDING, 
    //UPDATE_ORG_SUCCESS,UPDATE_ORG_PENDING,UPDATE_ORG_ERROR, // Update of Org happens in teams and Users but maybe add a way to change the name to use this?
    ADD_ORG_ERROR, ADD_ORG_PENDING, ADD_ORG_SUCCESS} from './types'

const CACHE_TIME = 1000 * 60 * 5;

export const fetchAllOrgs = () => ({

    types: [ FETCH_ORGS_PENDING, FETCH_ORGS_SUCCESS ,FETCH_ORGS_ERROR],

    callAPI: () => API.get('/orgs'),
      // receives the current app state and returns true if we should call the api
    shouldCallAPI: state => {
    const { loadedAt, pending} = state.orgs;
    // if items are currently loading don't call again
    if (pending) return false;
    const isCached = Date.now() - loadedAt < CACHE_TIME;
    // if we don't have the item or it's beyond the cache timeout make the api call
    return !loadedAt || !isCached; 
    }
  
});

export const fetchOrg = (id) => ({

  types: [ GET_ORG_PENDING, GET_ORG_SUCCESS, GET_ORG_ERROR ],

  callAPI: () => API.get(`/orgs/${id}`),
  shouldCallAPI: state => {
    const org = state.org || {};
    const { loadedAt, pending} = org;
    if (pending) return false;
    const isCached = Date.now() - loadedAt < CACHE_TIME;
    // if we don't have the item or it's beyond the cache timeout make the api call
    return !loadedAt || !isCached;
  },
  payload: {id}
});

export const createOrg = org => {
  const id = uuid();
  return{
    types: [ADD_ORG_PENDING,ADD_ORG_SUCCESS,ADD_ORG_ERROR],
    callAPI: () => API.post('/orgs', {id, ...org}),
    payload: {id}
  }
}

export const deleteOrg = id => ({
  types: [DELETE_ORG_PENDING,DELETE_ORG_SUCCESS,DELETE_ORG_ERROR],
  callAPI: () => API.delete(`/orgs/${id}`)
});
