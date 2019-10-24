import React from 'react';
import {connect} from 'react-redux'

const User = (props) => {
console.log(props.state)
  return (
    <div>
      <h1>Hi {props.users}</h1>

    </div>
  )
}

const mapStateToProps = (state) => {
  return{
    state:state.users

  }
}

export default connect(mapStateToProps)(User);
