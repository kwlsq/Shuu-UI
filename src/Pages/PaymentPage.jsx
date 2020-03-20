import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../CSS/style.css';
import '../fonts/FontAwesome.otf';

class PaymentPage extends Component {
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
                        <h1>Yay!</h1>
                    </div>
                    <h3>Purchase Submitted</h3>
                    <p>You can always check your transaction history in your profile page, or simply click the link below</p>
                    <Link to='/profile'>Transactions</Link>
                </div>
            </div>
        );
    }
}

export default PaymentPage;