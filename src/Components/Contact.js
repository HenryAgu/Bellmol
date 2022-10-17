import { useRef } from "react";
// Helmet
import { Helmet } from "react-helmet";

// Email js
import emailjs from "@emailjs/browser";

// stylesheet
import "../Components/Contact.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ffmpviw",
        "template_g2i81fs",
        form.current,
        "n8uI_C9Y46CPc068J"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
      e.target.reset();
  };
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Contact Us | Bellmol Global Resource </title>
        <link rel="canonical" href="http://mysite.com/example" />
        <meta
          name="description"
          content="Pricing page for William SASS website"
        />
      </Helmet>
      <div className="contact">
        <div className="contact-header">
          <h1>Get in Touch</h1>
          <p>
            You can contact us any way that is convenient for you. We are
            available 24/7 via fax or email. You can also use a quick contact
            form below
          </p>
          <p>We would be happy to answer your questions.</p>
        </div>
        <form ref={form} className="form" onSubmit={sendEmail}>
          <div className="name-email">
            <input
              type="text"
              placeholder="Your Full Name:"
              name="user_name"
              required
            />
            <input
              type="email"
              placeholder="Your Email:"
              name="user_email"
              required
            />
          </div>
          <input type="text" placeholder="Subject" name="subject" required />
          <textarea name="message" placeholder="Your Message:"></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </>
  );
};

export default Contact;
