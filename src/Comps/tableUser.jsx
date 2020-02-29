import React from 'react';
import { connect } from 'react-redux';
import { getUsersData } from '../Redux/Actions';
import '../CSS/table.css'


class TableUser extends React.Component {
    componentDidMount() {
        this.props.getUsersData()
    }
    renderTableUser = () => {

        console.log(this.props.user.tableUser)
        if (this.props.user.tableUser) {

            return this.props.user.tableUser.map((item, index) => {
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
                        <td>{item.createdat}</td>
                        <td>{item.role}</td>
                    </tr>
                )
            })
        }
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

const mapStatetoProps = ({ user }) => {
    return { user }
}

export default connect(mapStatetoProps, { getUsersData })(TableUser);