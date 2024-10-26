import React, {useState} from "react";
import axios from "axios";
import SidebarPayment from "./SidebarPayment";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function AddPayment() {

    const [paymentId, setPaymentId] = useState("");
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [paymentType, setPaymentType] = useState({paymentType: ''});
    const [amount, setAmount] =useState("");
    const [errors,setError] = useState("");  

    function sendData(e) {
        e.preventDefault();

        if(paymentId.length === 0 || name.length === 0 || description.length === 0 || paymentType.length === 0 || amount.length === 0){
            setError(true);
        }
        else{
            const newPayment = {
                paymentId,
                name,
                description,
                paymentType,
                amount
            } 
            axios
            .post("http://localhost:5000/payment/add", newPayment)
            .then((response) => {
                if (response.status === 200) {
                    alert("Payment added successfully.");
                    // Reset the form fields after successful submission
                    setPaymentId("");
                    setName("");
                    setDescription("");
                    setPaymentId("");
                    setAmount("");
                    window.location.href = '/payment';
                }
            })
            .catch((err) => {
                if (err.response.status === 400 && err.response.data.message === "Payment with this email already exists.") {
                    // Prompt a message when the Payment already exists
                    alert("Payment with this email already exists. Cannot insert.");
                } else if (err.response.status === 400 && err.response.data.message === "Payment with this nic already exists.") {
                    // Prompt a message when the Payment already exists
                    alert("Payment with this nic already exists. Cannot insert.");
                } else {
                    alert("Error: " + err.response.data.message);
                }
            });
        }
    }

    return(
        <div>
            <SidebarPayment/>
            <div style={{ marginLeft: '17%', marginTop: '2px', padding: '1px 16px', height: '1000px' }}>
                <ToastContainer></ToastContainer>
                <h1> ADD PAYMENT </h1>
                <hr/>
                <form action=" ">
                    <div class="mb-3">
                        <label for="name" class="form-label" > <b> Payment ID </b> </label>
                        <input type="text" class="form-control" id="name" aria-describedby="nameHelp" onChange={(e)=>{
                            setPaymentId(e.target.value);
                        }} required />
                        {errors&&paymentId.length<=0?<label className="validation-label" style={{ color: 'red' }}>PaymentId cannot be empty</label>:""}
                    </div>
                    <div class="mb-3">
                        <label for="name" class="form-label" > <b> Name </b> </label>
                        <input type="text" class="form-control" id="name" aria-describedby="nameHelp" onChange={(e)=>{
                            setName(e.target.value);
                        }} required />
                        {errors&&name.length<=0?<label className="validation-label" style={{ color: 'red' }}>Name cannot be empty</label>:""}
                    </div>
                    <div class="mb-3">
                        <label for="name" class="form-label" >  <b> Description </b> </label>
                        <input type="text" class="form-control" id="name" aria-describedby="nameHelp" onChange={(e)=>{
                            setDescription(e.target.value);
                        }} required />
                    </div>
                    <div class="mb-4">
                        <label for="name" class="form-label" > <b> Payment Type </b> </label>
                        <select id="PaymentType" class="form-control" name="paymentType" value={paymentType.paymentType} onChange={(e)=>{
                            setPaymentType(e.target.value);
                        }} required>
                            <option value="">Select Payment Type </option>
                            <option value="cash"> Cash </option>
                            <option value="visa"> VISA </option>
                            <option value="mastercard"> MASTERCARD </option>
                        </select>
                    </div>
                    <div class="mb-3">
                        <label for="name" class="form-label" > <b> Amount </b> </label>
                        <input type="number" class="form-control" id="name" aria-describedby="nameHelp" onChange={(e)=>{
                            setAmount(e.target.value);
                        }} required />
                        {errors&&amount.length<=0?<label className="validation-label" style={{ color: 'red' }}>Amount cannot be empty</label>:""}
                    </div>
                    <button type="submit" class="btn btn-primary" onClick={sendData}> Add Payment </button>
                </form>
            </div>
        </div>    
    )
}