import React from 'react';
import { Link } from 'react-router-dom'

class LoginPage extends React.Component {
    state = {  }
    render() { 
        return (  
            <div className="loginpage-wrapper">
                <div className="login-form-wrapper">
                    <input type="text" placeholder="Username"></input>
                    <input type="password" placeholder="Password"></input>
                    <input type="button" value="Sign in"></input>
                    <Link to="/register">Sign Up</Link>
                </div>
            </div>
        );
    }
}
 
export default LoginPage;