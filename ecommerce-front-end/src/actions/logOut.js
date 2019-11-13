import {clearCurrentUser} from './currentUser'

export const logOut = event => {
  return dispatch => {
    dispatch(clearCurrentUser())
    return fetch('http://localhost:3001/api/v1/logout', {
      method: "DELETE"
    })
  }
}
