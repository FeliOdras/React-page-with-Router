import React from 'react';
import logo from '../images/logo.svg';
import Navbar from './Navbar'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Navbar />
      </header>
    </div>
  );
}
export default App;
