import React from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import {
    getCart,
    getTotalPayment,
    getOngkir,
    getAddresses

} from '../Redux/Actions';
import CardCheckout from '../Comps/cardsForCheckout';
import '../CSS/checkoutpage.css';

class CheckOutPage extends React.Component {
    componentDidMount() {
        this.props.getTotalPayment()
        this.props.getAddresses()
        this.props.getCart()
    }

    renderCardCheckout = () => {
        return this.props.cart.map((val, index) => {
            return (
                <CardCheckout
                    key={index}
                    id={val.id}
                    index={index}
                    name={val.name}
                    price={val.price}
                    city={val.city}
                    image={val.image}
                    weight={val.total_weight}
                    origin={val.city_id}
                    destination={this.props.address.city_id}
                    chooseCourier={this.props.getOngkir}
                    ongkir={this.props.ongkir}
                />
            )
        })
    }


    render() {
        return (
            <div className="checkout-page-wrapper" >
                <div className="checkout-detail">
                    <div className="checkout-header-wrapper">
                        <div>Shipment Address</div>
                        <div>
                            <div>Province : {this.props.address.province}</div>
                            <div>City : {this.props.address.city}</div>
                            <div>Detail : {this.props.address.address_detail}</div>
                        </div>
                        <div >
                            <Button
                                variant="contained"
                                color="secondary"
                                style={{ maxWidth: '300px' }}
                            >
                                Change Delivery Address
                        </Button>
                        </div>
                    </div>
                    {this.renderCardCheckout()}
                </div>
                <div className="checkout-payment-wrapper">
                    <div>Total Price :Rp {new Intl.NumberFormat(['ban', 'id']).format(this.props.cartPage.totalPayment)} </div>
                    <div>Total Delivery Price :Rp  {new Intl.NumberFormat(['ban', 'id']).format(this.props.ongkir)}</div>

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
        cart: transaction.cart,
        address: transaction.address,
        ongkir: transaction.total_ongkir,
        cartPage
    }
}

export default connect(mapStateToProps, {
    getCart,
    getTotalPayment,
    getOngkir,
    getAddresses
})(CheckOutPage);