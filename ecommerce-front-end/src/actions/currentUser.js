export const setCurrentUser = user => {
  return {
    type: "CURRENT_USER",
    user
  }
}

export const currentUser = () => {
  return dispatch => {
    return fetch("http://localhost:3000/api/v1/current_user", {
      formData: "include",
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }})
    .then(res => res.json())
    .then(user => {
      dispatch(setCurrentUser(user.data))
      dispatch({
      type: 'CURRENT_USER',
      user

    });

  });
  }
}
