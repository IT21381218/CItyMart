import React from 'react';
import {useEffect, useState} from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import SidebarPayment from './SidebarPayment'
import ViewAllPayments from './ViewAllPayments';

const Payment = () => {

  return(
      <div>
          <SidebarPayment/>
          <div style={{ marginLeft: '17%', marginTop: '2px', padding: '1px 16px', height: '1000px' }}>
              <h2>Payments</h2>
              <hr />
              <ViewAllPayments/>
              </div>
      </div>
  )
}

export default Payment