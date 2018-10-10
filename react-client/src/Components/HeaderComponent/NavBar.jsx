import React, {Component} from 'react';
import history from '../history';
import Logo from '../../Resources/logo.png'

class NavBar extends Component {

    static isLoggedIn() {
        return false
    }

    loggedIn(){
        return <li className="nav-item">
                            <a className="nav-link">Signup</a>
                        </li>;
    }

    static returnHome() {
        console.info(NavBar.isLoggedIn());
        history.push('/');
    }

    render() {
        return (
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
                <a className="navbar-brand" onClick={NavBar.returnHome}>
                    <img src={Logo} width="140" height="44"></img>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse collapsibleNavbar justify-content-end" id="navbarCollapse">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link">Signup</a>
                        </li>

                    </ul>
                </div>
            </nav>
        )
    }
}

// export default withRouter(NavBar);
export default NavBar;