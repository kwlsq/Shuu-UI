import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import {
    Card, CardImg, CardBody,
    CardTitle, CardSubtitle
} from 'reactstrap';
import { API_URL_HEROKU } from '../Helpers/apiurl';
import {
    showProductDetail,
    getWomenProducts,
    searchProduct,
    minPriceFilter,
    maxPriceFilter,
    priceFilter
} from '../Redux/Actions'
import Fade from 'react-reveal/Fade';
import Pagination from '@material-ui/lab/Pagination';
import FilterBar from '../Comps/filterBar';
import '../CSS/searchpage.css';


class SearchPage extends React.Component {
    componentDidMount() {
        const params = this.props.location.search.split('?')[1].split('&')
        const productName = params[0].split('=')[1];
        const page = params;

        console.log(page, 'itui')
        this.props.searchProduct(productName)
    }

    renderCardShowcase = () => {
        return this.props.products.map((item, index) => {
            return (
                <Card key={index} className="showcase-card" >
                    <Fade bottom distance="100px" duration={500}>
                        <Link to={`/detail?id=${item.id}=${item.pn_id}`}>
                            <CardImg top width="100%" src={API_URL_HEROKU + item.image} style={{ maxHeight: '200px' }} alt="Card image cap" />
                            <CardBody className="cardbody" >
                                <CardTitle>{item.name}</CardTitle>
                                <CardSubtitle>Rp {new Intl.NumberFormat(['ban', 'id']).format(item.price)}</CardSubtitle>
                            </CardBody>
                        </Link>
                    </Fade>
                </Card>
            )

        })
    }

    onChangePagination = (val) => {
        this.props.history.push(`/search?p=${this.props.location.search.split('?')[1].split('&')[0].split('=')[1]}&page=${val}`)

    }

    render() {
        return (
            <div className="search-wrapper">
                <div className="filter-wrapper">
                    <FilterBar
                        filterMinPrice={this.props.minPriceFilter}
                        filterMaxPrice={this.props.maxPriceFilter}
                        filterPrice={this.props.priceFilter}
                        min={this.props.filter.min}
                        max={this.props.filter.max}
                    />
                </div>
                <div className="search-showcase" >
                    {
                        this.props.products.length !== 0
                            ?
                            this.renderCardShowcase()
                            :
                            <div>Couldn't find the product you're looking for</div>
                    }
                    <Pagination
                        count={Math.ceil(this.props.products.length / 5)}
                        onChange={(e, val) => this.onChangePagination(val)}
                        showFirstButton showLastButton
                    />
                </div>
                <div>

                </div>
            </div>
        );

    }
}



const mapStateToProps = ({ products, filter }) => {
    return {
        products: products.showcase,
        hideButton: products.hideButton,
        detail: products.productDetail,
        filter
    }
}

export default connect(mapStateToProps, {
    showProductDetail,
    getWomenProducts,
    searchProduct,
    minPriceFilter,
    maxPriceFilter,
    priceFilter
})(SearchPage);