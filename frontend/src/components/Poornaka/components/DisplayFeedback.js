import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import Axios for making HTTP requests
import "./styles/feedbackreply.css"
import NavBar from './NavBar';
import MicNav from './MicNav';
import Footer from './Footer';

const DisplayFeedback = () => {
    // State variable to store feedback data
    const [feedbacks, setFeedbacks] = useState([]);

    // Function to fetch feedback data from the backend
    const fetchFeedbacks = async () => {
        try {
            // Send a GET request to fetch feedback data from the backend
            const response = await axios.get('http://localhost:5000/feedback');
            // Set the feedbacks state variable with the fetched data
            setFeedbacks(response.data);
        } catch (error) {
            console.error('Error fetching feedbacks:', error);
            // Optionally, you can show an error message to the user
            alert('Error fetching feedbacks. Please try again later.');
        }
    };

    // Call the fetchFeedbacks function when the component mounts
    useEffect(() => {
        fetchFeedbacks();
    }, []);

    // Function to read the message using Web Speech API
    const readMessage = (text) => {
        const speechSynthesis = window.speechSynthesis;
        const utterance = new SpeechSynthesisUtterance(text);
        speechSynthesis.speak(utterance);
    };

    // Function to concatenate feedback message and all replies
    const concatenateText = (feedback) => {
        let concatenatedText = `Message: ${feedback.message}`;
        if (feedback.replies) {
            feedback.replies.forEach((reply, index) => {
                concatenatedText += ` Reply ${index + 1}: ${reply}`;
            });
        }
        return concatenatedText;
    };

    return (<div className='feedbackdetalsPage'>
        <div><NavBar/><MicNav/>
        <div className="feedback-container">
            <h2>Feedbacks</h2>
            {feedbacks.length === 0 ? (
                <p>No feedbacks found.</p>
            ) : (
                <ul className="feedback-list">
                    {feedbacks.map((feedback, index) => (
                        <li key={index} className="feedback-item">
                            <div className="feedback-details">
                                <div>
                                    <strong>Name:</strong> {feedback.name}
                                </div>
                                <div>
                                    <strong>Email:</strong> {feedback.email}
                                </div>
                                <div>
                                    <strong>Message:</strong> {feedback.message}
                                </div>
                                {feedback.replies && feedback.replies.map((reply, replyIndex) => (
                                    <div key={replyIndex}>
                                        <strong>Reply:</strong> {reply}
                                    </div>
                                ))}
                            </div>
                            <button className="play-button" onClick={() => readMessage(concatenateText(feedback))}>Play Feedback</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
        <Footer/>
        </div>
        </div>
    );
};

export default DisplayFeedback;




