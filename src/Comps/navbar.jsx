import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/navbar.css';

const NavbarComp = () => {
    return (
        <div className="navbar-wrapper">
            <div className="nav-items">
            <div className="logo">
                Shuu
            </div>
                <div className="button">
                    <Link to='/'>
                        Men
                    </Link>
                </div>
                <div className="button">
                    <Link to='/'>
                        Women
                    </Link>
                </div>
                <div className="button">
                    <Link to='/'>
                        Feed
                    </Link>
                </div>
                <div className="searchbar">
                    <input type="text" placeholder="search"></input>
                    <button><i class="fas fa-search"></i></button>
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

export default NavbarComp