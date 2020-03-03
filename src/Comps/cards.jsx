import React from 'react';
import { connect } from 'react-redux'
import {
    Card, CardImg, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import { API_URL_1 } from '../Helpers/apiurl';
import '../CSS/card.css';


const CardComp = (props) => {
    console.log(props.products)
    const renderCardShowcase = () => {
        return props.products.map((item, index) => {
            return (
                <Card key={index} className="showcase-card">
                    <CardImg top width="100%" src={API_URL_1 + item.image} alt="Card image cap" />
                    <CardBody style={{ textAlign: "center" }}>
                        <CardTitle>{item.name}</CardTitle>
                        <CardSubtitle>{new Intl.NumberFormat(['ban', 'id']).format(item.price)}</CardSubtitle>
                        <Button>Add to Cart</Button>
                    </CardBody>
                </Card>
            )

        })
    }

    return (
        <div className="showcase">
            {renderCardShowcase()}
        </div>
    );
};

const mapStateToProps = ({ products }) => {
    return { products }
}

export default connect(mapStateToProps)(CardComp);