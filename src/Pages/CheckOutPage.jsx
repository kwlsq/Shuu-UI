import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import {
    getCart,
    getTotalPayment,
    getOngkir,
    getAddresses,
    onClickButtonPayment,
    closeDialogPayment,
    storePaymentReceipt,
    uploadReceipt

} from '../Redux/Actions';
import CardCheckout from '../Comps/cardsForCheckout';
import DialogPayment from '../Comps/dialogPayment';
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
                    courier={this.props.courier}
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
                    <div>
                        Total Delivery Price :Rp  {new Intl.NumberFormat(['ban', 'id']).format(this.props.ongkir)}
                    </div>
                    <div>Total Payment :Rp  {new Intl.NumberFormat(['ban', 'id']).format(this.props.ongkir + this.props.cartPage.totalPayment)}</div>
                    {/* <Link to='/payment'> */}

                    <Button
                        variant="contained"
                        color="primary"
                        onClick={this.props.onClickButtonPayment}
                    >
                        Payment
                        </Button>
                    {/* </Link> */}
                </div>
                {
                    this.props.checkoutPage.openDialog
                        ?
                        <DialogPayment
                            open={this.props.checkoutPage.openDialog}
                            close={this.props.closeDialogPayment}
                            storeReceipt={this.props.storePaymentReceipt}
                            uploadReceipt={this.props.uploadReceipt}
                            receipt={this.props.checkoutPage.paymentReceipt}
                            payment={this.props.ongkir + this.props.cartPage.totalPayment}
                        />
                        :
                        <div />
                }
            </div>
        )
    }
}

const mapStateToProps = ({ transaction, cartPage, checkoutPage }) => {
    return {
        cart: transaction.cart,
        address: transaction.address,
        ongkir: transaction.total_ongkir,
        courier: transaction.courier,
        cartPage,
        checkoutPage
    }
}

export default connect(mapStateToProps, {
    getCart,
    getTotalPayment,
    getOngkir,
    getAddresses,
    onClickButtonPayment,
    closeDialogPayment,
    storePaymentReceipt,
    uploadReceipt
})(CheckOutPage);