// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import SideBarMenu from "./SideBarMenu";
// import feedback from './images/feedback.png';
// import staff from './images/staff.png';
// import categories from './images/categories.png';

// function Home() {
//     const [productCount, setProductCount] = useState(0);
//     const [staffCount, setStaffCount] = useState(0);
//     const [feedbackCount, setFeedbackCount] = useState(0);

//     useEffect(() => {
//         fetchCounts();
//     }, []);

//     const fetchCounts = async () => {
//         try {
//             const productResponse = await axios.get('http://localhost:5000/product/getProductCount');
//             setProductCount(productResponse.data);

//             const staffResponse = await axios.get('http://localhost:5000/staff/getStaffCount');
//             setStaffCount(staffResponse.data);

//             const feedbackResponse = await axios.get('http://localhost:5000/feedback/getFeedbackCount');
//             setFeedbackCount(feedbackResponse.data);
//         } catch (error) {
//             console.error('Error fetching counts:', error);
//         }
//     }

//     return (
//         <div>
//             <SideBarMenu />
//             <div style={{ marginLeft: '17%', marginTop: '2px', padding: '1px 16px', height: '1000px' }}>
//                 <h2>DASHBOARD</h2>
//                 <hr />
//                 <div className="row" style={{ marginTop: '200px' }}>
//                     <div style={{ display: 'flex', justifyContent: 'center' }}>
//                         <div className="column">
//                             <a href="/categories" style={{ textDecoration: 'none' }}>
//                                 <img src={categories} alt="categories" style={{ width: '50%', padding: '2px 2px' }} />
//                                 <figcaption style={{ color: 'red' }}> Categories </figcaption>
//                                 <div className="dashname" style={{ backgroundColor: 'red', height: '25%' }}> <b> {productCount} </b> </div>
//                             </a>
//                         </div>
//                         <div className="column">
//                             <a href="/staff" style={{ textDecoration: 'none' }}>
//                                 <img src={staff} alt="promotions" style={{ width: '50%', padding: '2px 2px' }} />
//                                 <figcaption style={{ color: '#F0AD4E' }}> Staff </figcaption>
//                                 <div className="dashname" style={{ backgroundColor: '#ff9500', height: '25%' }}> <b> {staffCount} </b> </div>
//                             </a>
//                         </div>
//                         <div className="column">
//                             <a href="/feedbacks" style={{ textDecoration: 'none' }}>
//                                 <img src={feedback} alt="reviews" style={{ width: '50%', padding: '2px 2px' }} />
//                                 <figcaption style={{ color: '#00c400' }}> Feedbacks </figcaption>
//                                 <div className="dashname" style={{ backgroundColor: '#00c400', height: '25%' }}> <b> {feedbackCount} </b> </div>
//                             </a>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Home;



import React, { useEffect, useState } from "react";
import axios from "axios";
import SideBarMenu from "./SideBarMenu";
import feedback from './images/feedback.png';
import staff from './images/staff.png';
import categories from './images/categories.png';
import payment from './images/payment.png';

function Home() {
    const [productCount, setProductCount] = useState(0);
    const [staffCount, setStaffCount] = useState(0);
    const [feedbackCount, setFeedbackCount] = useState(0);
    const [paymentCount, setPaymentCount] = useState(5);

    useEffect(() => {
        fetchCounts();
    }, []);

    const fetchCounts = async () => {
        try {
            const productResponse = await axios.get('http://localhost:5000/product/getProductCount');
            setProductCount(productResponse.data);

            const staffResponse = await axios.get('http://localhost:5000/staff/getStaffCount');
            setStaffCount(staffResponse.data);

            const feedbackResponse = await axios.get('http://localhost:5000/feedback/getFeedbackCount');
            setFeedbackCount(feedbackResponse.data);

            const paymentResponse = await axios.get('http://localhost:5000/payment/getPaymentCount');
            setPaymentCount(paymentResponse.data);
        } catch (error) {
            console.error('Error fetching counts:', error);
        }
    }

    return (
        <div>
            <SideBarMenu />
            <div style={{ marginLeft: '17%', marginTop: '2px', padding: '1px 16px', height: '1000px' }}>
                <h2>DASHBOARD</h2>
                <hr />
                <div className="row" style={{ marginTop: '200px' }}>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <div className="column">
                            <a href="/categories" style={{ textDecoration: 'none' }}>
                                <img src={categories} alt="categories" style={{ width: '50%', padding: '2px 2px' }} />
                                <figcaption style={{ color: 'red' }}> Categories </figcaption>
                                <div className="dashname" style={{ backgroundColor: 'red', height: '25%' }}> <b> {productCount} </b> </div>
                            </a>
                        </div>
                        <div className="column">
                            <a href="/staff" style={{ textDecoration: 'none' }}>
                                <img src={staff} alt="promotions" style={{ width: '50%', padding: '2px 2px' }} />
                                <figcaption style={{ color: '#F0AD4E' }}> Staff </figcaption>
                                <div className="dashname" style={{ backgroundColor: '#ff9500', height: '25%' }}> <b> {staffCount} </b> </div>
                            </a>
                        </div>
                        <div className="column">
                            <a href="/feedbacks" style={{ textDecoration: 'none' }}>
                                <img src={feedback} alt="reviews" style={{ width: '50%', padding: '2px 2px' }} />
                                <figcaption style={{ color: '#00c400' }}> Feedbacks </figcaption>
                                <div className="dashname" style={{ backgroundColor: '#00c400', height: '25%' }}> <b> {feedbackCount} </b> </div>
                            </a>
                        </div>
                        <div className="column">
                            <a href="/payment" style={{ textDecoration: 'none' }}>
                                <img src={payment} alt="payment" style={{ width: '50%', padding: '2px 2px' }} />
                                <figcaption style={{ color: '#1803fc' }}> Payments </figcaption>
                                <div className="dashname" style={{ backgroundColor: '#1803fc', height: '25%' }}> <b> {paymentCount} </b> </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;
