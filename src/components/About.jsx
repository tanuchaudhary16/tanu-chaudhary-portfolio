import React from 'react';
import { motion } from 'framer-motion';

export default function About() {

  return (

    <div
      className="px-5 lg:px-28 py-16 bg-gradient-to-br from-pink-50 via-white to-pink-100 text-black flex justify-between flex-col lg:flex-row items-center gap-14"
      id="about"
    >

      {/* IMAGE */}
      <motion.div
        className="lg:w-1/2 flex justify-center"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 10 }}
        viewport={{ once: true }}
      >

        <img
          className="
            h-[360px] lg:h-[400px] w-auto mx-auto rounded-3xl
            shadow-2xl
            hover:scale-105 transition duration-300
            border-4 border-pink-200
            drop-shadow-[0_0_20px_rgba(236,72,153,0.25)]
          "
          src="/assets/Me.jpeg"
          alt="Tanu Chaudhary"
        />

      </motion.div>

      {/* TEXT */}
      <motion.div
        className="lg:w-1/2"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          type: "spring",
          stiffness: 80,
          damping: 10,
          delay: 0.2
        }}
        viewport={{ once: true }}
      >

        {/* TITLE */}
        <h2 className="lg:text-5xl text-3xl mt-4 lg:mt-0 font-bold tracking-wide">

          About{" "}

          <span className="font-extrabold text-pink-500 drop-shadow-[0_0_10px_rgba(236,72,153,0.5)]">
            Me
          </span>

        </h2>

        {/* LINE */}
        <div className="w-20 h-[4px] bg-pink-500 mt-3 mb-7 rounded-full"></div>

        {/* PARAGRAPH 1 */}
        <p className="text-gray-600 text-sm/7 lg:text-base mt-5 leading-relaxed">

          I am{" "}

          <span className="text-pink-500 font-semibold">
            Tanu Chaudhary
          </span>,

          currently pursuing Master of Computer Applications at

          <span className="text-pink-500 font-semibold">
            {" "}VIT Chennai
          </span>.

          I am passionate about software engineering and enjoy building scalable
          applications that solve real-world problems.

        </p>

        {/* PARAGRAPH 2 */}
        <p className="text-gray-600 text-sm/7 lg:text-base mt-5 leading-relaxed">

          My interests include backend development, distributed systems,
          REST APIs and software architecture. I have strong foundations
          in Data Structures, Algorithms, Object-Oriented Programming,
          DBMS and System Design.

        </p>

        {/* PARAGRAPH 3 */}
        <p className="text-gray-600 text-sm/7 lg:text-base mt-5 leading-relaxed">

          I continuously improve my skills through development projects,
          coding practice and hands-on learning experiences. I enjoy
          exploring modern technologies and writing efficient, scalable
          and clean solutions.

        </p>

        {/* TAGS */}
        <div className="mt-8 flex gap-4 flex-wrap">

          <span className="
            text-sm px-4 py-2
            bg-pink-100
            border border-pink-200
            rounded-full
            text-pink-600
            hover:bg-pink-500
            hover:text-white
            transition duration-300
            shadow-md
          ">
            Software Engineer
          </span>

          <span className="
            text-sm px-4 py-2
            bg-pink-100
            border border-pink-200
            rounded-full
            text-pink-600
            hover:bg-pink-500
            hover:text-white
            transition duration-300
            shadow-md
          ">
            Backend Development
          </span>

          <span className="
            text-sm px-4 py-2
            bg-pink-100
            border border-pink-200
            rounded-full
            text-pink-600
            hover:bg-pink-500
            hover:text-white
            transition duration-300
            shadow-md
          ">
            Problem Solving
          </span>

          <span className="
            text-sm px-4 py-2
            bg-pink-100
            border border-pink-200
            rounded-full
            text-pink-600
            hover:bg-pink-500
            hover:text-white
            transition duration-300
            shadow-md
          ">
            System Design
          </span>

        </div>

      </motion.div>

    </div>
  );
}