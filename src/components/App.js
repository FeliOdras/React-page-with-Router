import React from 'react';
import logo from '../images/logo.svg';
import Navbar from './Navbar'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Info from './Info'
import Credits from './Credits'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Navbar />
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} />
          <Route path="/info" component={Info} />
          <Route path="/credits" component={Credits} />
        </header>
      </div>
    </BrowserRouter>
  );
}
export default App;
