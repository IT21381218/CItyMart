// import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
// import React from 'react';
// import './App.css';
// import Home from './components/Home';
// import Category from './components/Category';
// import Cvegetables from './components/Cvegetables';
// import Cfruits from './components/Cfruits';
// import Cbeverages from './components/Cbeverages';
// import Cchilled from './components/Cchilled';
// import Cmeatfish from './components/Cmeatfish';
// import Cgrocery from './components/Cgrocery';
// import Feedback from './components/Feedback';
// import Staff from './components/Staff';
// import AddStaff from './components/AddStaff';
// import UpdateStaffMember from './components/UpdateStaffMember';
// import SendMessage from './components/SendMessage';
// import UpdateProduct from './components/UpdateProduct';
// import AddProduct from './components/AddProduct';
// import ViewAllProduct from './components/ViewAllProduct';

// //poornaka
// import { ItemContextProvider } from './components/Poornaka/components/context/ItemContext';
// import CustHome from './components/Poornaka/components/CustHome';
// import Contact from './components/Poornaka/components/Contact';
// import AddFeedback from './components/Poornaka/components/Feedback';
// import DisplayFeedback from './components/Poornaka/components/DisplayFeedback';
// import MainHome from './components/Poornaka/components/MainHome'



// function App() {
//   return (
//     <div>
//         <Router>
//                     <ItemContextProvider> 
//           <Routes>   
//             {/* entrance */}
//           {/* login */}
//           <Route path="/admin" element={<Home/>} />  

//           {/* dashboard  */}
//           <Route path="/categories" element={<Category/>} />
//           <Route path="/staff" element={<Staff/>} />
//           <Route path="/feedbacks" element={<Feedback/>} />

//           {/* category  */}
//           <Route path="/vegetables" element={<Cvegetables/>} />
//           <Route path="/fruits" element={<Cfruits/>} />
//           <Route path="/beverages" element={<Cbeverages/>} />
//           <Route path="/chilled" element={<Cchilled/>} />
//           <Route path="/meatandfish" element={<Cmeatfish/>} />
//           <Route path="/grocery" element={<Cgrocery/>} />
            
//             {/* product  */}
//           <Route path='/addProduct' element={<AddProduct/>} /> 
//           <Route path="/allproduct" element={<ViewAllProduct/>} />  
//           <Route path="/updateproduct/:id" element={<UpdateProduct/>} />  

//           {/* staff  */}
//           <Route path="/addStaff" element={<AddStaff/>} />
//           <Route path="/updatestaff/:id" element={<UpdateStaffMember/>} />

//           {/* feedback */}
//           <Route path="/sent" element={<SendMessage/>} />

//           {/* poornaka */}\
//           <Route path='/add/items' element={<CustHome />}/>
//           <Route path='/' element={<MainHome />}/>
//           <Route path='/contact' element={<Contact />}/>
//           <Route path='/add/feedback' element={<AddFeedback/>}/>
//           <Route path='/list/feedback' element={<DisplayFeedback/>}/>

//           </Routes>
//           </ItemContextProvider> 
//         </Router>
//       </div>
//   );
// }

// export default App;


import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import React from 'react';
import './App.css';
import Home from './components/Home';
import Category from './components/Category';
import Cvegetables from './components/Cvegetables';
import Cfruits from './components/Cfruits';
import Cbeverages from './components/Cbeverages';
import Cchilled from './components/Cchilled';
import Cmeatfish from './components/Cmeatfish';
import Cgrocery from './components/Cgrocery';
import Feedback from './components/Feedback';
import Staff from './components/Staff';
import AddStaff from './components/AddStaff';
import UpdateStaffMember from './components/UpdateStaffMember';
import SendMessage from './components/SendMessage';
import UpdateProduct from './components/UpdateProduct';
import AddProduct from './components/AddProduct';
import ViewAllProduct from './components/ViewAllProduct';

//poornaka
import { ItemContextProvider } from './components/Poornaka/components/context/ItemContext';
import CustHome from './components/Poornaka/components/CustHome';
import SelectPayment from './components/Poornaka/components/SelectPayment';
import AddFeedback from './components/Poornaka/components/Feedback';
import DisplayFeedback from './components/Poornaka/components/DisplayFeedback';
import MainHome from './components/Poornaka/components/MainHome'

import Payment from './components/Payment';
import AddPayment from './components/AddPayment';
import UpdatePayment from './components/UpdatePayment';
import ViewAllPayments from './components/ViewAllPayments';


function App() {
  return (
    <div>
        <Router>
                    <ItemContextProvider> 
          <Routes>   
            {/* entrance */}
          {/* login */}
          <Route path="/admin" element={<Home/>} />  

          {/* dashboard  */}
          <Route path="/categories" element={<Category/>} />
          <Route path="/staff" element={<Staff/>} />
          <Route path="/feedbacks" element={<Feedback/>} />

          {/* category  */}
          <Route path="/vegetables" element={<Cvegetables/>} />
          <Route path="/fruits" element={<Cfruits/>} />
          <Route path="/beverages" element={<Cbeverages/>} />
          <Route path="/chilled" element={<Cchilled/>} />
          <Route path="/meatandfish" element={<Cmeatfish/>} />
          <Route path="/grocery" element={<Cgrocery/>} />
            
            {/* product  */}
          <Route path='/addProduct' element={<AddProduct/>} /> 
          <Route path="/allproduct" element={<ViewAllProduct/>} />  
          <Route path="/updateproduct/:id" element={<UpdateProduct/>} />  

          {/* staff  */}
          <Route path="/addStaff" element={<AddStaff/>} />
          <Route path="/updatestaff/:id" element={<UpdateStaffMember/>} />

          {/* feedback */}
          <Route path="/sent" element={<SendMessage/>} />

          {/* poornaka */}\
          <Route path='/add/items' element={<CustHome />}/>
          <Route path='/' element={<MainHome />}/>
          <Route path='/SelectPaymentUser' element={<SelectPayment />}/>
          <Route path='/add/feedback' element={<AddFeedback/>}/>
          <Route path='/list/feedback' element={<DisplayFeedback/>}/>

          <Route path='/payment' element={<Payment/>} /> 
          <Route path='/addPayment' element={<AddPayment/>} /> 
          <Route path="/allPayments" element={<ViewAllPayments/>} />  
          <Route path="/updatePayment/:id" element={<UpdatePayment/>} />

          </Routes>
          </ItemContextProvider> 
        </Router>
      </div>
  );
}

export default App;


