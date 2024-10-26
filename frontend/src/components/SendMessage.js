// SendMessage.js
import React, { useState } from 'react';
import SidebarFeedback from './SidebarFeedback';    

function SendMessage({ onSubmit }) {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ email, message });
    setEmail('');
    setMessage('');
  };

  return (
    <div>
      <SidebarFeedback/>
      <div style={{ marginLeft: '17%', marginTop: '2px', padding: '1px 16px', height: '1000px' }}>
          <h1> SEND MESSAGE </h1>
          <hr/>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="email" className="form-label"> Email </label>
                <input type="email" className="form-control" id="email" aria-describedby="emailHelp" required value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>

            <div className="mb-3">
                <label htmlFor="msg" className="form-label"> Message </label>
                <textarea className="form-control" id="msg" required value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
            </div>

            <button type="submit" className="btn btn-primary"> Send Message </button>
          </form>
      </div>
    </div>
  );
}

export default SendMessage;
