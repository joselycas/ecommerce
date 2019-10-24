import React, { Component } from 'react'
import {Route, Switch} from 'react-router-dom'
import {connect} from 'react-redux'
import Home from './Home'
import Login from './containers/Login'
import ProductPage from './components/ProductPage'
import Cart from './containers/Cart'
import Register from './containers/Register'
import ToggleForm from './containers/ToggleForm'
import User from './containers/User'



class Main extends Component {


    render(){
      return(
          <Switch>
            <Route path='/home' component={Home} />
            <Route path='/register' component={Register}/>
            <Route path='/login' component={Login}/>
            <Route path='/logout'/>
            <Route path='/producrs' component={ProductPage}/>
            <Route path='/cart' component={Cart}/>
            <Route path='/toggleForm' component={ToggleForm}/>
            <Route path='/users/:id' component={User}/>
          </Switch>

      )
  }

}

export default Main;
