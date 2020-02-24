import React from 'react';
import Drawer from '../Comps/drawerAdmin';
import TableUser from '../Comps/tableUser';
import '../CSS/adminpage.css';

class AdminPage extends React.Component {
    render() {
        return (
            <div className="admin-page-wrapper">
                ini halaman Admin
                <Drawer />
                <TableUser></TableUser>

            </div>
        )
    }
}

export default AdminPage;