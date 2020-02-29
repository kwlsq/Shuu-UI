import React from 'react';
import '../CSS/draweradmin.css';

class TableUser extends React.Component {
    render() {
        return (
            <div className="drawer-wrapper">
                <button>Table Users</button>
                <button>Table Stores</button>
                <button>Table Products</button>
            </div>
        )
    }
}

export default TableUser;