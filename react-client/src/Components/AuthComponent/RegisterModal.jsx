import React, {Component} from 'react';
import ApiCalls from "../Requests/ApiCalls";

class RegisterModal extends Component {

    constructor(props) {
        super(props);

        this.state = {
            username: undefined,
            password: undefined,
            passwordDuplicate: undefined,
            email: undefined,
            emailDuplicate: undefined
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

    async handleSubmit() {
        const {username, password, passwordDuplicate, email, emailDuplicate} = this.state;
        let allowSubmit = (!(password !== passwordDuplicate || email !== emailDuplicate));
        if(allowSubmit) {
            ApiCalls.userRegister(username, password, email);
        }
    }

    render() {
        const {username, password, passwordDuplicate, email, emailDuplicate} = this.state;
        return (
            <div className="modal fade" id="registerModal" tabIndex="-1" role="dialog"
                 aria-labelledby="registerModalLabel" aria-hidden="true" style={{overflow: "hidden"}}>
                <div className="modal-dialog-centered modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="registerModalLabel">Register</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>

                        <div className="modal-body">
                            <form className="needs-validation" onSubmit={() => {
                                this.handleSubmit()
                            }} noValidate>

                                <div className="form-group">
                                    <label htmlFor="inputUsername">Username</label>
                                    <input type="text" className="form-control" id="inputUsername"
                                           value={username} onChange={this.updateUsernameState}
                                           aria-describedby="registrationUsernameInfo" placeholder="Enter Username"
                                           required/>
                                    <div className="invalid-feedback col-sm-12 container-fluid">
                                        Please register using a valid username.
                                    </div>
                                </div>

                                {/*emails*/}
                                <div className="container-fluid row">
                                    <div className="form-group col-sm-6">
                                        <label htmlFor="registrationEmail">Email</label>
                                        <input type="email" className="form-control" id="registrationEmail"
                                               value={email}
                                               onChange={this.updateEmailState}
                                               aria-describedby="emailInfo" placeholder="Enter Email" required/>
                                        <div className="invalid-feedback">
                                            Please register using a valid email.
                                        </div>
                                    </div>
                                    <div className="form-group col-sm-6">
                                        <label htmlFor="registrationEmailDuplicate">Repeat Email</label>
                                        <input type="email" className="form-control"
                                               id="registrationEmailDuplicate"
                                               value={emailDuplicate}
                                               onChange={this.updateEmailDuplicateState}
                                               aria-describedby="emailDuplicateInfo" placeholder="Enter Email"
                                               required/>
                                        <div className="invalid-feedback">
                                            Please ensure both fields match.
                                        </div>
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
                                        <div className="invalid-feedback">
                                            Please register using a valid password.
                                        </div>
                                    </div>
                                    <div className="form-group col-sm-6">
                                        <label htmlFor="registrationPasswordDuplicate">Repeat Password</label>
                                        <input type="password" className="form-control"
                                               id="registrationPasswordDuplicate"
                                               value={passwordDuplicate}
                                               onChange={this.updatePasswordDuplicateState}
                                               aria-describedby="passwordDuplicateInfo" placeholder="Enter Password"
                                               required/>
                                        <div className="invalid-feedback">
                                            Please ensure both fields match.
                                        </div>
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
                                            const compareEmail = document.getElementById('registrationEmail').value ===
                                                document.getElementById('registrationEmailDuplicate').value;
                                            const comparePassword = document.getElementById('registrationPassword').value ===
                                                document.getElementById('registrationPasswordDuplicate').value;

                                            if (compareEmail === false || comparePassword === false) { 
                                                if (compareEmail === false){
                                                    document.getElementById('registrationEmailDuplicate').classList.add("is-invalid");
                                                } else {
                                                    document.getElementById('registrationEmailDuplicate').classList.add("is-valid");
                                                    document.getElementById('registrationEmailDuplicate').classList.remove("is-invalid");
                                                }
                                                if (comparePassword === false){
                                                    document.getElementById('registrationPasswordDuplicate').classList.add("is-invalid");
                                                } else {
                                                    document.getElementById('registrationPasswordDuplicate').classList.add("is-valid");
                                                    document.getElementById('registrationPasswordDuplicate').classList.remove("is-invalid");
                                                }
                                                event.preventDefault();
                                                event.stopPropagation();
                                            }
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