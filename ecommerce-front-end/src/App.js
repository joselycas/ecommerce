import React from 'react';
import './App.css';
import NavBar from './NavBar'
import Main from './Main'


class App extends React.Component {


   render() {
    return (
      <div className="App">
        <header className="App-header">
          Welcome to KBH discounted Kitchen and Bath Products
        </header>
          <NavBar/>
          <Main/>

          </div>
    );
  }

}
export default App;
