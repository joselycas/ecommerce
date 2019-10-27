import React, { Component } from 'react'
import {connect} from 'react-redux'
import {currentUser} from '../actions/currentUser'

class User extends React.Component {

  // constructor(props){
  //   super(props);
  //   this.state = {
  //     user: null
  //   }
  // }

  componentDidMount(){
    this.props.currentUser()
  }

  render(){
  return (
    <div>
      <h1>Hi {currentUser}</h1>

    </div>
  )
  }


  }

  const mapDispatchToProps = (dispatch) => {
    return {
      currentUser: () => dispatch(currentUser())
    }
  }
// const mapStateToProps = (state) => {
//   return{
//     state:state.user
//   }
// }

export default connect(null, mapDispatchToProps)(User);
