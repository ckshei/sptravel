export default function(state = {view: 'intro'}, action) {
  switch(action.type) {
    case 'RENDER_DEPARTURE':
      return "departure"
    case 'RENDER_DATE':
      return 'date'
    case 'RENDER_BUDGET':
      return 'budget'
    case 'RENDER_RESULT':
      return 'result'
    default:
      return state
  }
}
