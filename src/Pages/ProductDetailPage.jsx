import React from 'react';
import { connect } from 'react-redux';
import { showProductDetail } from '../Redux/Actions';
import { API_URL_1 } from '../Helpers/apiurl';
import '../CSS/productdetail.css';

class ProductDetail extends React.Component {
    componentDidMount() {
        const id = this.props.location.search.split('=')[1];
        this.props.showProductDetail(id)
    }
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
                    <div>Stock{this.props.products.productDetail.stock}</div>
                    <button>-</button>
                    <input value='0'></input>
                    <button>+</button>
                </div>
                <div className="product-detail-color">Pilihan Warna</div>
                <div className="product-detail-size">Pilihan Size</div>
                <div className="product-detail-ongkir">Ongkos Kirim</div>
                <div className="product-detail-button-wrapper">
                    <button>Buy</button>
                    <button>Add to Cart</button>
                </div>
            </div>
        )
    }
}


const mapStateToProps = ({ products }) => {
    return { products }
}
export default connect(mapStateToProps, { showProductDetail })(ProductDetail);