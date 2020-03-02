import React from 'react';
import { connect } from 'react-redux'
import '../CSS/landingpage.css';
import CarouselComp from '../Comps/carousel';
import FeatureBar from '../Comps/featureBar';
import CardComp from '../Comps/cards';
import { getAllBrands } from '../Redux/Actions'

class LandingPage extends React.Component {
    componentDidMount() {
        this.props.getAllBrands()
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
                </div>
                <div className="items-wrapper">
                    <CardComp />
                </div>
            </div>
        );
    }
}



export default connect(null, { getAllBrands })(LandingPage);