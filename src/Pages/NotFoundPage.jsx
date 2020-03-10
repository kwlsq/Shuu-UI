import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../CSS/style.css';
import '../fonts/FontAwesome.otf';

class NotFound extends Component {
    state = {}
    render() {
        return (
            <div id="notfound">
                <div className="notfound-bg">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className="notfound">
                    <div className="notfound-404">
                        <h1>404</h1>
                    </div>
                    <h2>Page Not Found</h2>
                    <p>The Page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
                    <Link to='/'>Homepage</Link>
                </div>
            </div>
        );
    }
}

export default NotFound;