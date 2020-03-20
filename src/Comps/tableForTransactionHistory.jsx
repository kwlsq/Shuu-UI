import React from 'react';
import '../CSS/userprofilepage.css';
import moment from 'moment';


export default function TransactionTable(props) {
    return (
        <tr >
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
                        'Pending'
                        :
                        'Confirmed'
                }
            </td>
            <td>
                Rp {new Intl.NumberFormat(['ban', 'id']).format(props.payment)}
            </td>
            <td>
                {moment(props.date).format("YYYY-MM-DD")}
            </td>
        </tr>
    )


}

