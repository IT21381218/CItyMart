import React, { useState } from 'react';
import axios from 'axios';
import '../components/styles/feedback.css';
import NavBar from './NavBar';
import MicNav from './MicNav';
import Footer from './Footer';

const Feedback = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.post('http://localhost:5000/feedback/add', {
                name,
                email,
                message
            });

            setName('');
            setEmail('');
            setMessage('');
            setSubmitted(true);
        } catch (error) {
            console.error('Error submitting feedback:', error);
            alert('Error submitting feedback. Please try again later.');
        }
    };

    const startDictation = (field) => {
        if (window.hasOwnProperty('webkitSpeechRecognition')) {
            const recognition = new window.webkitSpeechRecognition();
            recognition.continuous = false;
            recognition.interimResults = false;
            recognition.lang = "en-US";
            recognition.start();
            recognition.onresult = (e) => {
                const transcript = e.results[0][0].transcript;
                switch (field) {
                    case 'name':
                        setName(transcript);
                        break;
                    case 'email':
                        setEmail(transcript);
                        break;
                    case 'message':
                        setMessage(transcript);
                        break;
                    default:
                        break;
                }
                recognition.stop();
            };
            recognition.onerror = (e) => {
                recognition.stop();
            }
        }
    };

    return (
        <div className='feedbackPage'>
            <NavBar />
            <MicNav />
            <br />
            <div className="Feedback">
                <h2>Add Feedback</h2>
                {submitted && <p className="success-message">Thank you for your feedback!</p>}
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <div className="input-with-mic">
                            <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
                            <button type="button" onClick={() => startDictation('name')}><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAXlJREFUSEvt1cFLVFEUx/HPgGCEGxcWSBBuTBApEUQCV4L/gUggiYiICG38E8KFi7YiElKIG10HrsWSNupCBF0pKKJQmwgDtXw3biLTvHlvGGYheFcP7jnne+7v3vN7BTVehRrXlxcwhDfowDm+YAwnWQ3mAQxguUShIzxPwN/LQfIAvqI7pch8corxagGhw8aUIgdoqRbwJ0PnsirkkegekPWS3T2JfuIhGhC+j9Gccs6w9yTG/ojxIe9mlXpFe2hFFzbxAcMpgAWMogcb2EV7FuB9TJrDBJqwg0dFkGAVL/AtGbaPeJ3EzGIyC/ASn3EZLWIrShTAodPfWI8WcYperMWindjOAoT9RQQHPUycsx/7KRKFE6zicanuQ07aJNfjE/rwC0GudwiyhPUMU0kDI6hLdF/BK1wVN1LOKh5gJv4H0oblAtN4G6X7Ly6PFz2NnQ6iLVYI97IUpTyr1k1v5/+b6jyN/c3LHRgpNQdkGlcll1xxsVIJ16xNQxlXeT1iAAAAAElFTkSuQmCC"/></button>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <div className="input-with-mic">
                            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                            <button type="button" onClick={() => startDictation('email')}><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAXlJREFUSEvt1cFLVFEUx/HPgGCEGxcWSBBuTBApEUQCV4L/gUggiYiICG38E8KFi7YiElKIG10HrsWSNupCBF0pKKJQmwgDtXw3biLTvHlvGGYheFcP7jnne+7v3vN7BTVehRrXlxcwhDfowDm+YAwnWQ3mAQxguUShIzxPwN/LQfIAvqI7pch8corxagGhw8aUIgdoqRbwJ0PnsirkkegekPWS3T2JfuIhGhC+j9Gccs6w9yTG/ojxIe9mlXpFe2hFFzbxAcMpgAWMogcb2EV7FuB9TJrDBJqwg0dFkGAVL/AtGbaPeJ3EzGIyC/ASn3EZLWIrShTAodPfWI8WcYperMWindjOAoT9RQQHPUycsx/7KRKFE6zicanuQ07aJNfjE/rwC0GudwiyhPUMU0kDI6hLdF/BK1wVN1LOKh5gJv4H0oblAtN4G6X7Ly6PFz2NnQ6iLVYI97IUpTyr1k1v5/+b6jyN/c3LHRgpNQdkGlcll1xxsVIJ16xNQxlXeT1iAAAAAElFTkSuQmCC"/></button>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message:</label>
                        <div className="input-with-mic">
                            <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} required />
                            <button type="button" onClick={() => startDictation('message')}><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAXlJREFUSEvt1cFLVFEUx/HPgGCEGxcWSBBuTBApEUQCV4L/gUggiYiICG38E8KFi7YiElKIG10HrsWSNupCBF0pKKJQmwgDtXw3biLTvHlvGGYheFcP7jnne+7v3vN7BTVehRrXlxcwhDfowDm+YAwnWQ3mAQxguUShIzxPwN/LQfIAvqI7pch8corxagGhw8aUIgdoqRbwJ0PnsirkkegekPWS3T2JfuIhGhC+j9Gccs6w9yTG/ojxIe9mlXpFe2hFFzbxAcMpgAWMogcb2EV7FuB9TJrDBJqwg0dFkGAVL/AtGbaPeJ3EzGIyC/ASn3EZLWIrShTAodPfWI8WcYperMWindjOAoT9RQQHPUycsx/7KRKFE6zicanuQ07aJNfjE/rwC0GudwiyhPUMU0kDI6hLdF/BK1wVN1LOKh5gJv4H0oblAtN4G6X7Ly6PFz2NnQ6iLVYI97IUpTyr1k1v5/+b6jyN/c3LHRgpNQdkGlcll1xxsVIJ16xNQxlXeT1iAAAAAElFTkSuQmCC"/></button>
                        </div>
                    </div>
                    <button className='feedback-submit-button' type="submit">Submit</button>
                    
                </form>
            </div>
            <br />
            <Footer />
        </div>
    );
};

export default Feedback;
