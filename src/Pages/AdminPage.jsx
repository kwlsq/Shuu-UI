import React from 'react';
import TableUser from '../Comps/tableUser';
import TableTransaction from '../Comps/tableAdminTransaction';
import { connect } from 'react-redux';
import {
    getUsersData,
    openTableUser,
    openTableTransaction,
    getAllTransactions
} from '../Redux/Actions';
import '../CSS/adminpage.css';

class AdminPage extends React.Component {
    componentDidMount() {
        this.props.getUsersData()
        this.props.getAllTransactions()
    }
    render() {
        return (
            <div className="admin-page-wrapper">
                <div className="left-nav-wrapper">
                    Menu
                    <button onClick={this.props.openTableUser}>Table Users</button>
                    <button onClick={this.props.openTableTransaction}>Transaction History</button>
                </div>
                <div className="table-user-wrapper">
                    {
                        this.props.adminPage.openTableUser
                            ?
                            <TableUser />
                            :
                            <div />
                    }
                    {
                        this.props.adminPage.openTableTransaction
                            ?
                            <TableTransaction />
                            :
                            <div />
                    }
                </div>


            </div>
        )
    }
}

const mapStateToProps = ({ adminPage }) => {
    return { adminPage }
}


export default connect(mapStateToProps, {
    getUsersData,
    openTableUser,
    openTableTransaction,
    getAllTransactions
})(AdminPage);