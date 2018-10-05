import React, { Component } from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import App from '../HomePage';
import history from '../history';
import LoginModal from './LoginModal';

class NavBar extends Component {
  constructor() {
    super();
    this.state = {
      toHome: false,
      showModal: false
    };
    this.returnHome = this.returnHome.bind(this);
    this.loginModal = this.loginModal.bind(this);
  }



  loginModal(){
    console.info('loginModal function called');
    this.setState({
      showModal: true      
    });
  } 
  returnHome() {
    console.info('returnHome function called');
    // this.setState({
    //   showModal: true      
    // });
    history.push('/');
  }
  render() {
    if (this.state.toHome === true) {
      history.push('/');
    }
    if (this.state.toLogin === true) {
      history.push('/login');
    }

    return (
      <main>
        <header>
          <ul id="headerButtons">
            <li className="navLogo" onClick={this.returnHome}>ReserveAResturant</li>
            <li className="navButton" id="auth" onClick={this.loginModal}>Login | SignOut</li>
          </ul>
        </header>
        <LoginModal show={this.state.showModal} handleClose={this.hideModal}>
          <p>Modal</p>
          <p>Data</p>
        </LoginModal>
      </main>
    )
  }
}
// export default withRouter(NavBar);
export default NavBar;