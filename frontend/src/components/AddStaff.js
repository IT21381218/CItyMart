import React, {useState} from "react";
import axios from "axios";
import SidebarStaff from "./SidebarStaff";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function AddStaff() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [nic, setNic] =useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState({gender: ''});
    const [employee_type, setEmployee_type] = useState({employee_type: ''});  
    const [errors,setError] = useState("");  

    function sendData(e) {
        e.preventDefault();

    if(name.length === 0 || email.length === 0 || nic.length === 0 || age.length === 0|| gender.length === 0 ||employee_type.length === 0){
        setError(true);
    }
    else{
        const newStaff = {
            name,
            email,
            nic,
            age,
            gender,
            employee_type
        } 
        axios
        .post("http://localhost:5000/staff/add", newStaff)
        .then((response) => {
            if (response.status === 200) {
                alert("Staff added successfully.");
                // Reset the form fields after successful submission
                setName("");
                setEmail("");
                setNic("");
                setAge("");
                setGender("");
                setEmployee_type("");
                window.location.href = '/staff';
            }
        })
        .catch((err) => {
            if (err.response.status === 400 && err.response.data.message === "Staff with this email already exists.") {
                // Prompt a message when the staff already exists
                alert("Staff with this email already exists. Cannot insert.");
            } else if (err.response.status === 400 && err.response.data.message === "Staff with this nic already exists.") {
                // Prompt a message when the staff already exists
                alert("Staff with this nic already exists. Cannot insert.");
            } else {
                alert("Error: " + err.response.data.message);
            }
        });
    }
    }

    return(
        <div>
            <SidebarStaff/>
            <div style={{ marginLeft: '17%', marginTop: '2px', padding: '1px 16px', height: '1000px' }}>
                <h1> ADD STAFF MEMBER </h1>
                <hr/>
                <form action=" ">
                    <div class="mb-3">
                        <label for="name" class="form-label" > <b> Member Name </b> </label>
                        <input type="text" class="form-control" id="name" aria-describedby="nameHelp" onChange={(e)=>{
                            setName(e.target.value);
                        }} required />
                        {errors&&name.length<=0?<label className="validation-label" style={{ color: 'red' }}>Name cannot be empty</label>:""}
                    </div>
                    <div class="mb-3">
                        <label for="name" class="form-label" >  <b> Member Email </b> </label>
                        <input type="email" class="form-control" id="name" aria-describedby="nameHelp" onChange={(e)=>{
                            setEmail(e.target.value);
                        }} required />
                        {errors&&email.length<=0?<label className="validation-label" style={{ color: 'red' }}>Email cannot be empty</label>:""}
                    </div>
                    <div class="mb-3">
                        <label for="name" class="form-label" > <b> NIC </b> </label>
                        <input type="text" class="form-control" id="name" aria-describedby="nameHelp" onChange={(e)=>{
                            setNic(e.target.value);
                        }} required />
                        {errors&&nic.length<=0?<label className="validation-label" style={{ color: 'red' }}>NIC cannot be empty</label>:""}
                    </div>
                    <div class="mb-3">
                        <label for="name" class="form-label" > <b> Age </b> </label>
                        <input type="number" class="form-control" id="name" aria-describedby="nameHelp" onChange={(e)=>{
                            setAge(e.target.value);
                        }} required />
                        {errors&&age.length<=0?<label className="validation-label" style={{ color: 'red' }}>Age cannot be empty</label>:""}
                    </div>
                    <div class="mb-4">
                        <label for="name" class="form-label" > <b> Gender </b> </label>
                        <select id="gender" class="form-control" name="gender" value={gender.gender} onChange={(e)=>{
                            setGender(e.target.value);
                        }} required>
                            <option value="">Select Gender </option>
                            <option value="male"> Male </option>
                            <option value="feamle"> Female </option>
                            <option value="other"> Other </option>
                        </select>
                    </div>
                    <div class="mb-4">
                        <label for="name" class="form-label" > <b> Employee Type </b> </label>
                        <select id="type" class="form-control" name="type" value={employee_type.employee_type} onChange={(e)=>{
                            setEmployee_type(e.target.value);
                        }} required>
                            <option value="">Select Employee Type </option>
                            <option value="manager"> Manager </option>
                            <option value="cashier"> Cashier </option>
                            <option value="helper"> Helper </option>
                        </select>
                    </div>
                    <button type="submit" class="btn btn-primary" onClick={sendData}> Add Staff Member </button>
                </form>
            </div>
        </div>    
    )
}