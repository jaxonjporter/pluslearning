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

  addFriend = (id) => {
    const friend = { user_id:this.props.auth.user.id, friend_id: id}
    debugger
    axios.post(`/api/friendships/`, friend)
      .then( res => {
        debugger
        
      }).catch( res => {debugger})
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
            <Card.Content>
              {friend.email}
            </Card.Content>
            <Card.Content extra>
              <Button color='blue' onClick={ () => this.addFriend(friend.id)}>
                Add Friend
              </Button>
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