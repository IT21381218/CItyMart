import React from "react";
import './css/admindash/admindash.css';
import './css/admindash/navbar.css';
import proImg from './images/marsh.gif';

const SidebarFeedback = () => {
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
              <a href="/categories" className="active"> Categories </a>
            </li>
            <li>
              <a href="/staff"> Staff </a>
            </li>
            <li>
              <a href="/feedbacks"> Feedbacks </a>
            </li> 
            <li style={{ marginTop: '277px' , textAlign: 'center', fontSize: '24px'}} className="bg-danger bg-gradient">
              <a href="/"> <b> LOGOUT </b> </a>
            </li> 
            </ul>
        </div>
      );
};

export default SidebarFeedback;