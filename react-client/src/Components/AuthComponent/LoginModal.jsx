import React, {Component} from 'react';
import axios from 'axios';
import history from '../history';
import ApiCalls from '../Requests/ApiCalls'
import RegisterModal from './RegisterModal'

class LoginModal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: ''
        };

        this.updateUsernameState = this.updateUsernameState.bind(this);
        this.updatePasswordState = this.updatePasswordState.bind(this);
    }

    updateUsernameState(event) {
        this.setState({username: event.target.value});
    }

    updatePasswordState(event) {
        this.setState({password: event.target.value});
    }

    handleSubmit() {
        const username = this.state.username;
        const password = this.state.password;
        ApiCalls.userLogin(username, password);
        alert("login");
    }

    render() {
        const {username, password} = this.state;
        return (
            <div className="modal fade" id="loginModal" tabIndex="-1" role="dialog"
                 aria-labelledby="loginModalLabel" aria-hidden="true">
                <div className="modal-dialog-centered modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="loginModalLabel">Login</h5>
                            <button type="button" className="close" data-dismiss="modal" id="closeLogin"
                                    aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form className="needs-validation" noValidate onSubmit={() => {this.handleSubmit()}}>
                                <div className="form-group">
                                    <label htmlFor="inputUsernameOrEmail">Username</label>
                                    <input type="text" className="form-control" id="inputUsernameOrEmail"
                                           value={username} onChange={this.updateUsernameState}
                                           aria-describedby="usernameInfo" placeholder="Enter Username" required/>
                                    <div className="invalid-feedback">
                                        Please sign in using
                                        either the username or email you registered with.
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="inputPassword">Password</label>
                                    <input type="password" className="form-control" id="inputPassword" value={password}
                                           onChange={this.updatePasswordState}
                                           aria-describedby="passwordInfo" placeholder="Enter Password" required/>
                                    <div className="invalid-feedback">
                                        Please enter your password in this field.
                                    </div>
                                </div>
                                <div className="form-group font-italic">
                                    <p style={{fontSize: "14px"}}>
                                        Don't have an account? <code style={{cursor: "pointer"}} data-dismiss="modal"
                                                                     id="closeLogin" data-toggle="modal"
                                                                     data-target="#registerModal" >Click here to
                                        register</code>
                                    </p>
                                </div>
                                <button type="submit" className="btn btn-dark btn-block">Log in
                                </button>
                            </form>
                            <script>
                                {/*Disables form submissions if there are invalid fields*/}
                                (function() {
                                window.addEventListener('load', function () {
                                    // Fetch all the forms we want to apply custom Bootstrap validation styles to
                                    const forms = document.getElementsByClassName('needs-validation');
                                    // Loop over them and prevent submission
                                    Array.prototype.filter.call(forms, function (form) {
                                        form.addEventListener('submit', function (event) {
                                            if (form.checkValidity() === false) {
                                                event.preventDefault();
                                                event.stopPropagation();
                                            }
                                            form.classList.add('was-validated');
                                        }, false);
                                    });
                                }, false)
                            })();
                            </script>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

// export component
export default LoginModal