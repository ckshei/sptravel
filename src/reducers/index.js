import { combineReducers } from 'redux';
import TripsReducer from './reducer_trips';
import ViewReducer from './reducer_view'

const rootReducer = combineReducers ({
  trips: TripsReducer,
  view: ViewReducer
});

export default rootReducer;
