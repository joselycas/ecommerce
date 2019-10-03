import React from 'react';
import './App.css';
import NavBar from './NavBar'
import Main from './Main'

function App() {
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

export default App;
