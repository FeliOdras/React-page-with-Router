import React from 'react';
import logo from '../images/logo.svg';
import Navbar from './Navbar'
import { BrowserRouter, Route } from 'react-router-dom'
import About from './About'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Navbar />
          <Route path="/about" component={About} />
        </header>
      </div>
    </BrowserRouter>
  );
}
export default App;
