import React, { useState } from "react";
import { motion } from "framer-motion";

import {
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,
  FaDatabase,
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaAws,
  FaAngular,
  FaPhp
} from "react-icons/fa";

import {
  SiC,
  SiMongodb,
  SiSpringboot,
  SiFastapi,
  SiDocker,
  SiCplusplus,
  SiMysql,
  SiJquery,
  SiExpress,
  SiOpenstack
} from "react-icons/si";

export default function Skills() {

  const [skills] = useState([

    { id: 1, name: "Java", icon: <FaJava size={50} className="text-pink-500" /> },
    { id: 2, name: "Python", icon: <FaPython size={50} className="text-fuchsia-500" /> },
    { id: 3, name: "C++", icon: <SiCplusplus size={50} className="text-rose-500" /> },
    { id: 4, name: "JavaScript", icon: <FaJs size={50} className="text-pink-400" /> },
    { id: 5, name: "C", icon: <SiC size={50} className="text-fuchsia-400" /> },

    { id: 6, name: "React.js", icon: <FaReact size={50} className="text-pink-500" /> },
    { id: 7, name: "Node.js", icon: <FaNodeJs size={50} className="text-rose-500" /> },
    { id: 8, name: "Spring Boot", icon: <SiSpringboot size={50} className="text-pink-400" /> },
    { id: 9, name: "FastAPI", icon: <SiFastapi size={50} className="text-fuchsia-500" /> },
    { id: 10, name: "Angular", icon: <FaAngular size={50} className="text-pink-500" /> },

    { id: 11, name: "MongoDB", icon: <SiMongodb size={50} className="text-rose-500" /> },
    { id: 12, name: "MySQL", icon: <SiMysql size={50} className="text-pink-400" /> },
    { id: 13, name: "SQL", icon: <FaDatabase size={50} className="text-fuchsia-500" /> },
    { id: 14, name: "HTML", icon: <FaHtml5 size={50} className="text-pink-500" /> },
    { id: 15, name: "CSS", icon: <FaCss3Alt size={50} className="text-rose-500" /> },

    { id: 16, name: "PHP", icon: <FaPhp size={50} className="text-pink-400" /> },
    { id: 17, name: "jQuery", icon: <SiJquery size={50} className="text-fuchsia-500" /> },
    { id: 18, name: "AJAX", icon: <FaDatabase size={50} className="text-pink-500" /> },
    { id: 19, name: "Express.js", icon: <SiExpress size={50} className="text-rose-500" /> },
    { id: 20, name: "REST APIs", icon: <FaDatabase size={50} className="text-pink-400" /> },

    { id: 21, name: "Machine Learning", icon: <FaDatabase size={50} className="text-fuchsia-500" /> },
    { id: 22, name: "Deep Learning", icon: <FaDatabase size={50} className="text-pink-500" /> },
    { id: 23, name: "Artificial Intelligence", icon: <FaDatabase size={50} className="text-rose-500" /> },

    { id: 24, name: "Git", icon: <FaGitAlt size={50} className="text-pink-400" /> },
    { id: 25, name: "Docker", icon: <SiDocker size={50} className="text-fuchsia-500" /> },
    { id: 26, name: "AWS", icon: <FaAws size={50} className="text-pink-500" /> },
    { id: 27, name: "OpenStack", icon: <SiOpenstack size={50} className="text-rose-500" /> }

  ]);

  return (

    <div
      className="mt-3 lg:mt-16 py-14"
      id="skills"
    >

      <div className="px-5 lg:px-28">

        {/* TITLE */}
        <motion.h2
          className="text-3xl lg:text-5xl text-center font-extrabold tracking-wide"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          My{" "}
          <span className="text-pink-500 drop-shadow-[0_0_12px_rgba(236,72,153,0.7)]">
            Skills
          </span>
        </motion.h2>

        {/* SKILLS */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-12 lg:mt-16 place-items-center">

          {skills.map((skill) => (

            <motion.div
              key={skill.id}
              whileHover={{
                scale: 1.08,
                y: -8,
              }}
              className="
                bg-white/70
                backdrop-blur-lg
                border border-pink-200
                hover:border-pink-400
                shadow-lg
                hover:shadow-pink-200
                transition-all duration-300
                cursor-pointer
                rounded-3xl
                p-4
                h-40 w-40 lg:h-48 lg:w-48
                flex flex-col items-center justify-center gap-5
              "
            >

              {skill.icon}

              <p className="text-center font-semibold text-sm lg:text-base text-gray-700">
                {skill.name}
              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </div>
  );
}