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
      className="
      mt-20
      min-h-screen
      text-black
      bg-cover
      bg-center
      bg-no-repeat
      relative
      overflow-hidden
      "
      style={{
        backgroundImage: "url('/assets/HomeImage.png')"
      }}
    >

      <div className="absolute inset-0 bg-white/20"></div>

      <div className="absolute inset-0 bg-gradient-to-r from-white/40 via-white/10 to-transparent"></div>

      <div className="
      relative z-10
      flex
      justify-between
      py-10
      items-center
      px-5
      lg:px-28
      lg:flex-row
      flex-col-reverse
      gap-6
      min-h-screen
      ">

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

            <motion.div
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 }
              }}
            >

              <span
                className="
                bg-white/70
                backdrop-blur-md
                text-red-500
                px-5
                py-2
                rounded-full
                text-sm
                font-semibold
                shadow-md
                border border-white/50
                "
              >

                MCA Student • Software + AI/ML Engineer

              </span>

            </motion.div>


            <motion.h2
              className="text-xl lg:text-3xl font-medium text-black"
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
                    "Software Engineer",
                    1500,
                    "AI Engineer",
                    1500,
                    "ML Engineer",
                    1500,
                    "Backend Developer",
                    1500,
                    "Problem Solver",
                    1500
                  ]}
                  speed={40}
                  repeat={Infinity}
                />

              </span>

            </motion.h2>


            <motion.h1
              className="
              font-black
              text-5xl
              lg:text-7xl
              leading-tight
              text-black
              "
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 }
              }}
            >

              Building Intelligent

              <span className="text-red-500">
                {" "}Software
              </span>

              <br />

              & AI Solutions

            </motion.h1>


            <motion.h2
              className="text-lg lg:text-2xl text-gray-700 font-medium"
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 }
              }}
            >

              MCA @ VIT Chennai (2025–2027)

            </motion.h2>

          </motion.div>


          <motion.p
            className="
            text-gray-700
            text-base
            mt-8
            leading-8
            max-w-2xl
            "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: .5 }}
          >

            Passionate Software & AI/ML Engineer with strong foundations in
            Data Structures, Algorithms, OOP, DBMS, System Design and Machine Learning.
            Experienced in backend systems, REST APIs, full-stack development,
            Deep Learning, Computer Vision and building intelligent applications
            to solve real-world problems.

          </motion.p>


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
              shadow-xl
              duration-300
              hover:scale-105
              "
            >

              Download Resume

            </a>

          </motion.div>


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
              bg-white/70
              backdrop-blur-md
              rounded-full
              shadow-lg
              border border-white/50
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
              bg-white/70
              backdrop-blur-md
              rounded-full
              shadow-lg
              border border-white/50
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
              bg-white/70
              backdrop-blur-md
              rounded-full
              shadow-lg
              border border-white/50
              hover:scale-110
              hover:text-red-500
              duration-300
              "
            >
              <BsGithub size={24} />
            </a>

          </motion.div>

        </motion.div>

        <div className="lg:w-[50%]"></div>

      </div>

    </div>

  );

}