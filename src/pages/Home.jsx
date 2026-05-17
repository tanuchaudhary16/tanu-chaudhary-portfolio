import React from "react";
import { motion } from "framer-motion";
import { IoLogoLinkedin } from "react-icons/io5";
import { BiLogoGmail } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  return (
    <div
      className="mt-20 bg-gradient-to-br from-pink-50 via-white to-pink-100 text-black min-h-screen"
      id="home"
    >
      <div className="flex justify-between py-10 items-center px-5 lg:px-28 lg:flex-row flex-col-reverse gap-10">

        {/* LEFT */}
        <motion.div
          className="lg:w-[45%]"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >

          <motion.div
            className="text-2xl lg:text-5xl flex flex-col mt-8 lg:mt-0 gap-3 lg:gap-6"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { staggerChildren: 0.2 },
              },
            }}
          >

            <motion.h2
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
              }}
              className="text-xl lg:text-3xl"
            >
              Hello, I'm{" "}
              <span className="text-pink-500 font-extrabold">
                <TypeAnimation
                  sequence={[
                    "Tanu Chaudhary",
                    1500,
                    "Software Engineer",
                    1500,
                    "Backend Developer",
                    1500,
                    "Problem Solver",
                    1500,
                  ]}
                  speed={40}
                  repeat={Infinity}
                />
              </span>
            </motion.h2>

            <motion.h1
              className="font-extrabold text-black text-4xl lg:text-6xl leading-tight"
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
              }}
            >
              Building Scalable
              <span className="text-pink-500"> Software Solutions</span>
            </motion.h1>

            <motion.h2
              className="text-lg lg:text-2xl text-gray-700"
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
              }}
            >
              MCA Student at{" "}
              <span className="font-extrabold text-pink-500">
                VIT Chennai
              </span>
            </motion.h2>

          </motion.div>

          <motion.p
            className="text-gray-500 text-sm lg:text-base mt-6 leading-relaxed"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            Passionate Software Engineer with strong foundations in
            Data Structures, Algorithms, OOP, DBMS, and System Design.
            Experienced in building scalable backend systems, REST APIs,
            and full-stack applications while solving real-world
            problems through technology.
          </motion.p>

          {/* BUTTONS */}
          <motion.div
            className="flex gap-5 mt-8 flex-wrap"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >

            <a
              href="/ResumeSE.pdf"
              download
              className="bg-pink-500 text-white px-6 py-3 rounded-xl font-semibold hover:scale-105 hover:shadow-lg hover:bg-pink-600 duration-300"
            >
              Download Resume
            </a>

            <a
              href="#projects"
              className="border border-pink-500 text-pink-500 px-6 py-3 rounded-xl font-semibold hover:bg-pink-500 hover:text-white hover:scale-105 duration-300"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="border border-pink-300 px-6 py-3 rounded-xl font-semibold hover:border-pink-500 hover:text-pink-500 hover:scale-105 duration-300"
            >
              Contact Me
            </a>

          </motion.div>

          {/* SOCIAL ICONS */}
          <motion.div
            className="flex items-center gap-x-5 mt-10 lg:mt-14"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >

            <motion.a
              href="mailto:tanu10162005@gmail.com"
              className="border border-pink-200 p-3 rounded-full text-pink-500 bg-white shadow-md"
              whileHover={{
                scale: 1.1,
                borderColor: "#ec4899",
                color: "#ec4899",
              }}
            >
              <BiLogoGmail className="w-5 h-5" />
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/tanuchaudhary16/"
              target="_blank"
              rel="noreferrer"
              className="border border-pink-200 p-3 rounded-full text-pink-500 bg-white shadow-md"
              whileHover={{
                scale: 1.1,
                borderColor: "#ec4899",
                color: "#ec4899",
              }}
            >
              <IoLogoLinkedin className="w-5 h-5" />
            </motion.a>

            <motion.a
              href="https://github.com/tanuchaudhary16"
              target="_blank"
              rel="noreferrer"
              className="border border-pink-200 p-3 rounded-full text-pink-500 bg-white shadow-md"
              whileHover={{
                scale: 1.1,
                borderColor: "#ec4899",
                color: "#ec4899",
              }}
            >
              <BsGithub className="w-5 h-5" />
            </motion.a>

          </motion.div>

        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          className="lg:w-[55%] w-full flex justify-center items-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{
            opacity: 1,
            x: 0,
            y: [0, -10, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
        >
          <img
            className="h-[350px] lg:h-[600px] w-auto object-contain drop-shadow-2xl"
            src="/assets/Anime.gif"
            alt="Anime Girl"
          />
        </motion.div>

      </div>
    </div>
  );
}