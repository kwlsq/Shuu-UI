import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout, keepLogin } from '../Redux/Actions';
import '../CSS/navbar.css';

const NavbarComp = (props) => {
    props.keepLogin()
    if (props.role_id === 3) {
        console.log('ini user')
        return (
            <div className="navbar-wrapper">
                <div className="nav-items">
                    <div className="logo">
                        <Link to='/'>
                            Shuu
                </Link>
                    </div>
                    <div className="button">
                        <Link to='/men'>
                            Men
                    </Link>
                    </div>
                    <div className="button">
                        <Link to='/women'>
                            Women
                    </Link>
                    </div>
                    <div className="button">
                        <Link to='/feeds'>
                            Feed
                    </Link>
                    </div>
                    <div className="searchbar">
                        <input type="text" placeholder="search"></input>
                        <button><i className="fas fa-search"></i></button>
                    </div>
                    <div className="button-login">
                        <Link to='/profile'>
                            {props.username}
                        </Link>
                    </div>
                    <div className="button-login">
                        <a href='/cart'>
                            <i className="fas fa-shopping-bag"></i>
                        </a>
                    </div>
                    <div className="button-register">
                        <Link to='/' onClick={props.logout}>
                            Log Out
                    </Link>
                    </div>
                </div>
            </div>
        )
    } else if (props.role_id === 2) {
        console.log('ini toko/partner')
        return (
            <div className="navbar-wrapper">
                <div className="nav-items">
                    <div className="logo">
                        <Link to='/'>
                            Shuu
                </Link>
                    </div>
                    <div className="button">
                        <Link to='/men'>
                            Men
                    </Link>
                    </div>
                    <div className="button">
                        <Link to='/women'>
                            Women
                    </Link>
                    </div>
                    <div className="button">
                        <Link to='/feeds'>
                            Feed
                    </Link>
                    </div>
                    <div className="searchbar">
                        <input type="text" placeholder="search"></input>
                        <button><i className="fas fa-search"></i></button>
                    </div>

                    <div className="button-login">
                        <Link to='/store'>
                            {props.username}
                        </Link>
                    </div>
                    <div className="button-register">
                        <Link to='/' onClick={props.logout}>
                            Log Out
                    </Link>
                    </div>
                </div>
            </div>
        )
    } else if (props.role_id === 1) {
        console.log('ini admin')
        return (
            <div className="navbar-wrapper">
                <div className="nav-items">
                    <div className="logo">
                        <Link to='/'>
                            Shuu
                </Link>
                    </div>
                    <div className="button">
                        <Link to='/men'>
                            Men
                    </Link>
                    </div>
                    <div className="button">
                        <Link to='/women'>
                            Women
                    </Link>
                    </div>
                    <div className="button">
                        <Link to='/feeds'>
                            Feed
                    </Link>
                    </div>
                    <div className="searchbar">
                        <input type="text" placeholder="search"></input>
                        <button><i className="fas fa-search"></i></button>
                    </div>
                    <div className="button-login">
                        <Link to='/admin'>
                            {props.username}
                        </Link>
                    </div>
                    <div className="button-register">
                        <Link to='/' onClick={props.logout}>
                            Log Out
                    </Link>
                    </div>
                </div>
            </div>
        )
    } else {
        console.log('ini belom login')
        return (
            <div className="navbar-wrapper">
                <div className="nav-items">
                    <div className="logo">
                        <Link to='/'>
                            Shuu
                </Link>
                    </div>
                    <div className="button">
                        <Link to='/men'>
                            Men
                    </Link>
                    </div>
                    <div className="button">
                        <Link to='/women'>
                            Women
                    </Link>
                    </div>
                    <div className="button">
                        <Link to='/feeds'>
                            Feed
                    </Link>
                    </div>
                    <div className="searchbar">
                        <input type="text" placeholder="search"></input>
                        <button><i className="fas fa-search"></i></button>
                    </div>
                    <div className="button-login">
                        <Link to='/login'>
                            Log in
                    </Link>
                    </div>
                    <div className="button-register">
                        <Link to='/register'>
                            Register
                    </Link>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({ user }) => {
    return {
        username: user.username,
        role_id: user.role_id
    }
}

export default connect(mapStateToProps, { logout, keepLogin })(NavbarComp)