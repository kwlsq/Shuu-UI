import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { login, onInputText, removeRedirect } from '../Redux/Actions';
import Fade from 'react-reveal/Fade';
import '../CSS/loginpage.css';

class LoginPage extends React.Component {
    componentDidMount() {
        this.props.removeRedirect()

    }
    onBtnClickSignIn = () => {
        let { username, password } = this.props.loginForm
        if ((username && password)) {
            this.props.login(username, password)
        } else {
            alert('Fill all the forms')
        }

    }
    render() {
        if (localStorage.getItem('token')) {
            return (
                <Redirect to='/' />
            )
        }
        return (
            <div className="loginpage-wrapper">
                <Fade top duration={1000} distance="50px">
                    <div className="login-form-wrapper">
                        <div className="headline-login">Username</div>
                        <input
                            className="login-input"
                            type="text"
                            placeholder="Username"
                            onChange={(e) => this.props.onInputText('username', e.target.value)}
                        ></input>
                        <br />
                        <div className="headline-login">Password</div>
                        <input
                            className="login-input"
                            type="password"
                            placeholder="Password"
                            onChange={(e) => this.props.onInputText('password', e.target.value)}
                        ></input>
                        <br />
                        <div >
                            <input
                                type="button"
                                onClick={this.onBtnClickSignIn}
                                value="Login"
                                className="login-button"
                            />
                            <Link to="/register" className="register-button">Register</Link>
                        </div>
                    </div>
                </Fade>
            </div>
        );
    }
}

const mapStatetoProps = ({ user, loginForm }) => {
    return {
        user,
        loginForm
    }
}

export default connect(mapStatetoProps, { login, onInputText, removeRedirect })(LoginPage);