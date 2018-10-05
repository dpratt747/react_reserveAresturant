import React, { Component } from 'react';
import NavBar from './HeaderComponent/NavBar';
import { Redirect, withRouter } from 'react-router-dom';

class HomePage extends Component {
  render() {
    return (
      <html>
        <div>
          Home pagesdddddddddddddddddddddddddddddddddd
        </div>
      </html>
    )
  }
}
export default withRouter(HomePage);