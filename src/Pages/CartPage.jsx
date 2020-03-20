import React from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import {
    stopRedirectToCart,
    getCart,
    changeCartItemQty,
    getTotalPayment,
    deleteAll,
    deleteItem
} from '../Redux/Actions';
import CartCard from '../Comps/cardsForCart';
import '../CSS/cartpage.css';
import { Link } from 'react-router-dom';


class CartPage extends React.Component {
    componentDidMount() {
        this.props.stopRedirectToCart()
        this.props.getCart()
        this.props.getTotalPayment()
    }

    renderCartCard = () => {
        return this.props.cart.map((val, index) => {
            return (
                <CartCard
                    key={index}
                    index={index}
                    id={val.id}
                    image={val.image}
                    name={val.name}
                    size={val.size}
                    price={val.price}
                    curQty={val.qty}
                    newQty={this.props.cartPage.newQty}
                    stock={val.stock}
                    chgQty={this.props.changeCartItemQty}
                    p_id={val.product_id}
                    delete={this.props.deleteItem}
                />
            )
        })
    }

    render() {
        return (
            <div className="cart-page-wrapper">
                <div className="cart-content-wrapper">
                    <div className="cart-page-header">
                        <Button
                            variant="contained"
                            color="secondary"
                            startIcon={<DeleteIcon />}
                            onClick={this.props.deleteAll}
                        >
                            Delete All
                        </Button>
                    </div>
                    {this.renderCartCard()}
                </div>
                <div className="checkout-wrapper">
                    <div>Total Price :Rp {new Intl.NumberFormat(['ban', 'id']).format(this.props.cartPage.totalPayment)} </div>

                    {
                        this.props.cart.length !== 0
                            ?
                            <Link to='/checkout'>
                                <Button
                                    variant="contained"
                                    color="primary"
                                >
                                    Buy
                        </Button>
                            </Link>
                            :
                            <Button
                                disabled
                                variant="contained"
                                color="primary"
                            >
                                Buy
                        </Button>
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({ transaction, cartPage }) => {
    return {
        cart: transaction.cart,
        cartPage
    }
}

export default connect(mapStateToProps, {
    stopRedirectToCart,
    getCart,
    changeCartItemQty,
    getTotalPayment,
    deleteAll,
    deleteItem
})(CartPage);
