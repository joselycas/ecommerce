import React, { Component } from 'react'
import {connect} from 'react-redux'
import {currentUser} from '../actions/currentUser'
import {setCurrentUser} from '../actions/currentUser'

class User extends React.Component {

  componentDidMount(){
    let token = localStorage.getItem("jwtToken")
    if (token){
      //send to backend
      fetch('http://localhost:3000/api/v1/current_user', {
        method:'GET',
        headers: {
          auth: token
        }
      })
        .then(res => res.json())
        .then(user => this.props.setCurrentUser(user));
    }

  }


  render(){
    console.log("loggedInUser", this.props.loggedInUser)
      console.log("currentUser", this.props.currentUser)
  return (
    <div>
      <h1>Hi {this.props.loggedInUser.currentUser ? this.props.loggedInUser.currentUser.name : null} </h1>
      <p>Shop on! Products </p>

    </div>
  )
  }


  }

  const mapDispatchToProps = (dispatch) => {
    return {
      currentUser: () => dispatch(currentUser()),
      setCurrentUser: (user) => dispatch(setCurrentUser(user))
    }
  }

  const mapStateToProps = state => {
    return{
      loggedInUser: state.currentUser
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(User);
