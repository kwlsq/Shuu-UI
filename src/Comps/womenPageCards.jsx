import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import {
    Card, CardImg, CardBody,
    CardTitle, CardSubtitle
} from 'reactstrap';
import { API_URL_1 } from '../Helpers/apiurl';
import {
    showProductDetail,
    getWomenProducts
} from '../Redux/Actions'
import Fade from 'react-reveal/Fade';
import '../CSS/genderpage.css';


class WomenPageCardComp extends React.Component {
    componentDidMount() {
        this.props.getWomenProducts()
    }
    renderCardShowcase = () => {
        return this.props.products.map((item, index) => {
            return (
                <Card key={index} className="showcase-card" >
                    <Fade bottom distance="100px" duration={500}>
                        <Link to={`/detail?id=${item.id}=${item.pn_id}`}>
                            <CardImg top width="100%" src={API_URL_1 + item.image} style={{ maxHeight: '200px' }} alt="Card image cap" />
                            <CardBody className="cardbody" >
                                <CardTitle>{item.name}</CardTitle>
                                <CardSubtitle>Rp {new Intl.NumberFormat(['ban', 'id']).format(item.price)}</CardSubtitle>
                            </CardBody>
                        </Link>
                    </Fade>
                </Card>
            )

        })
    }
    render() {
        return (
            <div className="gender-showcase" >
                {this.renderCardShowcase()}
            </div>
        );

    }
}



const mapStateToProps = ({ products }) => {
    return { products: products.showcase, detail: products.productDetail }
}

export default connect(mapStateToProps, {
    showProductDetail,
    getWomenProducts
})(WomenPageCardComp);