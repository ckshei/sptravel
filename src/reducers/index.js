import { combineReducers } from 'redux';
import TripsReducer from './reducer_trips';
import ViewReducer from './reducer_view'
import CitiesReducer from './reducer_cities'

const rootReducer = combineReducers ({
  trips: TripsReducer,
  view: ViewReducer,
  cities: CitiesReducer
});

export default rootReducer;
