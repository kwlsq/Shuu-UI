import React from 'react';
import '../CSS/userprofilepage.css';
import moment from 'moment';


export default function TransactionTable(props) {
    return (
        <tr>
            <td>
                {props.index + 1}
            </td>
            <td>
                {
                    props.delivery === 0
                        ?
                        'On Progress'
                        :
                        'Delivered'
                }
            </td>
            <td>
                {
                    props.confirmation === 0
                        ?
                        'On Progress'
                        :
                        'Confirmed'
                }
            </td>
            <td>
                Rp {new Intl.NumberFormat(['ban', 'id']).format(props.payment)}
            </td>
            <td>
                {moment(props.date).format('MMMM Do YYYY, h:mm:ss a')}
            </td>
            <td>
                <button onClick={() => props.getTransactionDetail(props.id)}>Open</button>
            </td>
        </tr>
    )


}

