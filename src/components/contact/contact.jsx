"use client";

import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import { motion } from "framer-motion";

function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE,
        process.env.NEXT_PUBLIC_TEMPLATE,
        form.current,
        {
          publicKey: process.env.NEXT_PUBLIC_EMAIL_API_KEY,
        }
      )
      .then(
        () => {
          console.log("SUCCESS!");

          toast.success("Email sent Successfully!");
          const formElements = form.current.elements;
          for (let i = 0; i < formElements.length; i++) {
            if (
              formElements[i].nodeName === "INPUT" ||
              formElements[i].nodeName === "TEXTAREA"
            ) {
              formElements[i].value = "";
            }
            
          }
        },
        (error) => {
          console.log("FAILED...", error.text);

          toast.error("Email not sent!");
        }
      );
  };
  return (
    <div className="w-[95%] mx-auto my-0 lg:w-[55%] py-4 px-4 bxshadow">
      <h1 className="text-2xl font-header font-extrabold text-redtext">
        Get In Touch
      </h1>
      <br />
      <br />
      <form ref={form} onSubmit={sendEmail}>
        <div className="mb-8">
          <label htmlFor="fullName" className="mb-4 text-border">
            Full Name
          </label>
          <input
            type="text"
            name="fullName"
            id="fullName"
            className="border outline-0 font-semibold rounded-lg w-full p-2.5 focus:border-prigreentext focus:ring-1 focus:ring-prigreentext"
            placeholder="John Doe"
            required=""
          />
        </div>
        <div className="mb-8">
          <label htmlFor="phoneNumber" className="mb-4 text-border">
            Phone Number
          </label>
          <input
            type="tel"
            name="phoneNumber"
            id="phoneNumber"
            className="border outline-0 font-semibold rounded-lg w-full p-2.5 focus:border-prigreentext focus:ring-1 focus:ring-prigreentext"
            placeholder="+1 (0)27174657687"
            required=""
          />
        </div>
        <div className="mb-8">
          <label htmlFor="email" className="mb-4 text-border">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="border outline-0 font-semibold rounded-lg w-full p-2.5 focus:border-prigreentext focus:ring-1 focus:ring-prigreentext"
            placeholder="johndoe@email.com"
            required=""
          />
        </div>
        <div className="mb-8">
          <label htmlFor="subject" className="mb-4 text-border">
            Subject
          </label>
          <input
            type="text"
            name="subject"
            id="subject"
            className="border outline-0 font-semibold rounded-lg w-full p-2.5 focus:border-prigreentext focus:ring-1 focus:ring-prigreentext"
            placeholder="Message Subject"
            required=""
          />
        </div>
        <div className="mb-8">
          <label htmlFor="message" className="mb-4 text-border">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            className="border outline-0 font-semibold rounded-lg w-full p-2.5 focus:border-prigreentext focus:ring-1 focus:ring-prigreentext resize-none min-h-48"
            placeholder="type your message"
            required=""
          />
        </div>
        <motion.button
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="py-3 px-6 rounded-[20px] font-bold bg-btn text-white text-[14px] w-full"
        >
          SUBMIT
        </motion.button>
      </form>
    </div>
  );
}

export default ContactForm;
