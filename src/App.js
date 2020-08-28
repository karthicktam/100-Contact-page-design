import React, { useState } from "react";
import "./styles.css";

function Input(props) {
  return props.field === "input" ? (
    <div className="wrapper">
      <input type={props.type} placeholder={props.placeholder} />
      <div className="gradient-bg"></div>
    </div>
  ) : (
    <div className="wrapper wrapper-big">
      <textarea placeholder={props.placeholder} />
      <div className="gradient-bg"></div>
    </div>
  );
}

export default function App() {
  const [submitted, setSubmitted] = useState(false);

  const submitHandler = () => {
    setSubmitted(true);
  };

  return !submitted ? (
    <div className="contact-container">
      <h2>Send me a message</h2>
      <p>
        Feel free to get in touch with me with anything related to Web
        Development or you can just say hi. I will get back to you as soon as
        possible
      </p>
      <form id="form" onSubmit={submitHandler}>
        <Input type="text" placeholder="Enter your name" field="input" />
        <Input type="email" placeholder="Enter your email" field="input" />
        <Input type="text" placeholder="Subject" field="input" />
        <Input type="text" placeholder="Message" field="textarea" />
        <button>Sumit</button>
      </form>
    </div>
  ) : (
    <div className="contact-container">
      <p className="pTag">
        Thanks for your message. <br /> I'll get back to you soon. 😃
      </p>
    </div>
  );
}
