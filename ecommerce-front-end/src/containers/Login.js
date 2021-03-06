import React, { Component } from 'react'
import {Form, Button, Col} from 'react-bootstrap'
import {connect} from 'react-redux'
import {logIn} from '../actions/logIn'
import {BrowserRouter} from 'react-router-dom';




class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password:"",
      errors:[]
    };
  }

  submitLogin = (e) => {
    e.preventDefault()
    if (this.state.email == "") {
      this.showValidationErr("email", "email Cannot be empty!");
   }
   if (this.state.password == "") {
     this.showValidationErr("password", "Password Cannot be empty!");
   }
    this.props.logIn(this.state, this.props.history)
   this.setState({
    email: '',
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
    this.setState({email: e.target.value});
    //We want to clear the error when ever the user type something new
    this.clearValidationErr("email");
  }

  onPasswordChange = (e) => {
    this.setState({password: e.target.value});
    this.clearValidationErr("password");
  }

  render() {
    //NULL by default (help us check when rendering)
    let emailErr = null,
      passwordErr = null
    //Loop and find which ones has the error
    for (let err of this.state.errors) {
      //Assign the validation error message
      if (err.elem == "email") {
        emailErr = err.msg;
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
            <Form.Label htmlFor="email">email</Form.Label>
            <Form.Control
              type="text"
              name="email"
              className="login-input"
              placeholder="email"
              onChange={this.onUsernameChange}/>
              <small className="danger-error">{emailErr ? emailErr : ""}</small>
            </Col>
          <Col>
            <Form.Label htmlFor="current-password">Password</Form.Label>
            <Form.Control
              type="current-password"
              name="current-password"
              className="login-input"
              placeholder="Password"
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
