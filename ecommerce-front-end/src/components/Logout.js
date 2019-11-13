import React from 'react'
import {logOut} from '../actions/logOut'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

const Logout = ({ logOut, history }) => {
  return (
    <form onSubmit={(event) => {
        event.preventDefault()
        logOut()
        history.push('/')
      }
    }>
      <input type="submit" value="Log Out"/>
    </form>
  )
}
export default connect(null, {logOut})(Logout)
