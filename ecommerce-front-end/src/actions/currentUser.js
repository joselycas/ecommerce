export const currentUser = () => {
  return dispatch => {
    return fetch("http://localhost:3001/api/v1/current_user")
    .then(res => res.json())
    .then(user => {
      dispatch({
      type: 'CURRENT_USER',
      user
    });
  });
  }
}
