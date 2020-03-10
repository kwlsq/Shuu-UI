import React from 'react';
import { connect } from 'react-redux';
import { register, onRegisterText } from '../Redux/Actions';
import { Redirect } from 'react-router-dom';
import Fade from 'react-reveal/Fade';


class RegisterPage extends React.Component {
    checkPass = (e) => {
        var value = e.target.value
        this.props.onRegisterText('showErr', true)
        if (value.length > 9) {
            this.props.onRegisterText('checkLength', true)
        } else {
            this.props.onRegisterText('checkLength', false)
        }
        if (/[0-9]/.test(value)) {
            this.props.onRegisterText('numberRegex', true)
        } else {
            this.props.onRegisterText('numberRegex', false)
        }
        if (/[!@#$%^&*]/.test(value)) {
            this.props.onRegisterText('spcCharRegex', true)
        } else {
            this.props.onRegisterText('spcCharRegex', false)
        }
        this.props.onRegisterText('password', e.target.value)
    }

    onBtnClickSignUp = () => {
        let {
            username,
            password,
            email,
            confPass,
            numberRegex,
            spcCharRegex,
            checkLength
        } = this.props.registerForm
        if (username && password && confPass && email) {
            if (checkLength && numberRegex && spcCharRegex) {
                if (password === confPass) {
                    var obj = {
                        username,
                        password,
                        email
                    }
                    this.props.register(obj)
                    return (
                        <Redirect to='/login' />
                    )
                } else {
                    alert('Password is not match')
                }
            } else {
                alert('Password requirement not fulfilled')
            }
        } else {
            alert('Please fill all forms!')
        }
    }

    render() {
        console.log(this.props.user.redirectVerify)
        if (this.props.user.redirectVerify) {
            return (
                <Redirect to='login' />
            )
        } else {
            return (
                <div className="loginpage-wrapper">
                    <Fade top duration={1000} distance="50px">
                        <div className="login-form-wrapper">
                            <div className="headline-login">Username</div>
                            <input
                                className="login-input"
                                type="text"
                                placeholder="Username"
                                onChange={(e) => this.props.onRegisterText('username', e.target.value)}
                            ></input>
                            <br />
                            <div className="headline-login">Email</div>
                            <input
                                className="login-input"
                                type="email"
                                placeholder="Email"
                                onChange={(e) => this.props.onRegisterText('email', e.target.value)}
                            ></input>
                            <br />
                            <div className="headline-login">Password</div>
                            <input
                                className="login-input"
                                type="password"
                                placeholder="Password"
                                ref='password'
                                onChange={(e) => this.checkPass(e)}
                            ></input>
                            <br />
                            <div className="headline-login">Confirm Password</div>
                            <input
                                className="login-input"
                                type="password"
                                placeholder="Confirm Password"
                                onChange={(e) => this.props.onRegisterText('confPass', e.target.value)}
                            ></input>
                            <br />
                            {
                                this.props.registerForm.showErr
                                    ?
                                    <div className="err-wrapper">
                                        {this.props.registerForm.checkLength
                                            ?
                                            <p className="text-success">Password length more than 8 characters</p>
                                            :
                                            <p className="text-danger">Password length must be more than 8 characters</p>
                                        }
                                        {this.props.registerForm.numberRegex
                                            ?
                                            <p className="text-success">Password contains numeric character</p>
                                            :
                                            <p className="text-danger">Password must contains numeric character</p>
                                        }
                                        {this.props.registerForm.spcCharRegex
                                            ?
                                            <p className="text-success">Password contains special character</p>
                                            :
                                            <p className="text-danger">Password must contains special character</p>
                                        }
                                    </div>
                                    :
                                    <div />
                            }
                            <br />
                            <input type="button" onClick={this.onBtnClickSignUp} value="Register" className="register-button"></input>
                        </div>
                    </Fade>
                </div>
            );
        }
    }
}

const mapStateToProps = ({ user, registerForm }) => {
    return { user, registerForm }
}

export default connect(mapStateToProps, { register, onRegisterText })(RegisterPage);