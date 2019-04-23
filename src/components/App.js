import React from 'react';
import logo from '../images/logo.svg';
import Navbar from './Navbar'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Info from './Info'
import Credits from './Credits'
import Footer from './Footer'

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <Navbar />
            <Route path="/" exact render={() => <h2>Welcome Stanger</h2>} />
            <Route path="/home" component={Home} exact />
            <Route path="/about" component={About} />
            <Route path="/info" component={Info} />
            <Route path="/credits" component={Credits} />
          </header>
        </div>
      </BrowserRouter>
      <Footer />
    </React.Fragment>
  );
}
export default App;
