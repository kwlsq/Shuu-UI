import React from 'react';
// import { Link } from 'react-router-dom'

class RegisterPage extends React.Component {
    state = {  }
    render() { 
        return (  
            <div className="loginpage-wrapper">
                <div className="login-form-wrapper">
                    <input type="text" placeholder="Username"></input>
                    <input type="email" placeholder="Email"></input>
                    <input type="password" placeholder="Password"></input>
                    <input type="password" placeholder="Confirm Password"></input>
                    <input type="button" value="Sign Up"></input>
                </div>
            </div>
        );
    }
}
 
export default RegisterPage;