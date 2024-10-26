import React from "react";
import './css/admindash/admindash.css';
import './css/admindash/navbar.css';
import proImg from './images/marsh.gif';

function SidebarCmeatandfish() {
    return (
        <div className="leftnav">
          <ul>
            <div className="pr">
              <a src href="/home">
                <img src={proImg} title="profile" alt="profile" id="profilelogo" />
              </a>
              <div id="profname">
                <b>Admin</b>
              </div>
            </div>
            <li>
              <a href="/admin"> Dashboard </a>
            </li>
            <li>
              <a href="/vegetables"> Vegetables </a>
            </li>
            <li>
              <a href="/meatandfish"  className="active"> Meat and Fish </a>
            </li>
            <li>
              <a href="/chilled"> Chilled </a>
            </li> 
            <li>
              <a href="/fruits"> Fruits </a>
            </li> 
            <li>
              <a href="/grocery"> Grocery </a>
            </li> 
            <li>
              <a href="/beverages"> Beverages </a>
            </li> 
            <li style={{ marginTop: '133px' , textAlign: 'center', fontSize: '24px'}} className="bg-danger bg-gradient">
              <a href="/"> <b> LOGOUT </b> </a>
            </li> 
            </ul>
        </div>
      );
}

export default SidebarCmeatandfish;