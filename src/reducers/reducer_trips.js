import { FETCH_TRIPS } from '../actions/fetch_trips.js'

export default function(state = null, action) {
  switch(action.type) {
  case FETCH_TRIPS:
    return: action.payload
  default:
    return state
  }
}
