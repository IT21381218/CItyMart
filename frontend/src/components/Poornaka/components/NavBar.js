import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import "../components/styles/navbar.css";
import MicNav from "./MicNav"


const NavigationBar = () => {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="navbar-brand">
          <img className="navbar-logo" src="https://res.cloudinary.com/dwcxwpn7q/image/upload/v1714587388/citymart/logo_transparent_limzrg.png" alt="Logo" />
        </Link>
        <ul className="nav-links">
          <li><Link to="/add/items" className={location.pathname === '/add/items' ? 'active' : ''}>Home</Link></li>
          <li><Link to="/add/feedback" className={location.pathname === '/add/feedback' ? 'active' : ''}>Feedback</Link></li>
          <li><Link to="/list/feedback" className={location.pathname === '/list/feedback' ? 'active' : ''}>DisplayFeedback</Link></li>
          <li><Link to="/SelectPaymentUser" className={location.pathname === '/Contact' ? 'active' : ''}>Select Payment</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default NavigationBar;


// import React, { useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { Navigate } from "react-router-dom";
// import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";
// import "../components/styles/navbar.css";

// const NavigationBar = () => {
//   const location = useLocation();
//   const commands = [
//     {
//       command: ["Go to * page", "Go to *", "Open * page", "Open *", "*"],
//       callback: (redirectPage) => setRedirectUrl(redirectPage),
//     },
//   ];
//   const { transcript } = useSpeechRecognition({ commands });
//   const [redirectUrl, setRedirectUrl] = useState("");

//   const pages = ["home", "contact", "feedback", "display feedback"];
//   const urls = {
//     home: "/",
//     contact: "/Contact",
//     "feedback": '/add/feedback',
//     "display feedback": '/list/feedback'
//   };

//   if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
//     return null;
//   }

//   let redirect = "";

//   if (redirectUrl) {
//     if (pages.includes(redirectUrl)) {
//       redirect = <Navigate to={urls[redirectUrl]} />; // Use Navigate instead of Redirect
//     } else {
//       redirect = (
//         <div>
//           <p>Could not find page: {redirectUrl}</p>
//           {setTimeout(() => setRedirectUrl(""), 3000)}
//         </div>
//       );
//     }
//   }

//   return (
//     <nav className="navbar">
//       <div className="container">
//         <Link to="/" className="navbar-brand">
//           <img className="navbar-logo" src="https://res.cloudinary.com/dwcxwpn7q/image/upload/v1714587388/citymart/logo_transparent_limzrg.png" alt="Logo" />
//         </Link>
//         <ul className="nav-links">
//           <li><Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link></li>
//           <li><Link to="/add/feedback" className={location.pathname === '/add/feedback' ? 'active' : ''}>Feedback</Link></li>
//           <li><Link to="/list/feedback" className={location.pathname === '/list/feedback' ? 'active' : ''}>DisplayFeedback</Link></li>
//           <li><Link to="/Contact" className={location.pathname === '/Contact' ? 'active' : ''}>Contact</Link></li>
//         </ul>
//         <div className="micnav">
//           <p id="transcript">Transcript: {transcript}</p>
//           <button onClick={SpeechRecognition.startListening}>Start</button>
//           {redirect}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default NavigationBar;
