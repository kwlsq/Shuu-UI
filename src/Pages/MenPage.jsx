import React from 'react';
import MenPageCard from '../Comps/menPageCards';
import '../CSS/genderpage.css';


class MenPage extends React.Component {
    render() {
        return (
            <div className="gender-wrapper">
                <div className="gender-filter-wrapper">
                    filter
                </div>
                <MenPageCard />
            </div>
        );
    }
}

export default MenPage;