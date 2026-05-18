import React from "react";
import { motion } from "framer-motion";

const educationData = [
  {
    id: 1,
    college: "Vellore Institute of Technology, Chennai",
    degree: "Master of Computer Applications (MCA)",
    score: "CGPA: 8.62",
    year: "2025 – 2027"
  },

  {
    id: 2,
    college: "Galgotias University, Noida",
    degree: "Bachelor of Computer Applications (AI & ML)",
    score: "CGPA: 8.6",
    year: "2022 – 2025"
  },

  {
    id: 3,
    college: "Banasthali Vidyapith, Rajasthan",
    degree: "Class XII (Higher Secondary)",
    score: "Percentage: 88.5%",
    year: "2022"
  },

  {
    id: 4,
    college: "NR Public School, Khurja, Uttar Pradesh",
    degree: "Class X (Secondary)",
    score: "Percentage: 81.5%",
    year: "2020"
  }
];

export default function Education() {
  return (
    <section
      id="education"
      className="
      py-24
      bg-gradient-to-b
      from-white
      via-gray-50
      to-white
      "
    >
      <div className="px-5 lg:px-28">

        <motion.h2
          className="
          text-4xl
          lg:text-6xl
          font-black
          text-center
          "
          initial={{
            opacity: 0,
            y: -20
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.6
          }}
        >
          Educational{" "}
          <span className="text-red-500">
            Journey
          </span>
        </motion.h2>

        <div className="w-24 h-1 bg-red-500 rounded-full mx-auto mt-4"></div>

        <p
          className="
          text-center
          text-gray-500
          mt-6
          max-w-2xl
          mx-auto
          leading-7
          "
        >
          Academic journey focused on software engineering,
          problem solving and continuous learning.
        </p>

        <div className="relative mt-20">

          <div
            className="
            absolute
            left-5
            lg:left-1/2
            top-0
            h-full
            w-1
            bg-red-100
            "
          ></div>

          <div className="space-y-14">

            {educationData.map((edu, index) => (

              <motion.div
                key={edu.id}
                initial={{
                  opacity: 0,
                  x: index % 2 === 0 ? -60 : 60
                }}
                whileInView={{
                  opacity: 1,
                  x: 0
                }}
                transition={{
                  duration: 0.7
                }}
                viewport={{
                  once: true
                }}
                className={`
                relative
                flex
                ${
                  index % 2 === 0
                    ? "lg:justify-start"
                    : "lg:justify-end"
                }
                `}
              >

                <div
                  className="
                  w-full
                  lg:w-[45%]
                  bg-white
                  border
                  rounded-3xl
                  shadow-xl
                  p-8
                  ml-12
                  lg:ml-0
                  hover:-translate-y-2
                  hover:shadow-2xl
                  duration-300
                  "
                >

                  <div
                    className="
                    absolute
                    top-10
                    left-[6px]
                    lg:left-1/2
                    lg:-translate-x-1/2
                    h-8
                    w-8
                    rounded-full
                    bg-red-500
                    border-4
                    border-white
                    "
                  ></div>

                  <span
                    className="
                    inline-block
                    px-4
                    py-2
                    rounded-full
                    bg-red-50
                    text-red-500
                    text-sm
                    font-semibold
                    "
                  >
                    {edu.year}
                  </span>

                  <h3
                    className="
                    text-2xl
                    font-bold
                    mt-5
                    "
                  >
                    {edu.college}
                  </h3>

                  <p
                    className="
                    text-gray-600
                    mt-4
                    "
                  >
                    {edu.degree}
                  </p>

                  <p
                    className="
                    font-semibold
                    mt-4
                    text-gray-800
                    "
                  >
                    {edu.score}
                  </p>

                </div>

              </motion.div>

            ))}

          </div>

        </div>

      </div>
    </section>
  );
}