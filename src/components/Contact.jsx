import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import emailjs from "@emailjs/browser";

import { BiLogoGmail } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import { IoLogoLinkedin } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";

export default function Contact() {

  const ref = useRef(null);

  const form = useRef();

  const isInView = useInView(ref, {
    once: true,
    amount: 0.2,
  });

  const [successMessage, setSuccessMessage] = useState("");

  const sendEmail = (e) => {

    e.preventDefault();

    emailjs
      .sendForm(
        "service_r8x1ep8",
        "template_b1p5kzc",
        form.current,
        "tW2CWhqMtbP1dExeK"
      )
      .then(
        () => {
          setSuccessMessage("Message Sent Successfully 💖");
          form.current.reset();
        },
        () => {
          setSuccessMessage("Failed To Send Message ❌");
        }
      );
  };

  return (

    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="lg:my-20 my-10 lg:px-28 px-5 py-10"
      id="contact"
    >

      {/* TITLE */}
      <motion.h2
        initial={{ y: -50, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : { opacity: 0 }}
        className="text-3xl lg:text-5xl text-center mb-14 font-bold"
      >
        Contact{" "}
        <span className="text-pink-500 drop-shadow-[0_0_10px_rgba(236,72,153,0.5)]">
          Me
        </span>
      </motion.h2>

      <div className="flex justify-between items-center flex-col lg:flex-row gap-14">

        {/* LEFT FORM */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { opacity: 0 }}
          className="lg:w-[45%] w-full"
        >

          <form
            ref={form}
            onSubmit={sendEmail}
            className="space-y-5 bg-white/70 backdrop-blur-lg border border-pink-200 shadow-xl rounded-3xl p-8"
          >

            <input
              className="bg-white border border-pink-200 px-5 py-4 rounded-2xl w-full text-sm focus:outline-none focus:ring-2 focus:ring-pink-400"
              type="text"
              name="from_name"
              placeholder="Your Name"
              required
            />

            <input
              className="bg-white border border-pink-200 px-5 py-4 rounded-2xl w-full text-sm focus:outline-none focus:ring-2 focus:ring-pink-400"
              type="email"
              name="from_email"
              placeholder="Your Email"
              required
            />

            <textarea
              className="bg-white border border-pink-200 px-5 py-4 h-36 rounded-2xl w-full text-sm focus:outline-none focus:ring-2 focus:ring-pink-400 resize-none"
              placeholder="Write your message"
              name="message"
              required
            />

            <motion.button
              whileHover={{ scale: 1.05 }}
              type="submit"
              className="bg-pink-500 hover:bg-pink-600 text-white px-7 py-4 rounded-2xl font-semibold shadow-lg"
            >
              Get In Touch
            </motion.button>

            {/* SUCCESS MESSAGE */}
            {successMessage && (
              <p className="text-pink-500 font-semibold">
                {successMessage}
              </p>
            )}

            {/* SOCIALS */}
            <div className="flex gap-5 mt-6">

              <motion.a
                href="mailto:tanu10162005@gmail.com"
                whileHover={{
                  scale: 1.2,
                  color: "#ec4899",
                }}
                className="text-pink-500"
              >
                <BiLogoGmail className="text-3xl" />
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/tanuchaudhary16/"
                target="_blank"
                rel="noreferrer"
                whileHover={{
                  scale: 1.2,
                  color: "#ec4899",
                }}
                className="text-pink-500"
              >
                <IoLogoLinkedin className="text-3xl" />
              </motion.a>

              <motion.a
                href="https://github.com/tanuchaudhary16"
                target="_blank"
                rel="noreferrer"
                whileHover={{
                  scale: 1.2,
                  color: "#ec4899",
                }}
                className="text-pink-500"
              >
                <BsGithub className="text-3xl" />
              </motion.a>

            </div>

          </form>

        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { opacity: 0 }}
          className="lg:w-[45%]"
        >

          <h2 className="text-4xl lg:text-6xl font-bold leading-tight">
            Let's{" "}
            <span className="text-pink-500">
              Connect
            </span>
          </h2>

          <p className="text-gray-600 mt-6 text-sm lg:text-base leading-relaxed">
            I am actively looking for Software Engineering opportunities,
            internships, and collaborations. Feel free to reach out regarding
            projects, opportunities, or tech discussions.
          </p>

          <div className="mt-10 space-y-5 text-sm lg:text-lg">

            <motion.a
              whileHover={{ x: 5 }}
              href="mailto:tanu10162005@gmail.com"
              className="flex items-center gap-4 group"
            >

              <span className="border border-pink-200 p-3 rounded-full bg-white shadow-md group-hover:bg-pink-500 group-hover:text-white transition">
                <IoMdMail />
              </span>

              <span className="text-gray-700">
                tanu10162005@gmail.com
              </span>

            </motion.a>

            <motion.a
              whileHover={{ x: 5 }}
              href="tel:+916397113386"
              className="flex items-center gap-4 group"
            >

              <span className="border border-pink-200 p-3 rounded-full bg-white shadow-md group-hover:bg-pink-500 group-hover:text-white transition">
                <FaPhone />
              </span>

              <span className="text-gray-700">
                +91 6397113386
              </span>

            </motion.a>

          </div>

        </motion.div>

      </div>

    </motion.div>
  );
}