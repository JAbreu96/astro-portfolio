import "react";
import { Emailer } from "./emailHandlers.js";
import "../stylesheets/ContactForm.css";


const ContactForm = () => {

  const emailService = new Emailer();

  return (<section
    id="contact"
    className="h-fit font-mono flex flex-col items-center mt-52 w-full pb-44"
  >
    <h1 className="text-3xl sm:text-5xl">Contact Me</h1>
    <form
      id="contact-form"
      className="flex flex-col w-5/4 mt-24 items-center"
      name="contact"
      onSubmitCapture={(e) => {

        e.preventDefault();
        emailService.setUpAndSendEmailHandler();
      }}
    >
      <label htmlFor="name">Name:</label>
      <input className="w-4/6 sm:w-1/2 text-black" type="text" id="name" name="name" required />

      <label htmlFor="email">Email:</label>
      <input className="w-4/6 sm:w-1/2 text-black" type="email" id="email" name="email" required />

      <label htmlFor="message">Message:</label>
      <textarea className="w-11/12 sm:w-11/12 text-black" id="message" name="message" required></textarea>

      <button type="submit" className="submit-btn px-10 py-24" >
        Send
      </button>
    </form>
  </section>)
}

export default ContactForm;