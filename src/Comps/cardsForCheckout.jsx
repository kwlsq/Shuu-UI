import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import { API_URL_1 } from '../Helpers/apiurl';
import '../CSS/checkoutpage.css';

export default function CardCheckout(props) {
    return (
        <div className="card-checkout-wrapper">
            <div style={{ display: 'flex', width: '5%', justifyContent: 'center' }}>
                {props.index + 1}
            </div>
            <img
                src={API_URL_1 + `${props.image}`}
                alt="profile pic"
                width="100%"
                height="auto"
                style={{ display: 'flex', width: '20%', justifyContent: 'center' }}
            />
            <div style={{ display: 'flex', width: '30%', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
                <div>{props.name}</div>
                <div>Rp {new Intl.NumberFormat(['ban', 'id']).format(props.price)} /pcs</div>
                <div>Total Weight : {props.weight} gr</div>
            </div>
            <div style={{ display: 'flex', width: '45%', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                <div>
                    <div>Shipment to: {props.city}</div>
                    <div>
                        <FormControl style={{ minWidth: 120 }}>
                            <select
                                defaultValue="DEFAULT"
                                onChange={(e) => props.chooseCourier(props.origin, props.destination, props.weight, e.target.value, props.id)}
                            >
                                <option disabled value='DEFAULT'>Choose Courier</option>
                                <option value='jne'>JNE</option>
                                <option value='pos'>POS</option>
                                <option value='tiki'>TIKI</option>
                            </select>
                        </FormControl>
                    </div>

                </div>
            </div>
        </div>
    )


}

