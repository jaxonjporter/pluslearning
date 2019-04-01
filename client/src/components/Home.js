import React from 'react';
import { Segment, Header, Card, } from 'semantic-ui-react'
import { AuthConsumer, } from '../providers/AuthProvider'
import axios from 'axios'; 


class Home extends React.Component {
  state = { friendships: [] }


  componentDidMount(){
    axios.get('/api/all_friendships')
      .then(res => {
        this.setState({ friendships: res.data, })
      })
      .catch( res => {
        debugger
      })
  }
  
  getFriends = () => {
        this.state.friendships.map(match => {
            debugger
            return (
            <Header>{match.first_name}</Header>
              )
        }
        )}

  
  render () {
  const { auth: { user, }, } = this.props;

  return(
<>
  <Segment style={{margin: '10px'}}>
    <Header as="h1">{user.first_name} {user.last_name}</Header>
    <Header as="h3">{user.email}</Header>
    <Header as='h1'>{}</Header>
  </Segment>
  <Segment style={{margin: '10px'}}>
  <Card.Group>

  {this.state.friendships.map(match => {
    return (
      <Card>

        <Card.Header textAlign='center' as='h2' key={match.id}>{match.first_name}</Card.Header>
      </Card>
      )
    })
  }
  </Card.Group>
  </Segment>
  

</>
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

// class Friends extends React.Component {
//   render () {
//     debugger
//     return (
//       <FriendConsumer>
//         { friends => 
//           <Home {...this.props.props} friends={friends} auth={this.props.auth} />
//         }
//       </FriendConsumer>
//     )
//   }
// }


export default ConnectHome