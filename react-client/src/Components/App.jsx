import React, { Component } from 'react';
import { Router, Route, Switch} from 'react-router-dom';
import { browserHistory } from 'react-router';
import HomePage from './HomePage';
import NavBar from './HeaderComponent/NavBar';
import history from './history';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />      
        <Router history={history}>
          <div>
            <Route name="home" exact path="/" component={HomePage} />
            <Route name="test" exact path="/login" component={HomePage} />
          </div>
        </Router>
      </div>
    )
  }
}
export default App;