import React, { useState, useEffect } from 'react';
import NavBar from './NavBar';
import MicNav from './MicNav';
import axios from 'axios';
import Footer from './Footer';
import "./styles/selectPayment.css";

const SelectPayment = () => {
    const [payments, setPayments] = useState([]);
    const [selectedPayment, setSelectedPayment] = useState(null);

    useEffect(() => {
        const fetchPayments = async () => {
            try {
                const response = await axios.get('http://localhost:5000/payment/');
                setPayments(response.data);
            } catch (error) {
                console.error('Error fetching payments:', error);
            }
        };

        fetchPayments();
    }, []);

    const handlePaymentSelection = (paymentId) => {
        setSelectedPayment(paymentId);
        alert(`Your payment method ${paymentId} is selected!`);
    };

    return (<div className='sp'>
        <div className="Contact">
            <NavBar />
            <MicNav />
            <div className="PaymentDetails"> {/* Apply PaymentDetails class */}
                <h2>Payment Details</h2>
                {payments.map(payment => (
                    <div className="PaymentItem" key={payment._id}> {/* Apply PaymentItem class */}
                        <input
                            type="checkbox"
                            id={payment.paymentId}
                            checked={selectedPayment === payment.paymentId}
                            onChange={() => handlePaymentSelection(payment.paymentId)}
                        />
                        <label htmlFor={payment.paymentId}>
                            <p><span>Payment ID:</span> {payment.paymentId}</p>
                            <p><span>Name:</span> {payment.name}</p>
                            <p><span>Description:</span> {payment.description}</p>
                            <p><span>Type:</span> {payment.paymentType}</p>
                            <p><span>Amount:</span> {payment.amount}</p>
                        </label>
                    </div>
                ))}
            </div>
            <Footer/>
        </div>
        </div>
    );
};

export default SelectPayment;
