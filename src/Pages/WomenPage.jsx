import React from 'react';
import WomenPageCard from '../Comps/womenPageCards';
import '../CSS/genderpage.css';

class WomenPage extends React.Component {
    render() {
        return (
            <div className="gender-wrapper">
                <WomenPageCard />
            </div>
        );
    }
}

export default WomenPage;