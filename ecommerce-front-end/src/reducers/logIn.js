export default function logInUser(state = [], action) {
  switch (action.type) {
    case "LOGIN_USER":
      return [...state, action.payload]
    default:
      return state
  }
}
