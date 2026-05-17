import React from 'react';
import { TbExternalLink } from "react-icons/tb";
import { motion } from 'framer-motion';

const projects = [

  {
    id: 1,
    title: "Real-Time Disaster Monitoring & Response System",
    description:
      "Developed scalable backend services using Java, Spring Boot, MySQL and REST APIs for real-time disaster alerts, emergency response handling, and incident management.",
    image: "/assets/disaster.png",
    link: "https://github.com/tanuchaudhary16/Real-Time-Disaster-Prediction-and-Response-System-"
  },

  {
    id: 2,
    title: "Smart City Management System",
    description:
      "Built a MERN-based platform for complaint resolution and civic service management with real-time complaint tracking and optimized backend workflows.",
    image: "/assets/smartcity.png",
    link: "https://github.com/tanuchaudhary16/smart-city-management-system"
  },

  {
    id: 3,
    title: "Crime Prediction System",
    description:
      "Developed FastAPI backend pipelines integrated with machine learning models for predictive crime analysis and scalable data processing.",
    image: "/assets/crime.jfif",
    link: "https://github.com/tanuchaudhary16/Crime-Prediction-System"
  },

  {
    id: 4,
    title: "NeuroNudge",
    description:
      "AI-powered recommendation system that understands user facial expressions and mood patterns to recommend suitable activities and personalized actions.",
    image: "/assets/neuronudge.jfif",
    link: "https://github.com/tanuchaudhary16/NeuroNudge"
  },

  {
    id: 5,
    title: "AI Desktop Partner",
    description:
      "Intelligent desktop assistant built using AI technologies capable of handling tasks, voice interaction, automation and improving user productivity.",
    image: "/assets/aidesktop.jfif",
    link: "https://github.com/tanuchaudhary16/AI-DESKTOP-PARTNER"
  },

  {
    id: 6,
    title: "Human Suspicious Activity Recognition System",
    description:
      "Built an AI-based surveillance system capable of identifying suspicious human activities using computer vision and deep learning techniques.",
    image: "/assets/suspicious.png",
    link: "#"
  },

  {
    id: 7,
    title: "Amazon Clone",
    description:
      "Developed a responsive Amazon-inspired ecommerce interface with product browsing, authentication and shopping features.",
    image: "/assets/amazon.jpg",
    link: "https://github.com/tanuchaudhary16/Amazon_Clone"
  },

  {
    id: 8,
    title: "Hangman Game",
    description:
      "Interactive Hangman game with clean UI and dynamic word generation built using JavaScript logic and responsive design principles.",
    image: "/assets/hangman.png",
    link: "https://github.com/tanuchaudhary16/Hangman-Game"
  }

];

export default function Projects() {

  return (

    <div
      className="bg-gradient-to-br from-pink-50 via-white to-pink-100 px-5 lg:px-28 py-20 text-black"
      id="projects"
    >

      {/* TITLE */}
      <h2 className="text-3xl lg:text-5xl text-center mb-4 font-bold">

        My{" "}

        <span className="text-pink-500 drop-shadow-[0_0_10px_rgba(236,72,153,0.5)]">
          Projects
        </span>

      </h2>

      {/* SUBTITLE */}
      <p className="text-center text-gray-600 mb-20 max-w-3xl mx-auto leading-relaxed">

        A collection of software engineering, full-stack development,
        backend systems and AI-powered applications built through
        hands-on learning and real-world problem solving.

      </p>

      {/* PROJECTS */}
      <div className="space-y-20">

        {projects.map((project, index) => (

          <motion.div
            key={project.id}
            className={`flex items-center flex-col ${
              index % 2 === 0
                ? "lg:flex-row"
                : "lg:flex-row-reverse"
            } gap-12`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: index * 0.15
            }}
            viewport={{ once: true }}
          >

            {/* IMAGE */}
            <div className="
              lg:w-[520px]
              w-full
              rounded-3xl
              overflow-hidden
              border border-pink-200
              shadow-2xl
              bg-white
            ">

              <img
                className="
                  w-full
                  h-[280px]
                  object-cover
                  transition duration-500
                  hover:scale-110
                  hover:brightness-90
                "
                src={project.image}
                alt={project.title}
              />

            </div>

            {/* CONTENT */}
            <div className="lg:w-1/2 space-y-5">

              {/* PROJECT NUMBER */}
              <h2 className="text-5xl font-extrabold text-pink-500">

                {String(project.id).padStart(2, "0")}

              </h2>

              {/* TITLE */}
              <p className="font-bold text-black text-2xl lg:text-3xl leading-snug">

                {project.title}

              </p>

              {/* DESCRIPTION */}
              <p className="text-gray-600 text-sm lg:text-base leading-relaxed">

                {project.description}

              </p>

              {/* BUTTON */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex items-center gap-2
                  bg-pink-500
                  hover:bg-pink-600
                  text-white
                  px-5 py-3
                  rounded-2xl
                  transition duration-300
                  shadow-lg
                  font-semibold
                "
              >

                View GitHub

                <TbExternalLink size={20} />

              </a>

            </div>

          </motion.div>

        ))}

      </div>

    </div>
  );
}