export default (state = {currentUser: null}, action) => {
  switch (action.type) {
    case "CURRENT_USER":
      return {currentUser: action.user}
    default:
      return state
  }
}
