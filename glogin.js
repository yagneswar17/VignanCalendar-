import React, { Component } from "react";
import firebase from "../firebase";

class GoogleLogin extends Component {

    onSubmit = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
    }
    render() {
        return ( < div className = "login-area card mx-auto mt-5" >
            <
            div className = "card-body p-5" >
            <
            h5 className = "text-center mb-4" > login succesful < /h5>  <
            button type = "button"
            className "btn btn-primary text-white w-100" >
            Login with Google <
            /button>   <
            /div > < /
            div >
        );
    }
}