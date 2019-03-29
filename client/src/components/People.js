import React from 'react';
import { Segment, Header, Card, Button, } from 'semantic-ui-react'
import { AuthConsumer, } from '../providers/AuthProvider'
import axios from 'axios'


class Home extends React.Component {
  state = { friends: [] }

  componentDidMount() {
    axios.get('/api/friendships')
    .then(res => {
      this.setState({ friends: res.data, })
    })
  }
  
  

  render () {
  const { auth: { user, }, } = this.props;

  return(

  <Segment style={{margin: '10px'}}>
    <Card.Group>
      { this.state.friends.map( friend => {
        if (friend.id !== user.id)
          return (
          <Card key={friend.id}>
            <Card.Content>
              <Card.Header>
                {friend.first_name} {friend.last_name} 
              </Card.Header>
            </Card.Content>
            <Card.Content extra>
              {friend.email}
            </Card.Content>
          </Card>)
      })
        }
        </Card.Group>
        
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