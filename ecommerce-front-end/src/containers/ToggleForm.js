import React, {Component} from 'react'
import Register from './Register'
import Login from './Login'
import ToggleFormCss from '../ToggleFormCss.css'



class ToggleForm extends Component {

  constructor(props) {
   super(props);
   this.state = {
     isLoginOpen: true,
     isRegisterOpen: false
   };
 }


  render() {
    return (
    <>
    <div className="box-controller" >
      <div className={"controller " + (this.state.isLoginOpen ? "selected-controller" : "")}
        onClick={this.showLoginBox}>
        Login
      </div>

      <div
        className={"controller " + (this.state.isRegisterOpen ? "selected-controller" : "")}
        onClick={this  .showRegisterBox}>
        Register
      </div>
    </div>
      <div className="box-container">
        <h1>Toggle Form</h1>
         {this.state.isLoginOpen && <Login/>}
         {this.state.isRegisterOpen && <Register/>}
      </div>
      </>
    )
  }
  showLoginBox = () => {
    this.setState({isLoginOpen: true, isRegisterOpen: false});
  }

  showRegisterBox = () => {
    this.setState({isRegisterOpen: true, isLoginOpen: false});
  }
}

export default ToggleForm
