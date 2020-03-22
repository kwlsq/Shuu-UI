import React, { useState } from 'react';
import { connect } from 'react-redux';
import { API_URL_1 } from '../Helpers/apiurl'
import ItemsCarousel from 'react-items-carousel';

export const CarouselBrands = (props) => {
    console.log(props.brands)
    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const chevronWidth = 40;
    const renderCardCarousel = () => {
        return props.brands.map((item, index) => {
            return (
                <div key={index}>
                    <img
                        alt='brands'
                        src={API_URL_1 + item.profilepic}
                        width='auto'
                        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingLeft: '20px' }}
                        height='200px'
                    />
                </div>

            )
        })
    }
    return (
        <div style={{ padding: `10px 0px`, borderRadius: '10px' }}>
            <ItemsCarousel
                infiniteLoop
                requestToChangeActive={setActiveItemIndex}
                activeItemIndex={activeItemIndex}
                numberOfCards={5}
                gutter={20}
                leftChevron={<button style={{ borderRadius: '30%', backgroundColor: '#22385c', color: 'white', textShadow: 'black', outline: 'none' }}>{'<'}</button>}
                rightChevron={<button style={{ borderRadius: '30%', backgroundColor: '#22385c', color: 'white', textShadow: 'black', outline: 'none' }}>{'>'}</button>}
                insideChevron
                chevronWidth={chevronWidth}
            >
                {renderCardCarousel()}
            </ItemsCarousel>
        </div>
    );
};

const mapStateToProps = ({ brands }) => {
    return { brands }
}

export default connect(mapStateToProps)(CarouselBrands);