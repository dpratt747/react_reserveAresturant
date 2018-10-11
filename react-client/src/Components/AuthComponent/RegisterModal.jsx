import React, {Component} from 'react';

class RegisterModal extends Component {

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            passwordDuplicate: '',
            email: '',
            emailDuplicate: ''
        };

        this.updateUsernameState = this.updateUsernameState.bind(this);
        this.updatePasswordState = this.updatePasswordState.bind(this);
        this.updatePasswordDuplicateState = this.updatePasswordDuplicateState.bind(this);
        this.updateEmailState = this.updateEmailState.bind(this);
        this.updateEmailDuplicateState = this.updateEmailDuplicateState.bind(this);
    }

    updateUsernameState(event) {
        this.setState({username: event.target.value});
    }

    updatePasswordState(event) {
        this.setState({password: event.target.value});
    }

    updatePasswordDuplicateState(event) {
        this.setState({passwordDuplicate: event.target.value});
    }

    updateEmailState(event) {
        this.setState({email: event.target.value});
    }

    updateEmailDuplicateState(event) {
        this.setState({emailDuplicate: event.target.value});
    }

    render() {
        const {username, password} = this.state;
        return (
            <div className="modal fade" id="registerModal" tabIndex="-1" role="dialog"
                 aria-labelledby="registerModalLabel" aria-hidden="true">
                <div className="modal-dialog-centered modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="registerModalLabel">Register</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="form-group">
                                    <label htmlFor="inputUsername">Username</label>
                                    <input type="text" className="form-control" id="inputUsername"
                                           value={username} onChange={this.updateUsernameState}
                                           aria-describedby="registrationUsernameInfo" placeholder="Enter Username" required/>
                                    <small id="registrationUsernameInfo" className="form-text text-muted">You can sign in using
                                        either the username or email you registered with.
                                    </small>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="registrationPassword">Password</label>
                                    <input type="password" className="form-control" id="registrationPassword" value={password}
                                           onChange={this.updatePasswordState}
                                           aria-describedby="passwordInfo" placeholder="Enter Password" required/>
                                    <small id="passwordInfo" className="form-text text-muted">Please enter your password
                                        in this field.
                                    </small>
                                </div>
                                <div className="form-group font-italic">
                                    <p style={{fontSize: "14px"}}>
                                        Don't have an account? <code style={{cursor: "pointer"}} data-dismiss="modal"
                                        id="closeLogin" data-toggle="modal" data-target="#registerModal">Click here to
                                        register</code>
                                    </p>
                                </div>
                                <button type="button" onClick={() => {
                                    this.handleSubmit()
                                }} className="btn btn-dark btn-block">Log in
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default RegisterModal