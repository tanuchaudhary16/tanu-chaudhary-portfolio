import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div
      className="px-5 lg:px-28 py-24 bg-gradient-to-b from-white via-gray-50 to-white text-black"
      id="about"
    >

      <div className="flex justify-between flex-col lg:flex-row items-center gap-16">

        <motion.div
          className="lg:w-[42%] flex justify-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            type: "spring",
            stiffness: 80,
          }}
          viewport={{ once: true }}
        >

          <div className="relative">

            <div className="absolute -inset-2 bg-red-100 rounded-3xl blur-xl opacity-40"></div>

            <img
              className="
              relative
              h-[360px]
              lg:h-[430px]
              rounded-3xl
              object-cover
              shadow-[0_20px_50px_rgba(0,0,0,0.15)]
              hover:scale-105
              duration-500
              border
              border-white
            "
              src="/assets/Me.jpeg"
              alt="Tanu Chaudhary"
            />

          </div>

        </motion.div>

        <motion.div
          className="lg:w-[58%]"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: .8,
          }}
          viewport={{ once: true }}
        >

          <motion.div
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
          >

            <span className="
            px-4
            py-2
            rounded-full
            bg-green-100
            text-green-700
            text-sm
            font-medium
            ">
              Open to Software Engineering Opportunities
            </span>

          </motion.div>

          <h2 className="text-4xl lg:text-6xl font-black mt-6">

            About{" "}

            <span className="text-red-500">
              Me
            </span>

          </h2>

          <div className="w-20 h-1 rounded-full bg-red-500 mt-4 mb-8"></div>

          <p className="text-gray-600 leading-8 text-lg">

            I am{" "}

            <span className="font-bold text-red-500">
              Tanu Chaudhary
            </span>

            , currently pursuing a Master of Computer Applications at{" "}

            <span className="font-bold">
              VIT Chennai
            </span>.

            I am passionate about software engineering and enjoy building scalable applications that solve real-world challenges.

          </p>

          <p className="text-gray-600 leading-8 text-lg mt-6">

            My interests include backend systems, distributed architectures, APIs and scalable application design. I have strong foundations in Data Structures, Algorithms, Object-Oriented Programming, DBMS and System Design.

          </p>

          <p className="text-gray-600 leading-8 text-lg mt-6">

            I continuously improve through coding practice, project development and hands-on learning experiences. I enjoy solving challenging problems and building efficient software solutions.

          </p>


          <div className="grid lg:grid-cols-2 gap-5 mt-10">

            <div className="bg-white rounded-2xl p-5 shadow-lg border hover:-translate-y-2 duration-300">

              <h3 className="font-bold text-red-500">
                Backend Development
              </h3>

              <p className="text-gray-500 mt-2">
                Building scalable APIs and backend systems using Spring Boot, FastAPI and MERN.
              </p>

            </div>


            <div className="bg-white rounded-2xl p-5 shadow-lg border hover:-translate-y-2 duration-300">

              <h3 className="font-bold text-red-500">
                Problem Solving
              </h3>

              <p className="text-gray-500 mt-2">
                Strong understanding of DSA and solving real-world engineering challenges.
              </p>

            </div>


            <div className="bg-white rounded-2xl p-5 shadow-lg border hover:-translate-y-2 duration-300">

              <h3 className="font-bold text-red-500">
                Software Engineering
              </h3>

              <p className="text-gray-500 mt-2">
                Focused on writing maintainable, efficient and scalable code.
              </p>

            </div>


            <div className="bg-white rounded-2xl p-5 shadow-lg border hover:-translate-y-2 duration-300">

              <h3 className="font-bold text-red-500">
                System Design
              </h3>

              <p className="text-gray-500 mt-2">
                Interested in scalable architectures and distributed systems.
              </p>

            </div>

          </div>

        </motion.div>

      </div>

    </div>
  );
}