import React, { Component } from 'react'
import { Route, Switch, } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import NoMatch from './components/NoMatch'
import Login from './components/Login'
import Register from './components/Register'
import FetchUser from './components/FetchUser'
import './App.css';

class App extends Component {
  render() {
    return (
      <>
      <Navbar />
      <FetchUser>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
        <Route component={NoMatch} />
      </Switch>
      </FetchUser>
      </>
      
    )
  }
}

export default App;
