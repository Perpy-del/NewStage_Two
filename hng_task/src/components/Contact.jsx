import React from "react";
import '../contact.css'

import zuri from '../images/Zuri.Internship_Logo.svg'
import ingressive from '../images/I4G.svg'

function Contact () {
  const name = "Perpetual"
  return (
    <div className="app">
      <header>
        <h1>Contact Me</h1>
        <p> Hi there, contact me to ask me about anything you have in mind.</p>
      </header>

      <form action="#">
          <div className="fullname">
            <div>
            <label htmlFor="first_name"> First name </label>
            <input type="text" placeholder="Enter your first name" id="first_name" />
            </div>
            <div>
            <label htmlFor="last_name"> Last name </label> 
            <input type="text" placeholder="Enter your last name" id="last_name" />
            </div>
          </div>

          <div className="email">
          <label htmlFor="email"> Email </label> <br />
          <input type="email" placeholder="yourname@email.com" id="email" />
          </div>

          <div>
          <label htmlFor="message"> Message </label> <br />
          <textarea name="message" id="message" cols="30" rows="5">
            Send me a message and I'll reply you as soon as possible...
          </textarea>
          </div>

          <div className="agreement">
          <input type="checkbox" id="agreement" /> <div>
          <label htmlFor="agreement"> You agree to providing your data to {name} who may contact you</label> </div>
          </div>

          <div>
          <input type="button" value="Send message" id="btn_submit"/>
          </div>
      </form>

      <footer>
            <img src={zuri} alt="Zuri Logo" />
            <h4>HNG Internship 9 Frontend Task</h4>
            <img src={ingressive} alt="I4G" />
      </footer>
    </div>
  );
};

export default Contact