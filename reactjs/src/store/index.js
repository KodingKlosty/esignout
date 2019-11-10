// get all the functions we need from redux
import { combineReducers, createStore, applyMiddleware } from 'redux';
// middleware for making actions asynchronous
import thunkMiddleware from 'redux-thunk';
// will log to console all the actions that are run
import { createLogger } from 'redux-logger';
// middleware to help with api calls
import callAPI from './helpers/callAPIMiddleware';

// pull our reducers
import orgs from './orgs/reducer'
import teams from './teams/reducer'
import users from './users/reducer'
import status from './status/reducer'
import level from './level/reducers'
import locations from './locations/reducers'

// combine multiple reducers into one
const rootReducer = combineReducers({
    orgs,
    teams,
    users,
    status,
    level,
    locations
});

const middleware = applyMiddleware(thunkMiddleware, callAPI, createLogger());
// set up middleware

// create a redux store using the combined reducer and middleware functions
const store = createStore(rootReducer, middleware);

export default store;