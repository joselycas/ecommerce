import React, { Component } from 'react'
import {connect} from 'react-redux'
import {currentUser} from '../actions/currentUser'

class User extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      currentUser: []
    }
  }

  componentDidMount(){
    this.props.currentUser()
  }



  componentWillMount(nextProps, nextState){
    //commented this out because nextState was causing an error
    // localStorage.setItem("user", JSON.stringify(nextState.currentUser))
  }




  render(){
    console.log(this.state)
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
      currentUser: state.user
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(User);
