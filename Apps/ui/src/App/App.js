import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import SignUp from '../UserInput/signup';
import SignIn from '../UserInput/signin';
import Home from '../Home/home';
import Nav from './components/Nav';
import Group from '../Groups/group';
import GroupView from '../Groups/groupView';
import Footer from './components/Footer';
import UserDashboard from '../Dashboards/UserDashboard';
import OrganizationDashboard from '../Dashboards/OrganizationDashboard';


function App() {

  const dispatch = useDispatch();
  const user = useSelector(state => state.userInfo);
  const acts = useSelector(state => state.activities);
  

useEffect(() => {
  async function setNewList() {
    dispatch({
        type: 'GET_ACTIVITY'
    });
}
    setNewList()  
}, []);


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

        <Nav />

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/SignIn">
            <SignIn />
          </Route>
          <Route path="/SignUp">
            <SignUp />
          </Route>
          <Route path="/UserDashboard">
            <UserDashboard />
          </Route>
          <Route path="/OrganizationDashboard">
            <OrganizationDashboard />
          </Route>
          <Route path="/Groups/:name">
            <GroupView />
          </Route>
          <Route path="/Groups">
            <Group />
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
