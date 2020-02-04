import React from 'react';
import '../CSS/featureBar.css';

class FeatureBar extends React.Component {
    render() {
        return (
            <div className="feature-wrapper">
                <div className="feature-bar"> Top Selling</div>
                <div className="feature-bar"> Most Liked</div>
                <div className="feature-bar"> Influencers</div>
                <div className="feature-bar"> Stores</div>
            </div>
        );
    }
}

export default FeatureBar;