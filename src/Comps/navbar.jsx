import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/navbar.css';

const NavbarComp = () => {
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