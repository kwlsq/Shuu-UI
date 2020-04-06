import React from 'react';
import { connect } from 'react-redux'
import '../CSS/landingpage.css';
import '../CSS/card.css';
import Fade from 'react-reveal/Fade';
import CarouselComp from '../Comps/carousel';
import FeatureBar from '../Comps/featureBar';
import CardComp from '../Comps/cards';
import CarouselBrands from '../Comps/carouselOfficialBrands';
import FilterBar from '../Comps/filterBar';
import {
    getAllBrands,
    showShowcaseProducts,
    loadMore,
    minPriceFilter,
    maxPriceFilter,
    priceFilter
} from '../Redux/Actions'
class LandingPage extends React.Component {
    componentDidMount() {
        this.props.getAllBrands()
        this.props.showShowcaseProducts()
    }

    render() {
        return (
            <div className="landingpage-grid">
                <FeatureBar />
                <Fade bottom distance="50px" duration={1000}>
                    <div className="carousel-wrapper"><CarouselComp /></div>
                </Fade>
                <Fade bottom distance="50px" duration={1000}>
                    <div className="official-brands">
                        <div className="card-header">Official Stores</div>
                        <div className="carousel-brands-wrapper">
                            <CarouselBrands />
                        </div>
                    </div>
                </Fade>
                <div className="showcase-filter-wrapper">
                    <FilterBar
                        filterMinPrice={this.props.minPriceFilter}
                        filterMaxPrice={this.props.maxPriceFilter}
                        filterPrice={this.props.priceFilter}
                        min={this.props.filter.min}
                        max={this.props.filter.max}
                    />
                </div>
                <div className="showcase-wrapper">
                    <CardComp />

                    {
                        this.props.products.hideButton
                            ?
                            <div />
                            :
                            <button onClick={() => this.props.loadMore(this.props.products.showcase.length)}>Load More</button>
                    }
                </div>


            </div>
        );
    }
}


const mapStateToProps = ({ products, filter }) => {
    return {
        products,
        filter
    }
}

export default connect(mapStateToProps, {
    getAllBrands,
    showShowcaseProducts,
    loadMore,
    minPriceFilter,
    maxPriceFilter,
    priceFilter
})(LandingPage);