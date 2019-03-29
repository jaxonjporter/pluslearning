import React from 'react';
import { Segment, Header, } from 'semantic-ui-react'
import { AuthConsumer, } from '../providers/AuthProvider'
import axios from 'axios';


class Home extends React.Component {
  state = { friendships: [] }
  
  render () {
  const { auth: { user, }, } = this.props;

  return(

  <Segment style={{margin: '10px'}}>
    <Header as="h1">{user.first_name} {user.last_name}</Header>
    <Header as="h3">{user.email}</Header>
    <Header as='h1'>{}</Header>
  
  </Segment>
  )
  }
}

export class ConnectHome extends React.Component {
  render() {
    return (
      <AuthConsumer> 
        { auth => 
          <Home { ...this.props } auth={auth} />
        }
      </AuthConsumer>
    )
  }
}


export default ConnectHome