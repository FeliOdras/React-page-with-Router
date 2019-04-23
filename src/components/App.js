import React from 'react';
import Logo from './Logo';
import Navbar from './Navbar';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Info from './Info';
import Credits from './Credits';
import Topics from './Topics';
import Footer from './Footer';

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <Logo />
          </header>
          <Navbar />
          <Route path="/home" component={Home} exact />
          <Route path="/about" component={About} />
          <Route path="/info" component={Info} />
          <Route path="/credits" component={Credits} />
          <Route path="/topics" component={Topics} />
          <Route path="/" exact render={() => <h2>Welcome Stanger</h2>} />
        </div>
      </BrowserRouter>
      <Footer />
    </React.Fragment>
  );
}
export default App;
