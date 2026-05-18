import React from "react";
import { motion } from "framer-motion";
import { IoLogoLinkedin } from "react-icons/io5";
import { BiLogoGmail } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import { TypeAnimation } from "react-type-animation";

export default function Home() {

  return (

    <div
      id="home"
      className="mt-20 bg-gradient-to-b from-white via-gray-50 to-white text-black"
    >

      <div className="flex justify-between py-10 items-center px-5 lg:px-28 lg:flex-row flex-col-reverse gap-6">

        {/* LEFT */}
        <motion.div
          className="lg:w-[48%]"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >

          <motion.div
            className="flex flex-col gap-5"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: .2
                }
              }
            }}
          >

            {/* TOP TAG */}
            <motion.div
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 }
              }}
            >

              <span className="bg-red-50 text-red-500 px-5 py-2 rounded-full text-sm font-semibold">

                MCA Student • Software Engineer

              </span>

            </motion.div>

            {/* NAME */}
            <motion.h2
              className="text-xl lg:text-3xl font-medium"
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 }
              }}
            >

              Hello, I'm{" "}

              <span className="text-red-500 font-black">

                <TypeAnimation
                  sequence={[
                    "Tanu Chaudhary",
                    1500,
                    "Backend Developer",
                    1500,
                    "Problem Solver",
                    1500,
                    "Software Engineer",
                    1500,
                  ]}
                  speed={40}
                  repeat={Infinity}
                />

              </span>

            </motion.h2>

            {/* MAIN TITLE */}
            <motion.h1
              className="font-black text-5xl lg:text-7xl leading-tight"
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 }
              }}
            >

              Building Modern

              <span className="text-red-500">
                {" "}Software
              </span>

              <br />

              Solutions

            </motion.h1>

            {/* SUBTITLE */}
            <motion.h2
              className="text-lg lg:text-2xl text-gray-600"
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 }
              }}
            >

              MCA @ VIT Chennai (2025–2027)

            </motion.h2>

          </motion.div>

          {/* DESCRIPTION */}
          <motion.p
            className="text-gray-500 text-base mt-8 leading-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: .5 }}
          >

            Passionate Software Engineer with strong foundations in
            Data Structures, Algorithms, OOP, DBMS and System Design.
            Experienced in backend systems, REST APIs, full-stack
            applications and solving real-world problems through technology.

          </motion.p>

          {/* BUTTON */}
          <motion.div
            className="flex gap-5 mt-10 flex-wrap"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: .7 }}
          >

            <a
              href="/ResumeSE.pdf"
              download="Tanu_Chaudhary_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="
              bg-red-500
              hover:bg-red-600
              text-white
              px-8
              py-4
              rounded-2xl
              font-semibold
              shadow-lg
              duration-300
              hover:scale-105
              "
            >

              Download Resume

            </a>

          </motion.div>

          {/* SOCIALS */}
          <motion.div
            className="flex gap-5 mt-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: .9 }}
          >

            <a
              href="mailto:tanu10162005@gmail.com"
              className="
              p-4
              bg-white
              rounded-full
              shadow-lg
              border
              hover:scale-110
              hover:text-red-500
              duration-300
              "
            >

              <BiLogoGmail size={24} />

            </a>

            <a
              href="https://www.linkedin.com/in/tanuchaudhary16/"
              target="_blank"
              rel="noreferrer"
              className="
              p-4
              bg-white
              rounded-full
              shadow-lg
              border
              hover:scale-110
              hover:text-red-500
              duration-300
              "
            >

              <IoLogoLinkedin size={24} />

            </a>

            <a
              href="https://github.com/tanuchaudhary16"
              target="_blank"
              rel="noreferrer"
              className="
              p-4
              bg-white
              rounded-full
              shadow-lg
              border
              hover:scale-110
              hover:text-red-500
              duration-300
              "
            >

              <BsGithub size={24} />

            </a>

          </motion.div>

        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          className="lg:w-[50%] flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >

          <img
            src="/assets/Anime.gif"
            alt="anime"
            className="
            h-[300px]
            lg:h-[520px]
            object-contain
            drop-shadow-2xl
            select-none
            pointer-events-none
            "
          />

        </motion.div>

      </div>

    </div>

  );

}