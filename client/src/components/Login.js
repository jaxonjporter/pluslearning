import React from 'react'
import { AuthConsumer, } from '../providers/AuthProvider'
import { Button, Form, Segment, Header, } from 'semantic-ui-react'

class Login extends React.Component {
  state = {email: '', password: '', }

  handleSubmit = (e) => { 
    e.preventDefault() 
    const { email , password, } = this.state
    this.props.auth.handleLogin({ email, password, }, this.props.history )
  }

  handleChange = (e) => {
    const { name, value, } = e.target
    this.setState({ [name]: value, })
  }

  render(){
    const { email, password, } = this.state
    return(
      <Segment basic>
        <Header>Login</Header>
        <Form onSubmit={this.handleSubmit}>
          <Form.Input
            label="Email"
            autoFocus
            required
            name='email'
            value={email}
            placeholder='email'
            type='email'
            onChange={this.handleChange}
          />
          <Form.Input
            label="Password"
            required
            name='password'
            value={password}
            placeholder='password'
            type='password'
            onChange={this.handleChange}
          />
          <Segment textAlign="center" basic>
            <Button primary type='submit'>Enter</Button>
          </Segment>
        </Form>
      </Segment>
    )
  }
}

const ConnectedLogin = (props) => (
  <AuthConsumer>
    { auth => <Login {...props} auth={auth} />}
  </AuthConsumer>
)

export default ConnectedLogin