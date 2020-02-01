import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/navbar.css';

const NavbarComp = () => {
    return (
        <div className="navbar-wrapper">
            <div className="logo">
                Shuu
            </div>
            <div className="nav-items">
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
                <div>
                    <input type="text" placeholder="search"></input>
                    <button><i class="fas fa-search"></i></button>
                </div>
            </div>
        </div>
    )
}

export default NavbarComp