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
    updateStocks,
    editAddress,
    saveAddress,
    getProvinceLists,
    getCityLists,
    onChangeDeliveryProvince,
    onChangeDeliveryCity,
    onChangeDeliveryAddress
} from '../Redux/Actions';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import CardCheckout from '../Comps/cardsForCheckout';
import DialogPayment from '../Comps/dialogPayment';
import '../CSS/checkoutpage.css';
class CheckOutPage extends React.Component {
    componentDidMount() {
        this.props.getTotalPayment()
        this.props.getAddresses()
        this.props.getCart()
    }

    onClickEditAddress = () => {
        this.props.getProvinceLists()
        this.props.getCityLists()
        this.props.editAddress()
    }

    onChangeDeliveryProvince = (val) => {
        this.props.onChangeDeliveryProvince(val)
        if (val) {
            return this.props.getCityLists(val.province_id)
        }
        this.props.getCityLists()
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
                    origin={`${val.city_id}`}
                    destination={
                        this.props.checkoutPage.editCityId === 0
                            ?
                            this.props.address.city_id
                            :
                            this.props.checkoutPage.editCityId
                    }
                    chooseCourier={this.props.getOngkir}
                    ongkir={this.props.ongkir}
                    courier={this.props.courier}
                />
            )
        })
    }

    renderEditAddress = () => {
        if (this.props.checkoutPage.openEditAddress) {
            return (
                <div className="checkout-header-wrapper">
                    <div>Shipment Address</div>
                    <div>
                        <Autocomplete
                            options={this.props.editProfileInputs.provinceList}
                            onChange={(event, value) => this.onChangeDeliveryProvince(value)}
                            getOptionLabel={option => option.province}
                            style={{ maxWidth: 400, marginBottom: 10 }}
                            renderInput={params =>
                                <TextField
                                    {...params}
                                    label="Province"
                                    variant="outlined"
                                />}
                        />
                        <Autocomplete
                            options={this.props.editProfileInputs.cityList}
                            getOptionLabel={option => `${option.type} ${option.city_name}`}
                            onChange={(event, value) => this.props.onChangeDeliveryCity(value)}
                            style={{ maxWidth: 400, marginBottom: 10 }}
                            renderInput={params =>
                                <TextField
                                    {...params}
                                    label="City"
                                    variant="outlined"
                                />}
                        />
                        <TextField
                            label="Address Detail"
                            multiline
                            placeholder={this.props.address.address_detail}
                            rows="4"
                            value={this.props.checkoutPage.editAddress}
                            style={{ maxWidth: 400, marginBottom: 10 }}
                            variant="outlined"
                            onChange={(e) => this.props.onChangeDeliveryAddress(e.target.value)}
                        />
                    </div>
                    <div >
                        <button onClick={this.props.saveAddress}>Save Address</button>
                    </div>
                </div>
            )
        }
        return (
            <div className="checkout-header-wrapper">
                <div>Shipment Address</div>
                {
                    this.props.checkoutPage.editProvince === ''
                        ?
                        <div>

                            <div>Province : {this.props.address.province}</div>
                            <div>City : {this.props.address.city}</div>
                            <div>Detail : {this.props.address.address_detail}</div>
                        </div>
                        :
                        <div>
                            <div>Province : {this.props.checkoutPage.editProvince}</div>
                            <div>City : {this.props.checkoutPage.editCity}</div>
                            <div>Detail : {this.props.checkoutPage.editAddress}</div>
                        </div>
                }

                <div >
                    <button onClick={this.onClickEditAddress}>Change Delivery Address</button>
                </div>
            </div >
        )
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
                    {this.renderEditAddress()}
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
                            destination={
                                this.props.checkoutPage.editCity ? this.props.checkoutPage.editCity : this.props.address.city
                            }
                            province={
                                this.props.checkoutPage.editProvince ? this.props.checkoutPage.editProvince : this.props.address.province
                            }
                            address={
                                this.props.checkoutPage.editAddress ? this.props.checkoutPage.editAddress : this.props.address.address_detail
                            }
                        />
                        :
                        <div />
                }
            </div>
        )
    }
}

const mapStateToProps = ({ transaction, cartPage, checkoutPage, editProfileInputs }) => {
    return {
        cart: transaction.cart,
        address: transaction.address,
        ongkir: transaction.total_ongkir,
        courier: transaction.courier,
        cartPage,
        checkoutPage,
        editProfileInputs
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
    updateStocks,
    editAddress,
    saveAddress,
    getProvinceLists,
    getCityLists,
    onChangeDeliveryProvince,
    onChangeDeliveryCity,
    onChangeDeliveryAddress
})(CheckOutPage);