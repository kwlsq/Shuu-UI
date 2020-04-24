import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { API_URL_1 } from '../Helpers/apiurl';
import { adminConfirmation } from '../Redux/Actions';

class TableTransaction extends React.Component {
    renderTableTransaction = () => {
        console.log(this.props.transaction)
        return this.props.transaction.map((item, index) => {
            return (
                <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.username}</td>
                    {
                        item.delivery_status === 0
                            ?
                            <td style={{ color: "red" }}>On Process</td>
                            :
                            <td style={{ color: "lightgreen" }}>Delivered</td>
                    }
                    {
                        item.admin_confirmation === 0
                            ?
                            <td style={{ color: "red" }}>On Process</td>
                            :
                            <td style={{ color: "lightgreen" }}>Confirmed</td>
                    }
                    <td>{moment(item.transaction_date).format('MMMM Do YYYY, h:mm:ss a')}</td>
                    <td>Rp {new Intl.NumberFormat(['ban', 'id']).format(item.total_price)}</td>
                    <td>
                        <img
                            src={API_URL_1 + `${item.payment_receipt}`}
                            alt="payment receipt"
                            width="100%"
                            height="auto"
                            style={{ maxWidth: '150px' }} />
                    </td>
                    <td>
                        <button onClick={() => this.props.adminConfirmation(item.t_id)}>Confirm</button>
                    </td>
                </tr>
            )
        })
    }
    render() {
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Username</th>
                            <th>Delivery Status</th>
                            <th>Confirmation</th>
                            <th>Transaction Date</th>
                            <th>Total_price</th>
                            <th>Payment Receipt</th>
                            <th>Confirm</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderTableTransaction()}
                    </tbody>
                </table>
            </div >
        )
    }
}

const mapStatetoProps = ({ adminPage }) => {
    return { transaction: adminPage.tableTransaction }
}

export default connect(mapStatetoProps, { adminConfirmation })(TableTransaction);