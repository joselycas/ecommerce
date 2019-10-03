import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from './Home'
import Login from './containers/Login'
import Logout from './containers/Logout'
import Kitchen from './components/Kitchen'
import Bathroom from './components/Bathroom'
import Inspiration from './components/Inspiration'
import Cart from './containers/Cart'


const Main = () => {

    return(
      <Switch>
        <Route path='/home' component={Home} />
        <Route path='/login' component={Login}/>
        <Route path='/logout' component={Logout}/>
        <Route path='/kitchen' component={Kitchen}/>
        <Route path='/bathroom' component={Bathroom}/>
        <Route path='/inspiration' component={Inspiration}/>
        <Route path='/cart' component={Cart}/>
      </Switch>

    )
}

export default Main;
