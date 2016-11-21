import { combineReducers } from 'redux';
import TripsReducer from './reducer_trips';
import ViewReducer from './reducer_view'
import CitiesReducer from './reducer_cities'
import QueryReducer from './reducer_query'

const rootReducer = combineReducers ({
  trips: TripsReducer,
  view: ViewReducer,
  cities: CitiesReducer,
  query: QueryReducer
});

export default rootReducer;
