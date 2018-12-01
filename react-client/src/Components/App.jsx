import React, {Component} from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import {browserHistory} from 'react-router';
import Main from './Main';
import NavBar from './HeaderComponent/NavBar';
import history from './history';

class App extends Component {
    render() {
        return (
            <div>
                <NavBar/>
                <Router history={history}>
                    <div>
                        <Route exact path="/" component={Main}/>
                    </div>
                </Router>
            </div>
        )
    }
}

export default App;