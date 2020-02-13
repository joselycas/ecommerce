import React from 'react';
import './App.css';
import NavBar from './NavBar'
import Main from './Main'
// import { Router, Route, IndexRoute, useRouterHistory } from 'react-router';



class App extends React.Component {


   render() {
    return (

      <div className="App">
        <header className="App-header">
          Jos Castro's Portfolio
        </header>
          <NavBar/>
          <Main/>
          </div>
    );
  }

}
export default App;
