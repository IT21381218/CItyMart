import React from 'react';
import SidebarCmeatandfish from './SidebarCmeatandfish';    
import ViewAllMeatAndFish from './ViewAllMeatAndFish';

function Cmeatfish() {
    return (
        <div>
                <SidebarCmeatandfish/>
                <div style={{ marginLeft: '17%', marginTop: '2px', padding: '1px 16px', height: '1000px' }}>
                <h1> MEAT AND FISH </h1>
                <hr/>
                <ViewAllMeatAndFish/>
                </div>
        </div>
    )
}

export default Cmeatfish;