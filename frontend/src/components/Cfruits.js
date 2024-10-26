import React from 'react';
import SidebarCfruits from './SidebarCfruits';
import ViewAllFruits from './ViewAllFruits';

function Cfruits() {
    return (
        <div>
                <SidebarCfruits/>
                <div style={{ marginLeft: '17%', marginTop: '2px', padding: '1px 16px', height: '1000px', backgroundImage: 'linear-gradient(to right, #2E3192 , #1BFFFF)' }}>
                <h1 style={{ color: 'white' }}>FRUITS</h1>
                <hr/>
                <ViewAllFruits/>
                </div>
        </div>
    )
}

export default Cfruits