import React, { Component } from 'react'
import {Form, Button} from 'react-bootstrap'


class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  submitLogin(e) {}

  render() {
    return (
      <div className="inner-container">
        <div className="header">
          Login
        </div>
        <div className="box">

          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              className="login-input"
              placeholder="Username"/>
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              className="login-input"
              placeholder="Password"/>
          </div>

          <button
            type="button"
            className="login-btn"
            onClick={this
            .submitLogin
            .bind(this)}>Login</button>
        </div>
      </div>
    );
  }

}
  //
  //   state = {
  //   name: '',
  //   email: '',
  //   password: ''
  // }
  //
  //   handleOnSubmit = () =>{
  //     return "Hello"
  //   }
  //   render()
  //     {
  //       return(
  //         <div>
  //         <h1>Sign Up or Login</h1>
  //         <Form class="logInForm">
  //       <Form.Group controlId="formBasicEmail">
  //       <h2>Log In</h2>
  //         <Form.Label>Email address</Form.Label>
  //         <Form.Control type="email" placeholder="Enter email" />
  //       </Form.Group>
  //
  //       <Form.Group controlId="formBasicPassword">
  //         <Form.Label>Password</Form.Label>
  //         <Form.Control type="password" placeholder="Password" />
  //       </Form.Group>
  //       <Form.Group controlId="formBasicCheckbox">
  //         <Form.Check type="checkbox" label="Check me out" />
  //       </Form.Group>
  //       <Button variant="primary" type="submit">
  //         Submit
  //       </Button>
  //     </Form>
  //     <Form class="logInForm">
  //   <Form.Group controlId="formBasicEmail">
  //   <h2>Sign Up</h2>
  //     <Form.Label>User Name</Form.Label>
  //     <Form.Control type="email" placeholder="Enter email" />
  //   </Form.Group>
  //   <Form.Group controlId="formBasicEmail">
  //     <Form.Label>Email address</Form.Label>
  //     <Form.Control type="email" placeholder="Enter email" />
  //   </Form.Group>
  //   <Form.Group controlId="formBasicPassword">
  //     <Form.Label>Password</Form.Label>
  //     <Form.Control type="password" placeholder="Password" />
  //   </Form.Group>
  //   <Form.Group controlId="formBasicPassword">
  //     <Form.Label>Confirm Password</Form.Label>
  //     <Form.Control type="password" placeholder="Password" />
  //   </Form.Group>
  //   <Button variant="primary" type="submit">
  //     Submit
  //   </Button>
  // </Form>
  // </div>
  //
  //     )
  //   }

// }

export default Login
