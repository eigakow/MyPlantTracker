import { applyMiddleware, combineReducers, createStore } from 'redux';

// actions
export const loadPlantsStore = plants => ({
  type: 'LOAD_PLANTS',
  plants
});
export const loggedIn = loggedState => ({
  type: 'LOGGED_IN'
});
export const loggedOut = loggedState => ({
  type: 'LOGGED_OUT'
});
export const loadEventsStore = events => ({
  type: 'LOAD_EVENTS',
  events
});
export const addEventStore = events => ({
  type: 'ADD_EVENT',
  events
});

// reducers
export const plants = (state = {}, action) => {
  switch (action.type) {
    case 'LOAD_PLANTS':
      return action.plants;
    default:
      return state;
  }
};
export const events = (state = {}, action) => {
  switch (action.type) {
    case 'LOAD_EVENTS':
      return action.events;
    default:
      return state;
  }
};
export const loggedState = (state = false, action) => {
  switch (action.type) {
    case 'LOGGED_IN':
      return true;
    case 'LOGGED_OUT':
      return false;
    case 'LOGGED_QUERY':
      return state;
    default:
      return state;
  }
};

export const reducers = combineReducers({
  plants,
  events,
  loggedState
});

// store
export function configureStore(initialState = {}) {
  const store = createStore(reducers, initialState);
  return store;
}

export const store = configureStore();
