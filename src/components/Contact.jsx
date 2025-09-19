// Contact.jsx
import React, { useRef } from "react";
import { motion, useInView } from "motion/react";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_os135na",    // ✅ Service ID
        "template_ow70m4j",   // ✅ Template ID
        form.current,
        "tBAhtrYWYoSJ6ti_4"    // ✅ Public Key
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          alert("✅ Message Sent Successfully!");
        },
        (error) => {
          console.log("FAILED...", error.text);
          alert("❌ Message Failed! Check console for details.");
        }
      );
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3 });

  return (
    <div className="bg-zinc-900 text-black py-20 px-5 md:px-0">
      <div className="max-w-screen-lg mx-auto text-center">
        {/* Heading */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-screen-xl mx-auto mb-12 px-5 text-center"
        >
          <h1 className="text-5xl font-extrabold text-zinc-300">
            Contact <span className="text-indigo-600">Me</span>
          </h1>
        </motion.div>

        {/* Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-10"
        >
          <p className="text-lg text-zinc-300">krrahul87099@gmail.com</p>
          <p className="text-lg text-zinc-300">+91 7070629414</p>
          <a
            href="/RahulCv.pdf"
            download
            className="mt-3 inline-block bg-indigo-600 text-white px-5 py-2 rounded-lg hover:bg-indigo-700 transition-colors duration-300"
          >
            Download CV
          </a>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          ref={form}
          onSubmit={sendEmail}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-xl text-zinc-300 mx-auto flex flex-col gap-5"
        >
          <input
            type="text"
            placeholder="Your Name"
            name="from_name"
            required
            className="p-3 rounded-lg border border-zinc-300 focus:outline-none focus:ring-2 focus:ring-indigo-600"
          />
          <input
            type="email"
            placeholder="Your Email"
            name="your_email"
            required
            className="p-3 rounded-lg border border-zinc-300 focus:outline-none focus:ring-2 focus:ring-indigo-600"
          />
          <textarea
            placeholder="Your Message"
            name="message"
            required
            className="p-3 rounded-lg border border-zinc-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 resize-none h-32"
          ></textarea>
          <button
            type="submit"
            className="bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition-colors duration-300"
          >
            Submit
          </button>
        </motion.form>

        {/* Social Media */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex justify-center items-center gap-6 mt-10 text-2xl text-zinc-300"
        >
          <a href="https://www.linkedin.com/in/kumarrahulgupta/" target="_blank" rel="noreferrer">
            <FaLinkedin className="hover:text-indigo-600 transition-colors duration-300" />
          </a>
          <a href="https://github.com/Rahulgupta7070" target="_blank" rel="noreferrer">
            <FaGithub className="hover:text-indigo-600 transition-colors duration-300" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <FaTwitter className="hover:text-indigo-600 transition-colors duration-300" />
          </a>
          <a href="https://leetcode.com/u/Rahulll_1_29/" target="_blank" rel="noreferrer">
            <SiLeetcode className="hover:text-indigo-600 transition-colors duration-300" />
          </a>
        </motion.div>
      </div>
    </div>
  );
}

export default Contact;
