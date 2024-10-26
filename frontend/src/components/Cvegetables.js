import React from 'react';
import SidebarCvegetables from './SidebarCvegetables';
import ViewAllVegetables from './ViewAllVegetables';    

function Cvegetables() {
    return (
        <div>
                <SidebarCvegetables/>
                <div style={{ marginLeft: '17%', marginTop: '2px', padding: '1px 16px', height: '1000px' }}>
                <h1> VEGETABLES </h1>
                <hr/>
                <ViewAllVegetables/>
                </div>
        </div>
    )
}

export default Cvegetables


