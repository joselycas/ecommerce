import {BrowserRouter} from 'react-router-dom';


export function register(formData, history) {
  return (dispatch) => {
  fetch('http://localhost:3000/api/v1/users', {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(formData)
  })
  .then(res => res.json())
  .then(user => {
    dispatch({
    type: 'ADD_USER',
    payload: formData
  })
  history.push(`/users/${user.id}`)})
  }
}






// export const register = formData => {
//   return {
//     type: "UPDATE_SIGNUP_FORM",
//     formData
//   }
// }
