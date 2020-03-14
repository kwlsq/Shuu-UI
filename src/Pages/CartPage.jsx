import React from 'react';
import { connect } from 'react-redux';
import {
    stopRedirectToCart
} from '../Redux/Actions'


class CartPage extends React.Component {

    render() {
        this.props.stopRedirectToCart()
        return (
            <div>ini cart page</div>
        )
    }
}

export default connect(null, { stopRedirectToCart })(CartPage);
