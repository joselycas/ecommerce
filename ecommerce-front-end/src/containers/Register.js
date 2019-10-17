import React from 'react'
import {Form, Button, Col} from 'react-bootstrap'
import {connect} from 'react-redux'
import {register} from '../actions/register'
import {BrowserRouter} from 'react-router-dom';



class Register extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password:"",
      errors:[]
    };
  }

  submitRegister = (e) => {
    if (this.state.name == "") {
      this.showValidationErr("username", "Username Cannot be empty!");
   }
   if (this.state.email == "") {
     this.showValidationErr("email", "Email Cannot be empty!");
   }
   if (this.state.password == "") {
     this.showValidationErr("password", "Password Cannot be empty!");
   }
   this.props.register({user:this.state}, this.props.history)
   this.setState({
     name: "",
     email: "",
     password:""
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

onUsernameChange =(e) => {
  this.setState({name: e.target.value});
  //We want to clear the error when ever the user type something new
  this.clearValidationErr("username");
}

onEmailChange = (e) => {
  this.setState({email: e.target.value});
  this.clearValidationErr("email");
}

onPasswordChange = (e) => {
  this.setState({password: e.target.value});
  this.clearValidationErr("password");
  this.setState({pwdState: "weak"});
  if (e.target.value.length > 8) {
    this.setState({pwdState: "medium"});
  } else if (e.target.value.length > 12) {
    this.setState({pwdState: "strong"});
  }
}


  render() {
    //NULL by default (help us check when rendering)
    let usernameErr = null,
      passwordErr = null,
      emailErr = null;
    //Loop and find which ones has the error
    for (let err of this.state.errors) {
      //Assign the validation error message
      if (err.elem == "username") {
        usernameErr = err.msg;
      }
      if (err.elem == "password") {
        passwordErr = err.msg;
      }
      if (err.elem == "email") {
        emailErr = err.msg;
      }
      //No (else if or else) statements cause we need to check for all possible elements
    }

    let pwdWeak = false,
    pwdMedium = false,
    pwdStrong = false;
    //Weak password set onlt the pwdWeak to true, cause render only the first bar
    if (this.state.pwdState == "weak") {
      pwdWeak = true;
      } else if (this.state.pwdState == "medium") {
        //Medium pwd then render the weak and medium bars
        pwdWeak = true;
        pwdMedium = true;
      } else if (this.state.pwdState == "strong") {
        //Strong, render all the previoud bars
        pwdWeak = true;
        pwdMedium = true;
        pwdStrong = true;
    }

    return (
    <Form>
      <div className="inner-container">
        <div className="header">
          Welcome! Please Sign Up!
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
                onChange={this.onUsernameChange}
                value={this.state.username}
                />
                <small className="danger-error">{usernameErr ? usernameErr : ""}</small>
            </Col>
            <Col>
              <Form.Label htmlFor="email">Email</Form.Label>
              <Form.Control
                 type="text" name="email"
                 className="login-input"
                 placeholder="Email"
                 onChange={this.onEmailChange}
                 value={this.state.email}
              />
              <small className="danger-error">{emailErr ? emailErr : ""}</small>
            </Col>
            <Col>
              <Form.Label htmlFor="current-password">Password</Form.Label>
              <input
                type="current-password"
                name="current-password"
                className="login-input"
                placeholder="current-password"
                onChange={this.onPasswordChange}
                value={this.state.password}/>
                <small className="danger-error">{passwordErr ? passwordErr : ""}</small>
            </Col>
            <Col>
            <button
              type="button"
              className="login-btn"
              onClick={this.submitRegister}>Register
            </button>
          </Col>
          </Form.Row>
        </div>

      </div>
    </div>
    </Form>
      );
    }
  }


export default connect(null, {register})(Register)



//Do it for all the other inputs
