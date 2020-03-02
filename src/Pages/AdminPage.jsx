import React from 'react';
import Drawer from '../Comps/drawerAdmin';
import TableUser from '../Comps/tableUser';
import { connect } from 'react-redux';
import { getUsersData } from '../Redux/Actions';
import '../CSS/adminpage.css';

class AdminPage extends React.Component {
    componentDidMount() {
        this.props.getUsersData()
    }
    render() {
        return (
            <div className="admin-page-wrapper">
                <Drawer />
                <TableUser>

                </TableUser>

            </div>
        )
    }
}



export default connect(null, { getUsersData })(AdminPage);