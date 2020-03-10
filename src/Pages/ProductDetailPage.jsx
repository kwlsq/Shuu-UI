import React from 'react';
import { connect } from 'react-redux';
import {
    showProductDetail,
    showAvailableSize,
    onChangeSize,
    onChangeQty
} from '../Redux/Actions';
import { API_URL_1 } from '../Helpers/apiurl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import '../CSS/productdetail.css';

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

    // onClickAddToCart = () => {
    //     if (this.props.products.productDetail.stock)
    // }

    render() {
        return (
            <div className="product-detail-wrapper">
                <img src={API_URL_1 + this.props.products.productDetail.image} alt="product detail" />
                <div className="product-detail-texts">
                    <div>{this.props.products.productDetail.name}</div>
                    <div>{this.props.products.productDetail.brands}</div>
                    <div>Rating</div>
                    <div>Terjual Berapa</div>
                    <div>Views {this.props.products.productDetail.views}</div>
                    <div>Rp {new Intl.NumberFormat(['ban', 'id']).format(this.props.products.productDetail.price)}</div>
                </div>
                <div className="product-detail-count">
                    <div>Stock :{this.props.products.productDetail.stock}</div>
                    <TextField
                        label="Quantity"
                        type='number'
                        value={this.props.productDetail.qty}
                        InputProps={{ inputProps: { min: 0, max: `${this.props.products.productDetail.stock}` } }}
                        onChange={(e) => this.props.onChangeQty(e.target.value)}
                        variant="outlined"
                        size="small"
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
                        this.props.productDetail.qty >= this.props.products.productDetail.stock
                            ?
                            <InputLabel id="demo-simple-select-label">Maximum quantity: {this.props.products.productDetail.stock}</InputLabel>
                            :
                            <div />
                    }
                </div>
                <div className="product-detail-size">
                    <FormControl style={{ minWidth: 120 }}>
                        <InputLabel id="demo-simple-select-label">Choose Size</InputLabel>
                        <Select
                            defaultValue={'DEFAULT'}
                            onChange={(e) => this.props.onChangeSize(e.target.value)}
                        >
                            <option value="DEFAULT" disabled>Size </option>
                            {this.renderListSize()}
                        </Select>
                    </FormControl>
                </div>
                <div className="product-detail-ongkir">Ongkos Kirim</div>
                <div className="product-detail-button-wrapper">
                    <button>Buy</button>
                    <button onClick={this.onClickAddToCart}>Add to Cart</button>
                </div>
            </div >
        )
    }
}


const mapStateToProps = ({ products, productDetail }) => {
    return { products, productDetail }
}
export default connect(mapStateToProps, {
    showProductDetail,
    showAvailableSize,
    onChangeSize,
    onChangeQty
})(ProductDetail);