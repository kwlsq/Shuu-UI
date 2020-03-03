import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import '../CSS/table.css'


class TableUser extends React.Component {
    renderTableUser = () => {
        var x = this.props.tableAdmin
        console.log('ini table', x)
        return this.props.tableAdmin.map((item, index) => {
            return (
                <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.username}</td>
                    <td>{item.email}</td>
                    {
                        item.verified
                            ?
                            <td style={{ backgroundColor: "lightgreen" }}></td>
                            :
                            <td style={{ backgroundColor: "red" }}></td>
                    }
                    <td>{moment(item.createdat).format("YYYY-MM-DD")}</td>
                    <td>{item.role}</td>
                </tr>
            )
        })
    }
    render() {
        return (
            <div className="table-user">
                <table>
                    <tr>
                        <th>No.</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Verified</th>
                        <th>Created At</th>
                        <th>Role</th>
                    </tr>
                    {this.renderTableUser()}
                </table>
            </div>
        )
    }
}

const mapStatetoProps = ({ tableAdmin }) => {
    return { tableAdmin }
}

export default connect(mapStatetoProps)(TableUser);