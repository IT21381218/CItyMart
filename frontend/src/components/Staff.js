import React from 'react';
import SidebarStaff from './SidebarStaff';
import { Link } from "react-router-dom";
import ViewAllStaff from './ViewAllStaff';

const Staff = () => {

    return(
        <div>
            <SidebarStaff/>
            <div style={{ marginLeft: '17%', marginTop: '2px', padding: '1px 16px', height: '1000px' }}>
                <h2>STAFF</h2>
                <hr />
                <ViewAllStaff/>
                </div>
        </div>
    )
}

export default Staff