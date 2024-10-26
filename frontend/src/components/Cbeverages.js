import React from 'react'
import SidebarCbeverages from './SidebarCbeverages';
import ViewAllBeverages from './ViewAllBeverages';

function Cbeverages() {
  return (
    <div>
            <SidebarCbeverages/>
            <div style={{ marginLeft: '17%', marginTop: '2px', padding: '1px 16px', height: '1000px' }}>
            <h1> BEVERAGES </h1>
            <hr/>
            <ViewAllBeverages/>
            </div>
    </div>
  )
}

export default Cbeverages