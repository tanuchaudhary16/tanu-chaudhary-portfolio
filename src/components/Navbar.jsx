import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TbDownload } from "react-icons/tb";
import { HiOutlineMenu, HiX } from "react-icons/hi";

export default function Navbar() {

  const [hasShadow, setHasShadow] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {

    const handleScroll = () => {
      setHasShadow(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  const scrollToSection = (id) => {

    const section = document.getElementById(id);

    if (section) {

      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: "smooth",
      });

    }

    setIsOpen(false);

  };

  const sections = [
    "about",
    "skills",
    "projects",
    "experience",
    "education",
    "achievements",
    "contact",
  ];

  return (

    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 w-full z-50 bg-pink-50/90 backdrop-blur-md text-black p-5 lg:px-28 px-5 transition-all duration-300 ${
        hasShadow
          ? "shadow-[0_4px_20px_rgba(236,72,153,0.2)]"
          : ""
      }`}
    >

      <div className="container mx-auto flex justify-between items-center">

        {/* LOGO */}
        <motion.h1
          onClick={() => scrollToSection("home")}
          className="text-2xl lg:text-3xl font-extrabold cursor-pointer tracking-widest"
          whileHover={{ scale: 1.08 }}
        >
          <span className="text-pink-500">T</span>ANU
        </motion.h1>

        {/* DESKTOP MENU */}
        <ul className="hidden lg:flex items-center gap-x-7 font-semibold">

          {sections.map((section) => (

            <motion.li
              key={section}
              whileHover={{ scale: 1.08 }}
              className="group"
            >

              <button className="hover:text-pink-500 transition duration-300"
                onClick={() => scrollToSection(section)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>

              <span className="w-0 group-hover:w-full transition-all duration-300 h-[2px] bg-pink-500 block rounded-full"></span>

            </motion.li>

          ))}

        </ul>

        {/* RESUME BUTTON */}
        <motion.a
          href="/ResumeSE.pdf"
          target="_blank"
          download
          className="hidden relative lg:inline-block px-4 py-2 font-medium group"
          whileHover={{ scale: 1.05 }}
        >

          <span className="absolute inset-0 w-full h-full transition transform translate-x-1 translate-y-1 bg-pink-500 rounded-xl group-hover:translate-x-0 group-hover:translate-y-0"></span>

          <span className="absolute inset-0 w-full h-full border-2 border-pink-500 rounded-xl"></span>

          <span className="relative text-black group-hover:text-white flex items-center gap-x-3 transition">
            Resume <TbDownload size={16} />
          </span>

        </motion.a>

        {/* MOBILE MENU BUTTON */}
        <motion.button
          className="lg:hidden text-3xl text-pink-500"
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.2 }}
        >
          {isOpen ? <HiX /> : <HiOutlineMenu />}
        </motion.button>

      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>

        {isOpen && (

          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4 }}
            className="lg:hidden fixed top-0 right-0 h-full w-[75%] bg-pink-50 backdrop-blur-xl shadow-2xl text-black"
          >

            <button
              className="absolute top-5 right-5 text-3xl text-pink-500"
              onClick={() => setIsOpen(false)}
            >
              <HiX />
            </button>

            <ul className="flex flex-col items-start ml-10 mt-28 gap-y-8 font-semibold text-lg">

              {sections.map((section) => (

                <motion.li
                  key={section}
                  whileHover={{ x: 5 }}
                >

                  <button
                    className="hover:text-pink-500 transition duration-300"
                    onClick={() => scrollToSection(section)}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </button>

                </motion.li>

              ))}

              {/* MOBILE RESUME */}
              <motion.a
                href="/ResumeSE.pdf"
                target="_blank"
                download
                whileHover={{ scale: 1.05 }}
                className="relative inline-block px-5 py-3 font-semibold group mt-5"
              >

                <span className="absolute inset-0 w-full h-full bg-pink-500 rounded-xl"></span>

                <span className="relative text-white flex items-center gap-x-3">
                  Resume <TbDownload size={16} />
                </span>

              </motion.a>

            </ul>

          </motion.div>

        )}

      </AnimatePresence>

    </motion.nav>
  );
}