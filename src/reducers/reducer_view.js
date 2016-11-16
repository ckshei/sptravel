export default function(state = {view: 'intro'}, action) {
  switch(action.type) {
    case 'RENDER_DEPARTURE':
      return "departure"
    default:
      return state
  }
}
