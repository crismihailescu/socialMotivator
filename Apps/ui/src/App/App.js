import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SignUp from '../SignUp/signup';
import Home from '../Home/home';
import Nav from './components/Nav';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div>
      {/* <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/SignUp">About</Link>
            </li>
          </ul>
        </nav> */}

        <Nav/>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/SignUp">
            <SignUp />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
