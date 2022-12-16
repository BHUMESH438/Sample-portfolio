import React from "react";
import "./Contact.css";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const form = useRef();

  const sendEmail = e => {
    e.preventDefault();

    emailjs.sendForm("service_ID16EIR017", "template_ID16EIR017", form.current, "kYqg0oRKjDehPrulT").then(
      result => {
        console.log(result.text);
      },
      error => {
        console.log(error.text);
      }
    );
    e.target.reset(); //this will reset every thing in the form
  };

  return (
    <div className="container-fluid bg-dark bg-opacity-50 text-center ">
      <div className="contacts p-5">
        <h1 className="text-success TA">CONTACT ME</h1>
        <p className="text-dark PA">Please fill out the form and describe your project needs amd I'll contact you as soon as possible.</p>
      </div>
      <div className="container-fluid">
        <form ref={form} onSubmit={sendEmail}>
          <div className="row">
            <div className="col-7">
              {/* Name */}
              <div className="form-floating ">
                <input className="form-control mb-3" id="NM" placeholder="Name" name="name" type="text" required />
                <label htmlFor="NM">Your name</label>
              </div>
              {/* email */}
              <div className="form-floating">
                <input className="form-control  mb-3" id="EM" placeholder="Email" type="text" name="email" required />
                <label htmlFor="EM">Your email</label>
              </div>
              {/* Phone */}
              <div className="form-floating">
                <input className="form-control  mb-3" id="PH" placeholder="Phone" type="text" name="phone" required />
                <label htmlFor="PH">Mobile number</label>
              </div>
              {/* subject */}
              <div className="form-floating">
                <input className="form-control  mb-3" id="PH" placeholder="Subject" type="text" name="Subject" required />
                <label htmlFor="SB">Subject</label>
              </div>
            </div>
            {/*text area  */}
            <div className="form-floating col-5 ">
              <textarea type="text" className="form-control mb-3 TX FM" placeholder="Send me a Message" name="description" required></textarea>
              <label htmlFor="FM">Message me.</label>
            </div>
            <button className="btn btn-primary col-3 offset-5 mb-5">send</button>
          </div>
        </form>
      </div>
    </div>
  );
};
