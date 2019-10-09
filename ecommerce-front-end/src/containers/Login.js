import React, { Component } from 'react'
import {Form, Button, Col} from 'react-bootstrap'
import {connect} from 'react-redux'
import {logIn} from '../actions/logIn'



class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password:"",
      errors:[]
    };
  }

  submitLogin = (e) => {
    e.preventDefault()
    if (this.state.username == "") {
      this.showValidationErr("username", "Username Cannot be empty!");
   }
   if (this.state.password == "") {
     this.showValidationErr("password", "Password Cannot be empty!");
   }
    this.props.logIn(this.state)


   this.setState({
    username: '',
    password: ''
    })
  }

  showValidationErr = (elem, msg) => {
    this.setState((prevState) => ({
      errors: [
      ...prevState.errors, {
        elem,
        msg
      }
      ]
    })
  );
}
//Remove a specific element from the array
clearValidationErr = (elem) => {
  this.setState((prevState) => {
    let newArr = [];
    //Add all elements from the prev array to the new one that has a different element
    for (let err of prevState.errors) {
      if (elem != err.elm) {
        newArr.push(err);
      }
    }
    return {errors: newArr};
  });
}

  onUsernameChange = (e) => {
    this.setState({username: e.target.value});
    //We want to clear the error when ever the user type something new
    this.clearValidationErr("username");
  }

  onPasswordChange = (e) => {
    this.setState({password: e.target.value});
    this.clearValidationErr("password");
  }

  render() {
    //NULL by default (help us check when rendering)
    let usernameErr = null,
      passwordErr = null
    //Loop and find which ones has the error
    for (let err of this.state.errors) {
      //Assign the validation error message
      if (err.elem == "username") {
        usernameErr = err.msg;
      }
      if (err.elem == "password") {
        passwordErr = err.msg;
      }

      //No (else if or else) statements cause we need to check for all possible elements
    }

    return (
    <Form>
      <div className="inner-container">
        <div className="header">
          Welcome back! Please login below
        </div>

        <div className="box">

          <div className="input-group">
          <Form.Row>
          <Col>
            <Form.Label htmlFor="username">Username</Form.Label>
            <Form.Control
              type="text"
              name="username"
              className="login-input"
              placeholder="Username"
              onChange={this.onUsernameChange}/>
              <small className="danger-error">{usernameErr ? usernameErr : ""}</small>
            </Col>
          <Col>
            <Form.Label htmlFor="password">Password</Form.Label>
            <Form.Control
              type="password"
              name="password"am
              className="login-input"
              placeholqwder="Password"
              onChange={this.onPasswordChange}/>
              <small className="danger-error">{passwordErr ? passwordErr : ""}</small>
            </Col>
            <Col>
            <button
              type="button"
              className="login-btn"
              onClick={this.submitLogin}>Login</button>
            </Col>
            </Form.Row>
          </div>


        </div>
      </div>
      </Form>

    );
  }

}



export default connect(null, {logIn})(Login)
