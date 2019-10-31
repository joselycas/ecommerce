import {BrowserRouter} from 'react-router-dom';
import {setCurrentUser} from './currentUser'

export function logIn(formData, history) {
  return (dispatch) => {
  fetch('http://localhost:3000/api/v1/login', {
    // formData: 'include',
    // method: "GET",

    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify({user:formData})
  })
  .then(res => res.json())
  .then(user => {
    if (user.error) {
        alert(user.error)
    } else {
        const token = user.jwt
        console.log(token)
        localStorage.setItem("jwtToken", token)
        dispatch(setCurrentUser(user))
  //       dispatch({
  //       type: 'LOGIN_USER',
  //       payload: user
  // })
        history.push(`/users/${user.user_id}`)
    }
  })
 }
}
