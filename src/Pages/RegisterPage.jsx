import React from 'react';
import { connect } from 'react-redux';
import { register } from '../Redux/Actions';
// import { Link } from 'react-router-dom'

class RegisterPage extends React.Component {
    state = {
        username: '',
        email: '',
        password: '',
        confPassword: '',
        checklength: false,
        numberRegex: false,
        spcCharRegex: false,
        showErr: false
    }

    checkPass = (e) => {
        var value = e.target.value
        this.setState({ showErr: true })
        if (value.length > 9) {
            this.setState({ checklength: true })
        } else {
            this.setState({ checklength: false })
        }
        if (/[0-9]/.test(value)) {
            this.setState({ numberRegex: true })
        } else {
            this.setState({ numberRegex: false })
        }
        if (/[!@#$%^&*]/.test(value)) {
            this.setState({ spcCharRegex: true })
        } else {
            this.setState({ spcCharRegex: false })
        }

    }

    onBtnClickSignUp = () => {
        const { } = this.state
    }

    render() {
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
                    <div className="headline-login">Email</div>
                    <input
                        type="email"
                        placeholder="Email"
                        onChange={(e) => this.setState({ email: e.target.value })}
                    ></input>
                    <br />
                    <div className="headline-login">Password</div>
                    <input
                        type="password"
                        placeholder="Password"
                        ref='password'
                        onChange={(e) => this.checkPass(e)}
                    ></input>
                    <br />
                    <div className="headline-login">Confirm Password</div>
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        onChange={(e) => this.setState({ confPassword: e.target.value })}
                    ></input>
                    <br />
                    <input type="button" onClick={this.onBtnClickSignUp} value="Sign Up"></input>
                </div>
                {
                    this.state.showErr
                        ?
                        <div className="err-wrapper">
                            {this.state.checklength
                                ?
                                <p class="text-success">Password length more than 8 characters</p>
                                :
                                <p class="text-danger">Password length must be more than 8 characters</p>
                            }
                            {this.state.numberRegex
                                ?
                                <p class="text-success">Password contains numeric character</p>
                                :
                                <p class="text-danger">Password must contains numeric character</p>
                            }
                            {this.state.spcCharRegex
                                ?
                                <p class="text-success">Password contains special character</p>
                                :
                                <p class="text-danger">Password must contains special character</p>
                            }
                        </div>
                        :
                        <div />
                }


            </div>
        );
    }
}

export default connect(null, { register })(RegisterPage);