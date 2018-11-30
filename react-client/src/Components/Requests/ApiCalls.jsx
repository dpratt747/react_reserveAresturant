import React, {Component} from 'react';
import axios from 'axios';

class ApiCalls extends Component {

    constructor(props) {
        super(props);
        this.state.api = "https://localhost:5000";
    }


    //{"userID": null, "userName": "david_username", email="", password": "password" }
    // {"userID": null, "userName": "david_aaaausername", "email":"aaaa", "password": "password" }
    static userRegister(username, email, password) {
        alert("reached api call");
        const user = {
            userId: null,
            userName: username,
            email: email,
            password: password
        };


        axios.post("localhost:5000/signup", user).then((res)=> alert(res))
    }

    static userLogin(username, password) {
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