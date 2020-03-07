import React from 'react';
import '../CSS/featureBar.css';
import Fade from 'react-reveal/Fade';

class FeatureBar extends React.Component {
    render() {
        return (
            <Fade bottom cascade duration={1000} distance="50px">
                <div className="feature-wrapper">
                    <div className="feature-bar"> Top Selling</div>
                    <div className="feature-bar"> Most Liked</div>
                    <div className="feature-bar"> Influencers</div>
                    <div className="feature-bar"> Stores</div>
                </div>
            </Fade>
        );
    }
}

export default FeatureBar;