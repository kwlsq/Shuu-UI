import React from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import {
    getCart,
    getTotalPayment,
    getOngkir,
    getAddresses,
    onClickButtonPayment,
    closeDialogPayment,
    storePaymentReceipt,
    uploadReceipt,
    updateStocks
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
                    size={val.size}
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

    updateStocks = () => {
        for (var i = 0;i < this.props.cart.length;i++) {
            this.props.updateStocks(this.props.cart[i].qty, this.props.cart[i].product_id, this.props.cart[i].size)
            console.log(this.props.cart[i].qty, this.props.cart[i].product_id, this.props.cart[i].size)
        }

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

                    <Button
                        variant="contained"
                        color="primary"
                        onClick={this.props.onClickButtonPayment}
                    >
                        Payment
                        </Button>
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
                            updateStocks={this.updateStocks}
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
    uploadReceipt,
    updateStocks
})(CheckOutPage);