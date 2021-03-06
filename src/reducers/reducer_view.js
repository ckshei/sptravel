import { RENDER_DEPARTURE, RENDER_DATE, RENDER_BUDGET, RENDER_RESULT } from '../actions/index'

export default function(state = null, action) {
  switch(action.type) {
    case RENDER_DEPARTURE:
      return "departure"
    case RENDER_DATE:
      return 'date'
    case RENDER_BUDGET:
      return 'budget'
    case RENDER_RESULT:
      return 'result'
    default:
      return state
  }
}
