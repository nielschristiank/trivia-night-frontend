import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import './App.css';
import AuthService from './services'
import Register from './pages/Register.js';
import Home from './pages/Home.js';
import Game from './pages/Game.js';
import Login from './pages/Login.js';
import LoginButton from './components/LoginButton';

class App extends Component {
  render() {
  //new instance of AuthService
  let auth = new AuthService()

    return (
      <div className="App">
      </div>
    );
  }
}

export default App;
