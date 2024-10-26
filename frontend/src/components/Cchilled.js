import React from 'react';
import SidebarCchilled from './SidebarCchilled';
import ViewAllChilled from './ViewAllChilled';

function Cchilled() {
    return (
        <div>
                <SidebarCchilled/>
                <div style={{ marginLeft: '17%', marginTop: '2px', padding: '1px 16px', height: '1000px' }}>
                <h1> CHILLED </h1>
                <hr/>
                <ViewAllChilled/>
                </div>
        </div>
    )
}

export default Cchilled;