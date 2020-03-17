import React from 'react';
import { connect } from 'react-redux'
import '../CSS/landingpage.css';
import '../CSS/card.css';
import Fade from 'react-reveal/Fade';
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
                <Fade bottom distance="50px" duration={1000}>
                    <div className="carousel-wrapper"><CarouselComp /></div>
                </Fade>
                <Fade bottom distance="50px" duration={1000}>
                    <div className="card-promo">
                        <div className="card-header">Promo</div>
                    </div>
                </Fade>
                <Fade bottom distance="50px" duration={1000}>
                    <div className="official-brands">
                        <div className="card-header">Official Stores</div>
                        <div >
                            <CarouselBrands />
                        </div>
                    </div>
                </Fade>
                <div className="showcase-wrapper">
                    <CardComp />
                </div>

            </div>
        );
    }
}


const mapStateToProps = ({ products }) => {
    return { products }
}

export default connect(mapStateToProps, { getAllBrands, showShowcaseProducts })(LandingPage);