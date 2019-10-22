import {BrowserRouter} from 'react-router-dom';


export function logIn(formData, history) {
  debugger
  return (dispatch) => {
  fetch('http://localhost:3000/api/v1/login', {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify(formData)
  })
  .then(res => res.json())
  .then(user => {
    dispatch({
    type: 'LOGIN_USER',
    payload: formData
  })
  history.push(`/users/${user.id}`)})
  }
}
