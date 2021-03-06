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
  const pastActs = useSelector(state => state.pastActivities);
  

useEffect(() => {
  async function setNewList() {
    dispatch({
        type: 'GET_ACTIVITY'
    });

    dispatch({
      type: 'GET_USERS'
    });
}
    setNewList()  
}, []);

useEffect(() => {
  async function setOldList() {
    dispatch({
        type: 'GET_PAST_ACTIVITY'
    });
}
    setOldList()  
}, []);


  return (
    <Router>
      <div>

        <Nav />

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
