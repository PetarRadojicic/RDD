import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import React, { useRef, useState } from "react";
import "./contact.css";

const Contact = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);

  const spinnerAnimation = {
    rotate: 360,
    transition: {
      repeat: Infinity,
      ease: "linear",
      duration: 1,
    },
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm(
        "service_aobzzal",
        "template_3xure8u",
        form.current,
        "xIFG4VCfji1slrmAd"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Email poslat!");
        },
        (error) => {
          console.log(error.text);
          alert("Došlo je do greške, pokušajte ponovo.");
        }
      )
      .finally(() => {
        setIsSending(false);
        e.target.reset();
      });
  };

  return (
    <div id="contactPage">
      <div id="contact">
        <h1 className="contactPageTitle">Kontaktirajte me</h1>
        <span className="contactDesc">
          Molimo popunite formu ispod kako biste razgovarali o mogućnostima za
          rad.
        </span>
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            className="name"
            placeholder="Vaše ime"
            name="from_name"
            required
          />
          <input
            type="email"
            className="email"
            placeholder="Vaš Email"
            name="from_email"
            required
          />
          <textarea
            name="message"
            placeholder="Vaša poruka"
            rows={5}
            className="msg"
            required
          ></textarea>
          <motion.button
            type="submit"
            className="submitBtn"
            whileHover={!isSending ? { scale: 1.05 } : {}}
            disabled={isSending}
          >
            {isSending ? (
              <motion.div
                animate={spinnerAnimation}
                className="spinner"
              ></motion.div>
            ) : (
              "Pošalji"
            )}
          </motion.button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
