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
            bg-purple-100
            text-purple-700
            text-sm
            font-medium
            ">
              Open to AI/ML Engineer Opportunities
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
            
            I am passionate about Artificial Intelligence and Machine Learning, focusing on building intelligent systems that solve real-world problems.

          </p>

          <p className="text-gray-600 leading-8 text-lg mt-6">

            My interests include Machine Learning, Deep Learning, Natural Language Processing, Computer Vision, Generative AI, and Data Analysis. I have strong foundations in Python, Data Structures, Algorithms, Statistics, and AI model development.

          </p>

          <p className="text-gray-600 leading-8 text-lg mt-6">

            I continuously enhance my skills through AI projects, research, coding practice, and hands-on experimentation with modern ML frameworks and technologies.

          </p>


          <div className="grid lg:grid-cols-2 gap-5 mt-10">

            <div className="bg-white rounded-2xl p-5 shadow-lg border hover:-translate-y-2 duration-300">

              <h3 className="font-bold text-red-500">
                Machine Learning
              </h3>

              <p className="text-gray-500 mt-2">
                Developing predictive models using supervised and unsupervised learning techniques.
              </p>

            </div>


            <div className="bg-white rounded-2xl p-5 shadow-lg border hover:-translate-y-2 duration-300">

              <h3 className="font-bold text-red-500">
                Deep Learning
              </h3>

              <p className="text-gray-500 mt-2">
                Building neural network models for computer vision, NLP, and intelligent automation.
              </p>

            </div>


            <div className="bg-white rounded-2xl p-5 shadow-lg border hover:-translate-y-2 duration-300">

              <h3 className="font-bold text-red-500">
                Generative AI
              </h3>

              <p className="text-gray-500 mt-2">
                Exploring LLMs, prompt engineering, AI agents, and modern generative AI applications.
              </p>

            </div>


            <div className="bg-white rounded-2xl p-5 shadow-lg border hover:-translate-y-2 duration-300">

              <h3 className="font-bold text-red-500">
                Data Science
              </h3>

              <p className="text-gray-500 mt-2">
                Working with data preprocessing, visualization, feature engineering, and model evaluation.
              </p>

            </div>

          </div>

        </motion.div>

      </div>

    </div>
  );
}