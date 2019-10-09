const currentUser = user => {
  return {
    type: 'SET_CURRENT_USER',
    user
  }
}


// move to own folder
const logIn = credentials => {
  return dispatch => {

    return fetch('http://localhost:3000/api/v1/login'), {
      method:"POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringyfy
    }
  }
}
