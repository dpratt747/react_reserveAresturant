import React, {Component} from 'react';
import axios from 'axios';

class ApiCalls extends Component {

    constructor(props) {
        super(props);
        this.state.api = "https://localhost:5000";
        axios.defaults.headers.common['Content-Type'] = 'application/json'
        axios.defaults.headers.common['Accept'] = 'application/json'
    }

    //{"userID": null, "userName": "david_username", email="", password": "password" }
    // {"userID": null, "userName": "david_aaaausername", "email":"aaaa", "password": "password" }
    static userRegister(username, email, password) {
        const user = {
            userId: null,
            userName: username,
            email: email,
            password: password
        };

        axios.post(this.api + "/signup", user)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (exception) 
            {
                console.error(exception);
            });
    }

    static userLogin(usernameOrEmail, password) {
        const user = {
            userId: null,
            userName: username,
            email: email,
            password: password
        };
        axios.put(this.api + "/login", {username: username, email: '', password: password})
            .then(function (response) {
                console.log(response);
            })
            .catch(function (exception) {
                console.error(exception);
            });
    }


}

export default ApiCalls