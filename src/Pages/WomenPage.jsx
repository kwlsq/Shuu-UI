import React from 'react';
import WomenPageCard from '../Comps/womenPageCards';
import '../CSS/genderpage.css';

class WomenPage extends React.Component {
    render() {
        return (
            <div className="gender-wrapper">
                <div className="gender-filter-wrapper">
                    filter
                </div>
                <WomenPageCard />
            </div>
        );
    }
}

export default WomenPage;