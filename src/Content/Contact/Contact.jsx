import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import contactHeaderImage from "../../Assets/contactHeaderImage.jpg";

import "./contact.css";

export default function Contact() {
  const [message, setMessage] = useState("");
  const [color, setColor] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmailFormclient",
        "template_tgjribb",
        e.target,
        "hYaiCVw3gLaDTigGE"
      )
      .then(
        (result) => {
          console.log(result.text);
          setColor("#feb15e");
          setMessage("Thank you, I’ve got your message.");
          setTimeout(() => {
            setMessage("");
          }, 3000);
        },
        (error) => {
          console.log(error.text);
          setColor("#ff4655");
          setMessage(error.message);
          setMessage("Someting went worng!");
          setTimeout(() => {
            setMessage("");
          }, 3000);
        }
      );
    e.target.reset();
  };
  return (
    <section className="contact">
      <div className="contact___image">
        <img src={contactHeaderImage} alt="" />
      </div>
      <div className="contact___detail">
        <h2>Let’s make something amazing toghtether.</h2>
        <div className="contact___detail--card">
          <div className="contact___detail--card___header">
            <h3>
              Start by <span>saying hi</span>
            </h3>
            <ul>
              <li>
                <i className="fa fa-whatsapp"></i>{" "}
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://wa.me/8677876958"
                >
                  WhatsApp me
                </a>
              </li>
              <li>
                <i className="fa-solid fa-phone"></i>{" "}
                <a target="_blank" rel="noreferrer" href="tel:+916200083799">
                  Call me
                </a>
              </li>
            </ul>
          </div>

          <form className="contact___from" onSubmit={sendEmail}>
            <div className="contact___from--input-wrap">
              <input
                type="text"
                // value={name}
                name="user_name"
                required
                placeholder="Name*"
                // onChange={(e) => setName(e.target.value)}
              />
              <input
                type="email"
                // value={email}
                name="user_email"
                required
                placeholder="Email*"
                // onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="contact___from--input-wrap-2">
              <textarea
                name="message"
                // value={description}
                cols="30"
                rows="8"
                required
                placeholder="Write your messages*"
                // onChange={(e) => setDescription(e.target.value)}
              ></textarea>
              <input className="mT1" type="submit" value="Submit" />
              {message && (
                <p
                  id="msg"
                  className="contact___from--respoonseMessage"
                  style={{ color: color }}
                >
                  {message}
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
