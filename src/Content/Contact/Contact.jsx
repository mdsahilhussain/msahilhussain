import React, { useState } from "react";

import contactHeaderImage from "../../Assets/contactHeaderImage.png";

import "./contact.css";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = () => {};
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
                <i className="fa fa-whatsapp"></i> <a href="">WhatsApp me</a>
              </li>
              <li>
                <i className="fa-solid fa-phone"></i> <a href="">Call me</a>
              </li>
              <li>
                <i className="fa-solid fa-envelope"></i> <a href="">Email me</a>
              </li>
            </ul>
          </div>

          <form className="contact___from" onSubmit={handleSubmit}>
            <div className="contact___from--input-wrap">
              <input
                type="text"
                value={name}
                name="name"
                required
                placeholder="Name*"
                onChange={(e)=> setName(e.target.value)}
              />
              <input
                type="email"
                value={email}
                name="email"
                required
                placeholder="Email*"
                onChange={(e)=> setEmail(e.target.value)}
              />
            </div>
            <div className="contact___from--input-wrap-2">
              <textarea
                name="Description"
                value={description}
                cols="30"
                rows="8"
                required
                placeholder="Description*"
                onChange={(e)=> setDescription(e.target.value)}
              ></textarea>
              <input className="mT1" type="submit" value="Submit" />
              {/* {this.state.message && (
                <p
                  id="msg"
                  className="s14 mT1 tCenter"
                  style={{ color: this.state.color }}
                >
                  {this.state.message}
                </p>
              )} */}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
