import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';
import '../CSS/navbar.css';

const Example = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [search, setSearch] = useState('%20')
    console.log(props.role)
    const toggle = () => setIsOpen(!isOpen);

    return (
        <div className="navbar-wrapper d-flex justify-content-center align-items-center">
            <Navbar className="py-0" light expand="xl">
                <NavbarBrand className="logo pb-3 px-4" href="/">Shuu</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav navbar className="nav-items container">
                        <NavItem className="button pr-5">
                            <NavLink href="/men">Men</NavLink>
                        </NavItem>
                        <NavItem className="button pr-5">
                            <NavLink href="/women">Women</NavLink>
                        </NavItem>
                        <NavItem className="button pr-5">
                            <NavLink href="/feeds">Feeds</NavLink>
                        </NavItem>
                        <NavItem className="searchbar pr-5">
                            <div className="d-flex">
                                <input type="text" placeholder="search" onChange={(e) => setSearch(e.target.value)}></input>
                                <a href={`/search?p=${search}`}>
                                    <button><i className="fas fa-search"></i></button>
                                </a>
                            </div>
                        </NavItem>
                        {
                            props.username
                                ?
                                <NavItem className="d-flex">
                                    <NavItem className="button-login pr-3">
                                        <NavLink href={`/${props.role}`}>{props.username}</NavLink>
                                    </NavItem>
                                    <NavItem className="button-login pr-3">
                                        <NavLink href='/cart'>
                                            <i className="fas fa-shopping-bag"></i>
                                        </NavLink>
                                    </NavItem>
                                    <NavItem className="button-register pr-5">
                                        <NavLink href='/' onClick={props.logout}>Log out</NavLink>
                                    </NavItem>
                                </NavItem>
                                :
                                <NavItem className="d-flex">
                                    <NavItem className="button-login pr-5">
                                        <NavLink href='/login'>Login</NavLink>
                                    </NavItem>
                                    <NavItem className="button-register pr-5">
                                        <NavLink href='/register'>Register</NavLink>
                                    </NavItem>
                                </NavItem>
                        }
                    </Nav>
                </Collapse>
            </Navbar>
        </div >
    );
}

export default Example;