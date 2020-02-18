import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../Redux/Actions';
import '../CSS/loginpage.css';


class LoginPage extends React.Component {
    state = {
        username: '',
        password: '',
    }

    onBtnClickSignIn = () => {
        let { username, password } = this.state
        if (username, password) {
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
                <div className="login-form-wrapper">
                    <div className="headline-login">Username</div>
                    <input
                        type="text"
                        placeholder="Username"
                        onChange={(e) => this.setState({ username: e.target.value })}
                    ></input>
                    <br />
                    <div className="headline-login">Password</div>
                    <input
                        type="password"
                        placeholder="Password"
                        onChange={(e) => this.setState({ password: e.target.value })}
                    ></input>
                    <br />
                    <input type="button" onClick={this.onBtnClickSignIn} value="Sign in"></input>
                    <Link to="/register">Sign Up</Link>
                </div>
            </div>
        );
    }
}

const mapStatetoProps = (state) => {
    return {
        token: state.user.token
    }
}

export default connect(mapStatetoProps, { login })(LoginPage);