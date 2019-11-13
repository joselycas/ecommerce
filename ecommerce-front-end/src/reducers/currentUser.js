export default function currentUser(state = {currentUser: null}, action) {
  switch (action.type) {
    case "CURRENT_USER":
      return {currentUser: action.user}
    case "CLEAR_CURRENT_USER":
      return null
    default:
      return state
  }
}
