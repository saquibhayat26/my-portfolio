import React, { useRef } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import SendIcon from "@mui/icons-material/Send";

const Contact = () => {
  const form = useRef();

  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [messageValue, setMessageValue] = useState("");
  const [success, setSuccess] = useState(false);

  const handleName = (e) => {
    let value = e.target.value;
    setNameValue(value);
  };
  const handleEmail = (e) => {
    let value = e.target.value;
    setEmailValue(value);
  };
  const handleMessage = (e) => {
    let value = e.target.value;
    setMessageValue(value);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_plv4ovp",
        "template_gkxuqca",
        form.current,
        "ySmjX0CIvA5sENiuq"
      )
      .then(
        (result) => {
          setSuccess(true);
          setNameValue("");
          setEmailValue("");
          setMessageValue("");
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  setTimeout(() => {
    setSuccess(false);
  }, 3000);

  return (
    <div className="contact" id="contact">
      <div className="contact__left">
        <span>Get in touch</span>
        <span>Contact me</span>
        <div className="contact__blur c-blur1"></div>
      </div>
      <div className="contact__right">
        <form ref={form} className="form" onSubmit={(e) => sendEmail(e)}>
          <input
            name="user_name"
            type="text"
            placeholder="Name"
            className="form__input"
            value={nameValue}
            required
            onChange={(e) => handleName(e)}
          />
          <input
            name="user_email"
            type="email"
            placeholder="Email"
            className="form__input"
            value={emailValue}
            required
            onChange={(e) => handleEmail(e)}
          />
          <textarea
            name="user_message"
            type="text"
            placeholder="Message"
            className="form__input"
            value={messageValue}
            required
            onChange={(e) => handleMessage(e)}
          />
          <button type="submit" className="button form__btn">
            {<SendIcon />}
          </button>
        </form>
        <span>{success && "ThankYou for Contacting me 🥰"}</span>
        <div className="contact__blur c-blur2"></div>
      </div>
    </div>
  );
};

export default Contact;
