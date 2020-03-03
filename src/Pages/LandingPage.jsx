import React from 'react';
import { connect } from 'react-redux'
import '../CSS/landingpage.css';
import '../CSS/card.css';

import CarouselComp from '../Comps/carousel';
import FeatureBar from '../Comps/featureBar';
import CardComp from '../Comps/cards';
import CarouselBrands from '../Comps/carouselOfficialBrands';
import {
    getAllBrands,
    showShowcaseProducts
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
                <div className="carousel-wrapper"><CarouselComp /></div>
                <div className="card-promo">
                    <div className="card-header">Promo</div>

                </div>
                <div className="upcoming-events">
                    <div className="card-header">Official Stores</div>
                    <CarouselBrands />
                </div>
                <div className="showcase-wrapper">
                    <CardComp />
                </div>
            </div>
        );
    }
}



export default connect(null, { getAllBrands, showShowcaseProducts })(LandingPage);