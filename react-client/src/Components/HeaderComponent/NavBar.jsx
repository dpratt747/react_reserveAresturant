import React, { Component } from 'react';
import history from '../history';
import '../../Styling/Header/navbar.css';


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
          <ul id="navbar-nav">
            <li className="nav-item" onClick={this.returnHome}>ReserveASpot</li>
            <li className="navbar-brand" id="auth">Login | SignOut</li>
          </ul>
    )
  }
}
// export default withRouter(NavBar);
export default NavBar;