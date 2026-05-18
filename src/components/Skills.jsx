import React from "react";
import { motion } from "framer-motion";

import {
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,
  FaJava,
  FaGitAlt,
  FaAws,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaAngular,
  FaPhp,
  FaCuttlefish,
  FaDatabase,
  FaBrain,
  FaNetworkWired,
  FaCode
} from "react-icons/fa";

import {
  SiMongodb,
  SiSpringboot,
  SiFastapi,
  SiDocker,
  SiCplusplus,
  SiMysql,
  SiExpress,
  SiPostman,
  SiJquery,
  SiOpenstack,
  SiFirebase
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";

export default function Skills() {
  const categories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Java", icon: <FaJava size={35}/> },
        { name: "Python", icon: <FaPython size={35}/> },
        { name: "C++", icon: <SiCplusplus size={35}/> },
        { name: "JavaScript", icon: <FaJs size={35}/> },
        { name: "C", icon: <FaCuttlefish size={35}/> },
        { name: "PHP", icon: <FaPhp size={35}/> }
      ]
    },

    {
      title: "Frontend Development",
      skills: [
        { name: "React.js", icon: <FaReact size={35}/> },
        { name: "Angular", icon: <FaAngular size={35}/> },
        { name: "HTML", icon: <FaHtml5 size={35}/> },
        { name: "CSS", icon: <FaCss3Alt size={35}/> },
        { name: "AJAX", icon: <FaCode size={35}/> },
        { name: "jQuery", icon: <SiJquery size={35}/> }
      ]
    },

    {
      title: "Backend & Systems",
      skills: [
        { name: "Node.js", icon: <FaNodeJs size={35}/> },
        { name: "Spring Boot", icon: <SiSpringboot size={35}/> },
        { name: "FastAPI", icon: <SiFastapi size={35}/> },
        { name: "Express.js", icon: <SiExpress size={35}/> },
        { name: "REST APIs", icon: <FaNetworkWired size={35}/> },
        { name: "Distributed Systems", icon: <FaNetworkWired size={35}/> },
        { name: "Microservices", icon: <FaNetworkWired size={35}/> },
        { name: "Concurrency", icon: <FaCode size={35}/> },
        { name: "Multi-threading", icon: <FaCode size={35}/> },
        { name: "System Design", icon: <FaCode size={35}/> }
      ]
    },

    {
      title: "Database",
      skills: [
        { name: "MySQL", icon: <SiMysql size={35}/> },
        { name: "MongoDB", icon: <SiMongodb size={35}/> },
        { name: "Firebase", icon: <SiFirebase size={35}/> }
      ]
    },

    {
      title: "Core Computer Science",
      skills: [
        { name: "Data Structures", icon: <FaCode size={35}/> },
        { name: "Algorithms", icon: <FaCode size={35}/> },
        { name: "OOP", icon: <FaCode size={35}/> },
        { name: "DBMS", icon: <FaDatabase size={35}/> },
        { name: "Operating Systems", icon: <FaCode size={35}/> },
        { name: "Computer Networks", icon: <FaNetworkWired size={35}/> }
      ]
    },

    {
      title: "Machine Learning & AI",
      skills: [
        { name: "Machine Learning", icon: <FaBrain size={35}/> },
        { name: "Deep Learning", icon: <FaBrain size={35}/> },
        { name: "Artificial Intelligence", icon: <FaBrain size={35}/> },
        { name: "Natural Language Processing", icon: <FaBrain size={35}/> },
        { name: "Computer Vision", icon: <FaBrain size={35}/> },
        { name: "Transformers", icon: <FaBrain size={35}/> },
        { name: "Data Preprocessing", icon: <FaBrain size={35}/> },
        { name: "Model Evaluation", icon: <FaBrain size={35}/> },
        { name: "Neural Networks", icon: <FaBrain size={35}/> },
        { name: "Predictive Analytics", icon: <FaBrain size={35}/> }
      ]
    },

    {
      title: "Tools & Platforms",
      skills: [
        { name: "Git", icon: <FaGitAlt size={35}/> },
        { name: "GitHub", icon: <FaGithub size={35}/> },
        { name: "Docker", icon: <SiDocker size={35}/> },
        { name: "AWS EC2", icon: <FaAws size={35}/> },
        { name: "AWS S3", icon: <FaAws size={35}/> },
        { name: "OpenStack", icon: <SiOpenstack size={35}/> },
        { name: "Postman", icon: <SiPostman size={35}/> },
        { name: "VS Code", icon: <VscVscode size={35}/> }
      ]
    }
  ];

  return (
    <section
      id="skills"
      className="py-24 bg-gradient-to-b from-white via-gray-50 to-white"
    >
      <div className="px-5 lg:px-28">

        <motion.h2
          className="text-4xl lg:text-6xl font-black text-center"
          initial={{opacity:0,y:-30}}
          whileInView={{opacity:1,y:0}}
          transition={{duration:.6}}
        >
          Technical <span className="text-red-500">Skills</span>
        </motion.h2>

        <div className="w-24 h-1 bg-red-500 mx-auto rounded-full mt-4"></div>

        <p className="text-center text-gray-500 mt-6 max-w-3xl mx-auto">
          Technologies, tools, AI frameworks and software engineering fundamentals used to build scalable systems.
        </p>

        <div className="space-y-14 mt-16">

          {categories.map((category,index)=>(

            <motion.div
              key={index}
              initial={{opacity:0,y:30}}
              whileInView={{opacity:1,y:0}}
              transition={{duration:.5}}
            >

              <h3 className="text-2xl font-bold mb-6 text-gray-800">
                {category.title}
              </h3>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">

                {category.skills.map((skill,i)=>(

                  <motion.div
                    key={i}
                    whileHover={{y:-8,scale:1.04}}
                    className="bg-white rounded-3xl p-6 border shadow-lg hover:shadow-2xl hover:border-red-200 transition-all duration-300 flex flex-col items-center justify-center gap-4 min-h-[130px]"
                  >

                    <div className="text-red-500">
                      {skill.icon}
                    </div>

                    <p className="font-medium text-center text-sm">
                      {skill.name}
                    </p>

                  </motion.div>

                ))}

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}