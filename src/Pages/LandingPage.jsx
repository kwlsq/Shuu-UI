import React from 'react';
import { connect } from 'react-redux';
import { keepLogin } from '../Redux/Actions';
import '../CSS/landingpage.css';
import CarouselComp from '../Comps/carousel';
import FeatureBar from '../Comps/featureBar';

class LandingPage extends React.Component {
    state = {  }

    componentDidMount() {
        this.props.keepLogin()
    }
    render() { 
        return (  
            <div className="landingpage-grid">
                <FeatureBar/>
                <div className="carousel-wrapper"><CarouselComp/></div>
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

const mapStateToProps = (state) => {
    return {
        token:state.user.token
    }
}
export default connect(mapStateToProps, { keepLogin})(LandingPage);