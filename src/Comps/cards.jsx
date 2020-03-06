import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import {
    Card, CardImg, CardBody,
    CardTitle, CardSubtitle
} from 'reactstrap';
import { API_URL_1 } from '../Helpers/apiurl';
import { showProductDetail } from '../Redux/Actions'
import '../CSS/card.css';


class CardComp extends React.Component {
    renderCardShowcase = () => {
        return this.props.products.map((item, index) => {
            return (
                <Card key={index} className="showcase-card" >
                    <Link to={`/detail?id=${item.id}`}>
                        <CardImg top width="100%" src={API_URL_1 + item.image} alt="Card image cap" />
                        <CardBody style={{ textAlign: "center" }}>
                            <CardTitle>{item.name}</CardTitle>
                            <CardSubtitle>{new Intl.NumberFormat(['ban', 'id']).format(item.price)}</CardSubtitle>
                        </CardBody>
                    </Link>
                </Card>
            )

        })
    }
    render() {
        return (
            <div className="showcase" >
                {this.renderCardShowcase()}
            </div>
        );

    }
}



const mapStateToProps = ({ products }) => {
    return { products: products.showcase, detail: products.productDetail }
}

export default connect(mapStateToProps, { showProductDetail })(CardComp);