import React from 'react';
import '../CSS/landingpage.css';
import CarouselComp from '../Comps/carousel';
import FeatureBar from '../Comps/featureBar';

class LandingPage extends React.Component {
    state = {}

    render() {
        return (
            <div className="landingpage-grid">
                <FeatureBar />
                <div className="carousel-wrapper"><CarouselComp /></div>
                <div className="card-promo">
                    <div className="card-header">Promo!</div>

                </div>
                <div className="upcoming-events">
                    <div className="card-header">Event !</div>
                </div>
            </div>
        );
    }
}

export default (LandingPage);