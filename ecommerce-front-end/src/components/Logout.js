import React from 'react'
import {logOut} from '../actions/currentUser'
 const Logout = () => {

   this.handleOnSubmit = (e) => {
     e.preventDefault()
     logOut()
   }

  return(
    <div>
      <form onSubmit={this.handleOnSubmit}>
        <input type="submit" value="Log Out"/>
      </form>
    </div>
  )


}
export default Logout
