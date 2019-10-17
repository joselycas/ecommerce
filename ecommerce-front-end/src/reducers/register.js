

export default function registerUser(state = [], action) {
  switch (action.type) {
    case "ADD_USER":
      return [...state, action.payload]
    default:
      return state
  }
}


// export default function usersReducer(state = [], action) {
//
//   switch (action.type) {
//   case 'FETCH_USERS':
//     return action.payload
//   case 'ADD_USER':
//     return [...state, action.payload]
//     case 'ADD_RECEIPT':
//     return state.map(user => {
//       if (user.id === action.payload.id) {
//         return action.payload
//       }else {
//         return state
//       }
//     })
//   default:
//     return state
//
//   }
// }
