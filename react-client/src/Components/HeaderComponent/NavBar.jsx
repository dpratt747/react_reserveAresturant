import React, {Component} from 'react';
import history from '../history';
import Logo from '../../Resources/logo.png'
import LoginModal from '../AuthComponent/LoginModal'
import RegisterModal from '../AuthComponent/RegisterModal'

class NavBar extends Component {

    static isLoggedIn(value = false) {
        return value
    }

    static returnHome() {
        history.push('/');
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
                    <a className="navbar-brand" onClick={NavBar.returnHome} style={{cursor: "pointer"}}>
                        <img src={Logo} width="140" height="44"></img>
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse collapsibleNavbar justify-content-end" id="navbarCollapse">
                        <ul className="navbar-nav">
                            {!NavBar.isLoggedIn() && (
                                <li className="nav-item" data-toggle="modal" data-target="#registerModal"
                                    style={{cursor: "pointer"}}>
                                    <a className="nav-link">Register</a>
                                </li>
                            )}
                            {!NavBar.isLoggedIn() && (
                                <li className="nav-item" data-toggle="modal" data-target="#loginModal"
                                    style={{cursor: "pointer"}}>
                                    <a className="nav-link">Login</a>
                                </li>
                            )}
                            {NavBar.isLoggedIn() && (
                                <li className="nav-item" style={{cursor: "pointer"}}>
                                    <a className="nav-link">Logout</a>
                                </li>
                            )}
                        </ul>
                    </div>
                </nav>
                <div>
                    <RegisterModal/>
                </div>
                <div>
                    <LoginModal/>
                </div>
            </div>
        )
    }
}

// export default withRouter(NavBar);
export default NavBar;