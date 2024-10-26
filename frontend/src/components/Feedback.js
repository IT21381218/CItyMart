// import React from 'react';
// import {useEffect, useState} from 'react';
// import SidebarFeedback from './SidebarFeedback';
// import { Link } from "react-router-dom";
// import axios from 'axios';

// export default function Feedback(){

//     const [feedbacks,setFeedbacks] = useState(null);
//     const [deleteFeedback, setDeleteFeedback] = useState("");
//     const [Search, setSearch] = useState("");

//     useEffect(()=>{
//         const showFeedbacks = async ()=>{
//             const response = await fetch('http://localhost:5000/feedback/')
//             const json = await response.json()

//             if(response.ok){
//                 setFeedbacks(json)
//             }
//         }   
//         showFeedbacks()
//     }, [])

//     const feedbackDelete=async (id) => {
//         try {
//             await axios.delete(`http://localhost:5000/feedback/delete/${id}`);
//             setDeleteFeedback(feedbacks.filter((item) => item.id !== id));
//             alert('Successfully deleted');
//             window.location.reload(); 
            
//         } catch (error) {
//             alert('Error deleting data', error);
//             console.log(error);
//         }
//     };

//     return(
//         <div>
//             <SidebarFeedback/>
//             <div style={{ marginLeft: '17%', marginTop: '2px', padding: '1px 16px', height: '1000px' }}>
//                 <h2>FEEDBACKS</h2>
//                 <hr />
//         <form className="f1">
//               <input type="text" placeholder=" Search Here " className="i1"></input>
//         </form>  
//                 <table class="table">
//                 <thead>
//                   <tr>
//                     {/* <th scope="col" id="t2">ID</th> */}
//                     <th scope="col" id="t2"> Name </th>
//                     <th scope="col" id="t2"> Email </th>
//                     <th scope="col" id="t2"> Reason </th>
//                     <th scope="col" id="t2"> Action </th>
//                     <th scope="col" id="t2"> Delete </th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                 {feedbacks && feedbacks.filter((feedback)=>{
//                   return Search.toLowerCase() === ''
//                   ? feedback
//                   : feedback.name.toLowerCase().includes(Search);
//                 }).map((feedback)=>(
//                   <tr>
//                     {/* <th scope="row">{product._id}</th> */}
//                     <td>{feedback.name}</td>
//                     <td>{feedback.email}</td>
//                     <td>{feedback.message}</td>
//                     <td>
//                         <div class="d-grid gap-2 d-md-block">
//                         </div>
//                     </td>
//                     <td> <button class="btn btn-danger" onClick={()=>feedbackDelete(feedback._id)}>Delete</button> </td>
//                   </tr>))}
//                 </tbody>
//               </table>   
//         </div>
//         </div>
//     )
// }


import React, { useState, useEffect } from 'react';
import SidebarFeedback from './SidebarFeedback';
import axios from 'axios';

const Feedback = () => {
    const [feedbacks, setFeedbacks] = useState(null);

    useEffect(() => {
        const fetchFeedbacks = async () => {
            try {
                const response = await axios.get('http://localhost:5000/feedback/');
                setFeedbacks(response.data);
            } catch (error) {
                console.error('Error fetching feedbacks:', error);
                // Handle error
            }
        };

        fetchFeedbacks();
    }, []);

    const sendReply = async (id, reply) => {
        try {
            await axios.post(`http://localhost:5000/feedback/reply/${id}`, { reply });
            // Refresh feedbacks after sending reply
            const response = await axios.get('http://localhost:5000/feedback/');
            setFeedbacks(response.data);
        } catch (error) {
            console.error('Error sending reply:', error);
            // Handle error
        }
    };

    const feedbackDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/feedback/delete/${id}`);
            alert('Successfully deleted');
            // Refresh feedbacks after deleting
            const response = await axios.get('http://localhost:5000/feedback/');
            setFeedbacks(response.data);
        } catch (error) {
            console.error('Error deleting feedback:', error);
            // Handle error
        }
    };

    const [replyTexts, setReplyTexts] = useState({});

    const handleReplyChange = (feedbackId, text) => {
        setReplyTexts((prevState) => ({
            ...prevState,
            [feedbackId]: text,
        }));
    };

    return (
        <div>
            <SidebarFeedback />
            <div style={{ marginLeft: '17%', marginTop: '2px', padding: '1px 16px', height: '1000px' }}>
                <h2>FEEDBACKS</h2>
                <hr />
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col" id="t2">Name</th>
                            <th scope="col" id="t2">Email</th>
                            <th scope="col" id="t2">Reason</th>
                            <th scope="col" id="t2">Action</th>
                            <th scope="col" id="t2">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {feedbacks && feedbacks.map((feedback, index) => (
                            <tr key={index}>
                                <td>{feedback.name}</td>
                                <td>{feedback.email}</td>
                                <td>{feedback.message}</td>
                                <td>
                                    <div className="d-flex align-items-center">
                                        <input
                                            type="text"
                                            placeholder="Type your reply"
                                            className="form-control me-2"
                                            value={replyTexts[feedback._id] || ''}
                                            onChange={(e) => handleReplyChange(feedback._id, e.target.value)}
                                        />
                                        <button
                                            className="btn btn-primary"
                                            onClick={() => sendReply(feedback._id, replyTexts[feedback._id] || '')}
                                        >
                                            Reply
                                        </button>
                                    </div>
                                </td>
                                <td>
                                    <button
                                        className="btn btn-danger"
                                        onClick={() => feedbackDelete(feedback._id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Feedback;


