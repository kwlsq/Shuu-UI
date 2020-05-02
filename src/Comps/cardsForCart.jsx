import React from 'react';
import '../CSS/cartpage.css';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import { API_URL_HEROKU } from '../Helpers/apiurl';

export default function CartCard(props) {
    return (
        <div className="cart-card-wrapper">
            <div>
                {props.index + 1}
            </div>
            <img
                src={API_URL_HEROKU + `${props.image}`}
                alt="profile pic"
                width="100%"
                height="auto"
                style={{ maxWidth: '150px' }} />
            <div className="cart-3rd-column">
                <div>{props.name} Size {props.size}</div>
                <div>Rp {new Intl.NumberFormat(['ban', 'id']).format(props.price)}</div>
            </div>
            <div>
                {/* <div>likes</div> */}
                <div>
                </div>
                <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => props.delete(props.p_id)}
                >
                    <DeleteIcon /></Button>
                <div>
                    <input
                        label="Quantity"
                        type='number'
                        min={1}
                        max={props.stock}
                        defaultValue={props.curQty}
                        onChange={(e) => props.chgQty(e.target.value, props.p_id, props.price)}
                        style={{ maxWidth: 70, marginLeft: 20 }}
                    />
                </div>
            </div>
        </div>
    )


}

