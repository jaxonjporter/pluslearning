import React, { Component } from 'react'
import { Route, Switch, } from 'react-router-dom'
import Navbar from './components/Navbar'
import Profile from './components/Home'
import NoMatch from './components/NoMatch'
import Login from './components/Login'
import Register from './components/Register'
import FetchUser from './components/FetchUser'
import ProtectedRoute from './components/ProtectedRoute'
import People from './components/People'
import './App.css';

class App extends Component {
  render() {
    return (
      <>
      <Navbar />
      <FetchUser>
      <Switch>
        <ProtectedRoute exact path='/' component={Profile} />
        <ProtectedRoute exact path='/people' component={People} />
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
