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
                <div
                    key={index}
                    style={{
                        height: 160,
                        backgroundImage: `url(${API_URL_1 + item.profilepic})`,
                        backgroundSize: 'cover'
                    }}

                >
                    {item.name}
                </div>
            )
        })
    }
    return (
        <div style={{ padding: `0 0px` }}>
            <ItemsCarousel
                infiniteLoop
                requestToChangeActive={setActiveItemIndex}
                activeItemIndex={activeItemIndex}
                numberOfCards={6}
                gutter={10}
                leftChevron={<button>{'<'}</button>}
                rightChevron={<button>{'>'}</button>}
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