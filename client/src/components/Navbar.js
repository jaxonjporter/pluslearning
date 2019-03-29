import React from 'react'
import { AuthConsumer, } from "../providers/AuthProvider";
import { Menu, } from 'semantic-ui-react'
import { Icon, } from 'semantic-ui-react'
import { Link, withRouter, } from 'react-router-dom'

class Navbar extends React.Component {
  
  rightNavItems = () => {
    const { auth: { user, handleLogout, }, location, } = this.props;
    
    if (user) {
      return (
        <Menu.Menu position='right'>
          <Menu.Item>
            Welcome { user.first_name }
          </Menu.Item>
          <Menu.Item
            onClick={ () => handleLogout(this.props.history) }
          >
            <Icon name='user outline' />
          </Menu.Item>
        </Menu.Menu>
      )
    } else {
      return (
        <Menu.Menu position='right'>
          <Link to='/login'>
            <Menu.Item
              id='login'
              name='login'
              active={location.pathname === '/login'}
            />
          </Link>
          <Link to='/register'>
            <Menu.Item
              id='register'
              name='register'
              active={location.pathname === '/register'}
            />
          </Link>
        </Menu.Menu>
      )
      
    }
  }

  leftNavItems = () => {
    const { auth: { user, handleLogout, }, location, } = this.props;
    if (user)
      return (
      <>
        <Link to='/'>
          <Menu.Item
            name='profile'
            id='profile'
            active={this.props.location.pathname === '/'}
          />
        </Link>
        <Link to='/people'>
          <Menu.Item
            name='people'
            id='people'
            active={this.props.location.pathname === '/people'}
          />
        </Link>
      </>
      )
    else 
      return (
        <Menu.Item>Welcome to Ghetto Space</Menu.Item>
      )
  }
  
  render() {
    return (
      <div>
        <Menu pointing>
            {this.leftNavItems() }
            { this.rightNavItems() }
        </Menu>
      </div>
    )
  }
}

export class ConnectedNavbar extends React.Component {
  render() {
    return (
      <AuthConsumer> 
        { auth => 
          <Navbar { ...this.props } auth={auth} />
        }
      </AuthConsumer>
    )
  }
}

export default withRouter(ConnectedNavbar);
