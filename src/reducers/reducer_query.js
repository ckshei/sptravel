import { SET_RETURN, SET_CITY, SET_BUDGET, SET_DEPARTURE } from '../actions/set_query'

export default function(state = null, action) {		
  switch(action.type) {		
    case SET_RETURN:	
      return {...state, returnDate: action.payload}
    case SET_CITY:		
      return {...state, city: action.payload}		
    case SET_BUDGET:		
      return {...state, budget: action.payload}		
    case SET_DEPARTURE:
      return {...state, departureDate: action.payload}		
    default:		
      return state		
  }		
}
