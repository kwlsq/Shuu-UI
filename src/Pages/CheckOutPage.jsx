import React from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import {
    getCart,
    getTotalPayment,
    getOngkir
} from '../Redux/Actions';

class CheckOutPage extends React.Component {
    componentDidMount() {
        this.props.getCart()
        this.props.getTotalPayment()
        this.props.getOngkir()
    }
    render() {
        return (
            <div className="cart-page-wrapper">
                <div className="cart-content-wrapper">
                    <div className="cart-page-header">
                        <div>Shipment Address</div>

                    </div>
                </div>
                <div className="checkout-wrapper">
                    <div>Total Price :Rp {new Intl.NumberFormat(['ban', 'id']).format(this.props.cartPage.totalPayment)} </div>

                    <Button
                        variant="contained"
                        color="primary"
                    >
                        Buy
                        </Button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({ transaction, cartPage }) => {
    return {
        transaction: transaction.cart,
        cartPage
    }
}

export default connect(mapStateToProps, {
    getCart,
    getTotalPayment,
    getOngkir
})(CheckOutPage);