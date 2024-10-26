import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";
// import "../styles/micnav.css";
import "../components/styles/micnav.css";

const MicNav = () => {
  const commands = [
    {
      command: ["Go to * page", "Go to *", "Open * page", "Open *", "*"],
      callback: (redirectPage) => setRedirectUrl(redirectPage),
    },
  ];

  const { transcript } = useSpeechRecognition({ commands });
  const [redirectUrl, setRedirectUrl] = useState("");

  const pages = ["home", "payment", "feedback", "display feedback", "payment"];
  const urls = {
    home: "/",
    "payment": "/SelectPaymentUser",
    "feedback": '/add/feedback',
    "display feedback":'/list/feedback',
  };

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return null;
  }

  let redirect = "";

  if (redirectUrl) {
    if (pages.includes(redirectUrl)) {
      redirect = <Navigate to={urls[redirectUrl]} />; // Use Navigate instead of Redirect
    } else {
      redirect = (
        <div>
          <p>Could not find page: {redirectUrl}</p>
          {setTimeout(() => setRedirectUrl(""), 3000)}
        </div>
      );
    }
  }

  return (
    <div className="micnav">
      <p id="transcript">Transcript: {transcript}</p>
      <button onClick={SpeechRecognition.startListening} className="MicNavBtn" >Start</button>
      {redirect}
    </div>
  );
};

export default MicNav;
