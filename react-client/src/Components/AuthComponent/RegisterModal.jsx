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

    handleSubmit() {
        const username = this.state.username;
        const password = this.state.password;
        // ApiCalls.userLogin(username, password).then()
        console.info(`state: ${password}`);
    }

    render() {
        const {username, password, passwordDuplicate, email, emailDuplicate} = this.state;
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
                            <form className="needs-validation" onSubmit={() => {this.handleSubmit()}} noValidate>

                                <div className="form-group">
                                    <label htmlFor="inputUsername">Username</label>
                                    <input type="text" className="form-control" id="inputUsername"
                                           value={username} onChange={this.updateUsernameState}
                                           aria-describedby="registrationUsernameInfo" placeholder="Enter Username"
                                           required/>
                                    <small id="registrationUsernameInfo" className="form-text text-muted">Please fill
                                        this field in with your email.
                                    </small>
                                </div>

                                {/*emails*/}
                                <div className="container-fluid row">
                                    <div className="form-group col-sm-6">
                                        <label htmlFor="registrationEmail">Email</label>
                                        <input type="email" className="form-control" id="registrationEmail"
                                               value={email}
                                               onChange={this.updateEmailState}
                                               aria-describedby="emailInfo" placeholder="Enter Email" required/>
                                        <small id="emailInfo" className="form-text text-muted">Please fill this field
                                            in with your password.
                                        </small>
                                    </div>
                                    <div className="form-group col-sm-6">
                                        <label htmlFor="registrationEmailDuplicate">Repeat Email</label>
                                        <input type="email" className="form-control"
                                               id="registrationEmailDuplicate"
                                               value={emailDuplicate}
                                               onChange={this.updateEmailDuplicateState}
                                               aria-describedby="emailDuplicateInfo" placeholder="Enter Email"
                                               required/>
                                        <small id="emailDuplicateInfo" className="form-text text-muted">Please repeat
                                            your email in this field.
                                        </small>
                                    </div>
                                </div>

                                {/*password*/}
                                <div className="container-fluid row">
                                    <div className="form-group col-sm-6">
                                        <label htmlFor="registrationPassword">Password</label>
                                        <input type="password" className="form-control" id="registrationPassword"
                                               value={password}
                                               onChange={this.updatePasswordState}
                                               aria-describedby="passwordInfo" placeholder="Enter Password" required/>
                                        <small id="passwordInfo" className="form-text text-muted">Please fill this field
                                            in with your password.
                                        </small>
                                    </div>
                                    <div className="form-group col-sm-6">
                                        <label htmlFor="registrationPasswordDuplicate">Repeat Password</label>
                                        <input type="password" className="form-control"
                                               id="registrationPasswordDuplicate"
                                               value={passwordDuplicate}
                                               onChange={this.updatePasswordDuplicateState}
                                               aria-describedby="passwordDuplicateInfo" placeholder="Enter Password"
                                               required/>
                                        <small id="passwordDuplicateInfo" className="form-text text-muted">Please repeat
                                            your password in this field.
                                        </small>
                                    </div>
                                </div>

                                {/*register button*/}
                                <div className="form-group font-italic">
                                </div>
                                <button type="submit" className="btn btn-dark btn-block">Register
                                </button>
                            </form>

                            <script>
                                // Example starter JavaScript for disabling form submissions if there are invalid fields
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

export default RegisterModal