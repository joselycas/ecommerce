
const initialState = {
  username: "",
  emai: "",
  password: "",

}

export default (state=initialState, action) => {
  switch (action.type) {
    case "ADD_USER":
      return action.formData
    default:
      return state
  }
}
