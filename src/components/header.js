import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import * as actions from '../actions';
import authenticate from '../actions/index';

class HeaderComponent extends Component {
  constructor(props){
    super(props);
    this.authButton = this.authButton.bind(this);
  }
  authButton(){
    const { authenticated } = this.props;
    if(authenticated){
      return (<button onClick={()=>{this.props.authenticate(false)}}>Sign Out</button>)
    }
    else {
      return (<button onClick={()=>{this.props.authenticate(true)}}>Sign In</button>)
    }

  }
  render(){
    return (
      <nav className='navbar navbar-light'>
        <ul className='nav navbar-nav'>
          <li className='nav-items'>
            <Link to='/'>Home</Link>
          </li>
          <li className='nav-items'>
            <Link to='/resources'>Resources</Link>
          </li>
          <li className='nav-items'>
            {this.authButton()}
          </li>
        </ul>
      </nav>
    )
  }
}

const mapStateToProps = state => {
  return {
    authenticated: state.authenticated
  }
}

const mapDispatchToProps = dispatch => {
  return {
    authenticate:(isLoggedIn) => {
      dispatch(authenticate(isLoggedIn));
    }
  }
}

const Header = connect(mapStateToProps, mapDispatchToProps)(HeaderComponent);

export default Header;
