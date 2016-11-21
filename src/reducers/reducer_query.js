import { SET_RETURN, SET_CITY, SET_BUDGET, SET_DEPARTURE } from '../actions/set_query'

export default function(state = null, action) {
  switch(action.type) {
    case SET_RETURN:
      return action.payload
    case SET_CITY:
      return action.payload
    case SET_BUDGET:
      return action.payload
    case SET_DEPARTURE:
      return action.payload
    default:
      return state
  }
}
