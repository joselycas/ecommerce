const initialState = {
  username: '',
  password: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_LOGIN":
      return action.user
    default:
      return state
  }
}
