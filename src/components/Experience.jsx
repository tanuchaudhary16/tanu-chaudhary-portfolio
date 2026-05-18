import React from "react";
import { motion } from "framer-motion";

export default function Experience() {
  return (

    <section
      id="experience"
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
            opacity:0,
            y:-20
          }}
          whileInView={{
            opacity:1,
            y:0
          }}
          transition={{
            duration:.6
          }}
        >

          Professional{" "}

          <span className="text-red-500">
            Experience
          </span>

        </motion.h2>

        <div className="w-24 h-1 bg-red-500 mx-auto rounded-full mt-4"></div>

        <p
          className="
          text-center
          text-gray-500
          mt-6
          max-w-3xl
          mx-auto
          leading-relaxed
          "
        >

          Practical exposure, AI learning experiences and software
          engineering activities contributing to technical growth.

        </p>


        <motion.div

          initial={{
            opacity:0,
            y:50
          }}

          whileInView={{
            opacity:1,
            y:0
          }}

          viewport={{
            once:true
          }}

          transition={{
            duration:.8
          }}

          className="
          mt-20
          bg-white
          rounded-[35px]
          p-8
          lg:p-12
          border
          border-red-100
          shadow-2xl
          hover:-translate-y-2
          duration-300
          relative
          overflow-hidden
          "
        >

          <div
            className="
            absolute
            top-0
            left-0
            h-2
            w-full
            bg-gradient-to-r
            from-red-400
            via-pink-500
            to-red-400
            "
          ></div>


          <div className="flex flex-wrap items-center gap-4">

            <span
              className="
              px-5
              py-2
              bg-red-50
              text-red-500
              rounded-full
              font-semibold
              "
            >
              Internship
            </span>

            <span
              className="
              px-5
              py-2
              bg-gray-100
              rounded-full
              text-gray-600
              "
            >
              Jul 2024 – Sep 2024
            </span>

          </div>


          <h2
            className="
            text-3xl
            lg:text-5xl
            font-black
            mt-8
            leading-tight
            "
          >

            Google Generative AI
            <span className="text-red-500">
              {" "}Virtual Internship
            </span>

          </h2>


          <p
            className="
            text-lg
            text-gray-500
            mt-4
            "
          >
            AICTE | Google for Developers
          </p>


          <div
            className="
            grid
            lg:grid-cols-2
            gap-6
            mt-10
            "
          >

            <div className="bg-red-50 rounded-2xl p-6">

              <h3 className="font-bold text-lg mb-3">
                Key Contributions
              </h3>

              <ul className="space-y-3 text-gray-600">

                <li>
                  • Applied prompt engineering techniques for intelligent automation.
                </li>

                <li>
                  • Explored practical Generative AI applications and workflows.
                </li>

                <li>
                  • Learned modern software engineering concepts and AI integration.
                </li>

              </ul>

            </div>


            <div className="bg-gray-50 rounded-2xl p-6">

              <h3 className="font-bold text-lg mb-3">
                Skills Developed
              </h3>

              <ul className="space-y-3 text-gray-600">

                <li>• Problem Solving</li>

                <li>• Prompt Engineering</li>

                <li>• Artificial Intelligence</li>

                <li>• Analytical Thinking</li>

                <li>• Software Development</li>

              </ul>

            </div>

          </div>

        </motion.div>

      </div>

    </section>

  );
}