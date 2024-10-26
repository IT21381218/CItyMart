import React, {useState, useEffect}from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import SidebarStaff from "./SidebarStaff";

export default function UpdateStaffMember(){
 
    const [staff, setStaff] = useState({});
    const [loading, setLoading] = useState(true);
    const [name, setName] = useState("");   
    const [email, setEmail] = useState("");
    const [nic, setNic] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState('Initial Value');
    const [employee_type, setEmployee_type] = useState('Initial Value');  
    const params = useParams();
    const staffId = params.id;

    useEffect(() => {
        async function Getid(){
            try {
                setLoading(true);
                const res = await axios.get(`http://localhost:5000/staff/get/${staffId}`)
                setStaff(res.data);
                console.log(res.data);
                setName(res.data.name);
                setEmail(res.data.email);
                setNic(res.data.nic);
                setAge(res.data.age);
                setGender(res.data.gender);
                setEmployee_type(res.data.employee_type);
                setLoading(false);
            } catch(err){
                setLoading(false);
                alert(err.message); 
            }
        }
        Getid();
    }, [staffId])

    function handleSubmit(e) {
        e.preventDefault();
        const updatedStaff = {
            name,
            email,
            nic,
            age,
            gender,
            employee_type   
        }
        
        axios.put(`http://localhost:5000/staff/update/${staffId}`, updatedStaff)
            .then(() => {
                alert("Staff updated");
                window.location.href = '/staff';
            }).catch((err) => {
                alert(err);
            })
            .catch((err) => {
                alert(err);
            });
    }

    return(
        <div>
            <SidebarStaff/>
            <div style={{ marginLeft: '17%', marginTop: '2px', padding: '1px 16px', height: '1000px' }}>
                <h1> UPDATE STAFF MEMBER </h1>
                <hr/>
                    {loading ? (
                        <div>Loading...</div>

                    ) : (staff && Object.keys(staff).length !== 0 ? (
                            <form onSubmit={handleSubmit}>
                            <div class="mb-3">
                                <label for="name1" class="form-label" > <b> Member Name </b> </label>
                                <input type="text" class="form-control" id="name1" placeholder={staff.staff.name} 
                                 value={staff.name1} onChange={(e)=>{setName(e.target.value);}} />
                            </div>

                            <div class="mb-3">
                                <label for="name2" class="form-label" >  <b> Member Email </b> </label>
                                <input type="email" class="form-control" id="name2" placeholder={staff.staff.email} 
                                value={staff.name2} onChange={(e)=>{setEmail(e.target.value)}}  />
                            </div>

                            <div class="mb-3">
                                <label for="name3" class="form-label" > <b> NIC </b> </label>
                                <input type="text" class="form-control" id="name3" placeholder={staff.staff.nic}  
                                value={staff.name3} onChange={(e)=>{setNic(e.target.value);}} />
                            </div>

                            <div class="mb-3">
                                <label for="name4" class="form-label" > <b> Age </b> </label>
                                <input type="number" class="form-control" id="name4" placeholder={staff.staff.age} 
                                value={staff.name4} onChange={(e)=>{setAge(e.target.value);}} />
                            </div>

                            <div class="mb-4">
                                <label for="gender" class="form-label" > <b> Gender </b> </label>
                                <select id="gender" class="form-control" name="gender" placeholder={staff.staff.gender} 
                                value={staff.staff.gender} onChange={(e) => {setGender(e.target.value);}}>
                                    <option value="male"> Male </option>
                                    <option value="feamle"> Female </option>
                                    <option value="other"> Other </option>
                                </select>
                            </div>

                            <div class="mb-4">
                                <label for="employee_type" class="form-label" > <b> Employee Type </b> </label>
                                <select id="type" class="form-control" name="employee_type" placeholder={staff.staff.employee_type}
                                value={staff.staff.employee_type} onChange={(e) => {setEmployee_type(e.target.value);}}>
                                    <option value="manager"> Manager </option>
                                    <option value="cashier"> Cashier </option>
                                    <option value="helper"> Helper </option>
                                </select>
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