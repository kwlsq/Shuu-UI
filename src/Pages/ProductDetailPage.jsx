import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import {
    showProductDetail,
    showAvailableSize,
    onChangeSize,
    onChangeQty,
    addToCart,
    closeDialog,
    redirectToCart,
    openDialog,
    addToCartViaBuy
} from '../Redux/Actions';
import { API_URL_1 } from '../Helpers/apiurl';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import '../CSS/productdetail.css';
import DialogAddTocart from '../Comps/dialogAddToCart';

class ProductDetail extends React.Component {
    componentDidMount() {
        const id = this.props.location.search.split('=')[1];
        const pn_id = this.props.location.search.split('=')[2];
        this.props.showProductDetail(id)
        this.props.showAvailableSize(pn_id)
    }

    renderListSize = () => {
        return this.props.products.availSize.map((item, index) => {
            return (
                <option key={index} value={item.size}>{item.size}</option>
            )
        })
    }

    onChooseSize = (size) => {
        this.props.onChangeSize(size, this.props.products.productDetail.pn_id)
    }
    onClickAddToCart = () => {
        if (this.props.productDetail.qty !== 0 && this.props.productDetail.qty <= this.props.products.productDetail.stock && this.props.productDetail.size) {
            return this.props.addToCart(this.props.productDetail.qty, this.props.products.productDetail.id)
        }
        alert('Please check your quantity and size forms')

    }

    onClickBuy = () => {
        if (this.props.productDetail.qty !== 0 && this.props.productDetail.qty <= this.props.products.productDetail.stock && this.props.productDetail.size) {
            this.props.addToCartViaBuy(this.props.productDetail.qty, this.props.products.productDetail.id)
            return this.props.redirectToCart()
        }
        alert('Please check your quantity and size forms')
    }

    render() {
        if (this.props.productDetail.redirectToCart) {
            return (
                <Redirect to='/cart' />
            )
        }
        return (
            <div className="product-detail-wrapper">
                <img src={API_URL_1 + this.props.products.productDetail.image} alt="product detail" />
                <div className="product-detail-texts">
                    <div>{this.props.products.productDetail.name}</div>
                    <div>{this.props.products.productDetail.brands}</div>
                    {/* <div>Rating</div> */}
                    {/* <div>Terjual Berapa</div> */}
                    {/* <div>Views {this.props.products.productDetail.views}</div> */}
                </div>
                <div className="product-detail-price">
                    <div>
                        Price
                    </div>
                    Rp {new Intl.NumberFormat(['ban', 'id']).format(this.props.products.productDetail.price)}
                </div>
                <div className="product-detail-count">
                    <div>Stock :{this.props.products.productDetail.stock}</div>
                    <input
                        label="Quantity"
                        type='number'
                        value={this.props.productDetail.qty}
                        min={0}
                        max={this.props.products.productDetail.stock}
                        onChange={(e) => this.props.onChangeQty(e.target.value)}
                        style={{ minWidth: 100 }}
                    />
                    {
                        this.props.productDetail.qty < 1
                            ?
                            <InputLabel id="demo-simple-select-label">Minimum quantity: 1</InputLabel>
                            :
                            <div />
                    }
                    {
                        this.props.productDetail.qty > this.props.products.productDetail.stock
                            ?
                            <InputLabel id="demo-simple-select-label">Maximum quantity: {this.props.products.productDetail.stock}</InputLabel>
                            :
                            <div />
                    }
                </div>
                <div className="product-detail-size">
                    <InputLabel id="demo-simple-select-label">Choose Size</InputLabel>
                    <FormControl style={{ minWidth: 120 }}>
                        <select

                            value={this.props.productDetail.size}
                            onChange={(e) => this.onChooseSize(e.target.value)}
                        >
                            <option disabled value=''>Size List</option>

                            {this.renderListSize()}
                        </select>
                    </FormControl>
                </div>
                <div className="product-detail-button-wrapper">
                    <button className="button-buy" onClick={this.onClickBuy}>Buy</button>
                    <button className="button-add-to-cart" onClick={this.onClickAddToCart}>Add to Cart</button>
                </div>
                {
                    this.props.productDetail.popDialog
                        ?
                        <DialogAddTocart
                            open={this.props.productDetail.popDialog}
                            close={this.props.closeDialog}
                            redirect={this.props.redirectToCart}
                        />
                        :
                        <div />
                }
            </div >
        )
    }
}


const mapStateToProps = ({ products, productDetail, transaction }) => {
    return { products, productDetail, transaction }
}
export default connect(mapStateToProps, {
    showProductDetail,
    showAvailableSize,
    onChangeSize,
    onChangeQty,
    addToCart,
    closeDialog,
    redirectToCart,
    openDialog,
    addToCartViaBuy
})(ProductDetail);