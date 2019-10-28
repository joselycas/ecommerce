import React, { Component } from 'react'
import {connect} from 'react-redux'
import {currentUser} from '../actions/currentUser'

class User extends React.Component {

  componentDidMount(){
    this.props.currentUser()
  }




  render(){
    console.log(this.props.currentUser.name)
  return (
    <div>
      <h1>Hi {this.props.currentUser.name} </h1>

    </div>
  )
  }


  }

  const mapDispatchToProps = (dispatch) => {
    return {
      currentUser: () => dispatch(currentUser())
    }
  }

  const mapStateToProps = state => {
    return{
      currentUser: state.currentUser
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(User);
