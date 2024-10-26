import React from 'react';
import SidebarCgrocery from './SidebarCgrocery';
import ViewAllGrocery from './ViewAllGrocery';

function Cgrocery() {
    return (
        <div>
                <SidebarCgrocery/>
                <div style={{ marginLeft: '17%', marginTop: '2px', padding: '1px 16px', height: '1000px' }}>
                <h1> GROCERY </h1>
                <hr/>
                <ViewAllGrocery/>
                </div>
        </div>
    )
}

export default Cgrocery;