export default function(state = {view: 'intro'}, action) {
  switch(action.type) {
    case 'changeToDeparture':
      return {view: "departure"}
    default:
      return state
  }
}
