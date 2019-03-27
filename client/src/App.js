import React, { Component } from 'react'
import { Route, Switch, } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import NoMatch from './components/NoMatch'
import Login from './components/Login'
import Register from './components/Register'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
        <Route component={NoMatch} />
      </Switch>
      </>
      
    )
  }
}

export default App;
