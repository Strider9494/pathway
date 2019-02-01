import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Login from './Components/Login';
import Registration from './Components/Registration';
import Profile from './Components/Profile';

function App() {
  return (
    <React.Fragment>
      <Route path="/" component={Header} />
      <Route exact path="/" component={Login} />
      <Route path="/registration" component={Registration} />
      <Route path="/profile" component={Profile} />
    </React.Fragment>
  );
}

export default App;
