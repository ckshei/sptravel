import { FETCH_CITIES } from '../actions/fetch_cities'

export default function(state = null, action) {
  switch(action.type) {
    case FETCH_CITIES:
      return action.payload
    default: 
      return state 
  }  
}
