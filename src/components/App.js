import React from 'react';
import Logo from './Logo';
import Navbar from './Navbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Info from './Info';
import Credits from './Credits';
import Topics from './Topics';
import NotFound from './NotFound';
import Footer from './Footer';

const routes = [
  {
    path: "/",
    excat: true,
    component: () => <h2>Welcome Stanger</h2>
  },
  {
    path: "/home",
    component: Home
  },
  {
    path: "/about",
    component: About
  },
  {
    path: "/info",
    component: Info
  },
  {
    path: "/credits",
    component: Credits
  },
  {
    path: "/topics",
    component: Topics
  },
  {
    component: NotFound
  }
]

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <Logo />
          </header>
          <Navbar />
          <Switch>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.excat}
                component={route.component}
              />
            )
            )}
          </Switch>
        </div>
      </BrowserRouter>
      <Footer />
    </React.Fragment>
  );
}
export default App;
