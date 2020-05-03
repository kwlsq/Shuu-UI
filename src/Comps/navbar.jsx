import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {
    logout,
    keepLogin
} from '../Redux/Actions';

import '../CSS/navbar.css';

class NavbarComp extends React.Component {
    state = {
        searchBar: ''
    }
    componentDidMount() {
        this.props.keepLogin()
        console.log(this.state.searchBar)
    }
    render() {
        if (this.props.role_id === 3) {
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
                            {
                                this.state.searchBar === ''
                                    ?
                                    <div className="searchbar">
                                        <input type="text" placeholder="search" onChange={(e) => this.setState({ searchBar: e.target.value })}></input>
                                        <a href={`/search?p=%20`}>
                                            <button><i className="fas fa-search"></i></button>
                                        </a>
                                    </div>
                                    :
                                    <div className="searchbar">
                                        <input type="text" placeholder="search" onChange={(e) => this.setState({ searchBar: e.target.value })}></input>
                                        <a href={`/search?p=${this.state.searchBar}`}>
                                            <button><i className="fas fa-search"></i></button>
                                        </a>
                                    </div>
                            }
                        </div>
                        <div className="button-login">
                            <Link to='/profile'>
                                {this.props.username}
                            </Link>
                        </div>
                        <div className="button-login">
                            <a href='/cart'>
                                <i className="fas fa-shopping-bag"></i>
                            </a>
                        </div>
                        <div className="button-register">
                            <Link to='/' onClick={this.props.logout}>
                                Log Out
                        </Link>
                        </div>

                    </div>
                </div>
            )
        } else if (this.props.role_id === 2) {
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
                            {
                                this.state.searchBar === ''
                                    ?
                                    <div className="searchbar">
                                        <input type="text" placeholder="search" onChange={(e) => this.setState({ searchBar: e.target.value })}></input>
                                        <a href={`/search?p=%20`}>
                                            <button><i className="fas fa-search"></i></button>
                                        </a>
                                    </div>
                                    :
                                    <div className="searchbar">
                                        <input type="text" placeholder="search" onChange={(e) => this.setState({ searchBar: e.target.value })}></input>
                                        <a href={`/search?p=${this.state.searchBar}`}>
                                            <button><i className="fas fa-search"></i></button>
                                        </a>
                                    </div>
                            }
                        </div>

                        <div className="button-login">
                            <Link to='/store'>
                                {this.props.username}
                            </Link>
                        </div>
                        <div className="button-register">
                            <Link to='/' onClick={this.props.logout}>
                                Log Out
                        </Link>
                        </div>
                    </div>
                </div>
            )
        } else if (this.props.role_id === 1) {
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
                        {
                            this.state.searchBar === ''
                                ?
                                <div className="searchbar">
                                    <input type="text" placeholder="search" onChange={(e) => this.setState({ searchBar: e.target.value })}></input>
                                    <a href={`/search?p=%20`}>
                                        <button><i className="fas fa-search"></i></button>
                                    </a>
                                </div>
                                :
                                <div className="searchbar">
                                    <input type="text" placeholder="search" onChange={(e) => this.setState({ searchBar: e.target.value })}></input>
                                    <a href={`/search?p=${this.state.searchBar}`}>
                                        <button><i className="fas fa-search"></i></button>
                                    </a>
                                </div>
                        }
                        <div className="button-login">
                            <Link to='/admin'>
                                {this.props.username}
                            </Link>
                        </div>
                        <div className="button-register">
                            <Link to='/' onClick={this.props.logout}>
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
                            <input type="text" placeholder="search" onChange={(e) => this.setState({ searchBar: e.target.value })}></input>
                            <a href={`/search?${this.state.searchBar}`}>
                                <button><i className="fas fa-search"></i></button>
                            </a>
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
                </div >
            )
        }


    }
}

const mapStateToProps = ({ user, transaction }) => {
    return {
        username: user.username,
        role_id: user.role_id,
        history: transaction.transactionHistory
    }
}

export default connect(mapStateToProps, {
    logout,
    keepLogin
})(NavbarComp)