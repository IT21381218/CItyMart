import React, {useState, useEffect}from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import SidebarPayment from "./SidebarPayment";

export default function UpdatePayment(){
 
    const [payment, setPayment] = useState({});
    const [loading, setLoading] = useState(true);
    const [paymentId, setPaymentId] = useState("");
    const [name, setName] = useState("");   
    const [description, setDescription] = useState("");
    const [paymentType, setPaymentType] = useState('Initial Value');
    const [amount, setAmount] = useState("");
    const params = useParams();
    const payId = params.id;

    useEffect(() => {
        async function Getid(){
            try {
                setLoading(true);
                const res = await axios.get(`http://localhost:5000/payment/${payId}`)
                setPayment(res.data);
                console.log(res.data);
                setPaymentId(res.data.paymentId);
                setName(res.data.name);
                setDescription(res.data.description);
                setPaymentType(res.data.paymentType);
                setAmount(res.data.amount);
                setLoading(false);
            } catch(err){
                setLoading(false);
                alert(err.message); 
            }
        }
        Getid();
    }, [payId])

    function handleSubmit(e) {
        e.preventDefault();
        const updatedPayment = {
            paymentId,
            name,
            description,
            paymentType,
            amount  
        }
        
        axios.put(`http://localhost:5000/payment/update/${payId}`, updatedPayment)
            .then(() => {
                alert("Payment updated");
                window.location.href = '/payment';
            }).catch((err) => {
                alert(err);
            })
            .catch((err) => {
                alert(err);
            });
    }

    return(
        <div>
            <SidebarPayment/>
            <div style={{ marginLeft: '17%', marginTop: '2px', padding: '1px 16px', height: '1000px' }}>
                <h1> UPDATE Payment </h1>
                <hr/>
                    {loading ? (
                        <div>Loading...</div>

                    ) : (payment && Object.keys(payment).length !== 0 ? (
                            <form onSubmit={handleSubmit}>
                            <div class="mb-3">
                                <label for="name1" class="form-label" > <b> Payment ID </b> </label>
                                <input type="text" class="form-control" id="name1" placeholder={paymentId} 
                                 value={payment.name1} onChange={(e)=>{setPaymentId(e.target.value);}} />
                            </div>

                            <div class="mb-3">
                                <label for="name2" class="form-label" > <b> Name </b> </label>
                                <input type="text" class="form-control" id="name2" placeholder={name} 
                                 value={payment.name2} onChange={(e)=>{setName(e.target.value);}} />
                            </div>

                            <div class="mb-3">
                                <label for="name3" class="form-label" >  <b> Description </b> </label>
                                <input type="text" class="form-control" id="name3" placeholder={description} 
                                value={payment.name3} onChange={(e)=>{setDescription(e.target.value)}}  />
                            </div>

                            <div class="mb-4">
                                <label for="paymentType" class="form-label" > <b> PaymentType </b> </label>
                                <select id="paymentType" class="form-control" name="paymentType" placeholder={paymentType} 
                                value={paymentType} onChange={(e) => {setPaymentType(e.target.value);}}>
                                    <option value="cash"> Cash </option>
                                    <option value="visa"> VISA </option>
                                    <option value="mastercard"> MASTERCARD </option>
                                </select>
                            </div>

                            <div class="mb-3">
                                <label for="name4" class="form-label" > <b> Amount </b> </label>
                                <input type="text" class="form-control" id="name4" placeholder={amount}  
                                value={payment.name4} onChange={(e)=>{setAmount(e.target.value);}} />
                            </div>
                            
                            <button type="submit" className="btn btn-primary">Update</button>
                            
                            </form>
                        ) : (
                            <div>Loading...</div>
                    ))}    
            </div>
        </div>
    )
}