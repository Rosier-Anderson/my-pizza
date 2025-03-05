import React from "react";
import '../styles/Contact.scss';
import IMAGE from '../assets/menu/pizzaLeft.jpg'

export default function Contact() {
  return (
    <div className="contact">
      <figure className="figure">
        <img src={IMAGE} alt="" className="image__contact" />
      </figure>
      <form action="" className="contact__form">
        <fieldset className="form__fieldset" aria-label="fieldset">
          <legend className="form__legend" aria-label="fieldset">
            Contact Us
          </legend>
          <label htmlFor="full__name" className="form__label">
            Full name
          </label>
          <input
            id="full__name"
            type="text"
            className="form__input"
            placeholder="Your Full Name"
          />
          <label htmlFor="email" className="form__email">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            className="form__input"
            placeholder="Your Email Address"
          />
          <label htmlFor="form__message" className="form__textarea">
            Message
          </label>
          <textarea
            name="message"
            id="form__message"
            className="form__textarea"
            placeholder="Your Message"
          ></textarea>
        </fieldset>
        <button type="submit" id="form__submit">
          Submit
        </button>
      </form>
    </div>
  );
}
