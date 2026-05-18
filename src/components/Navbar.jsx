import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TbDownload } from "react-icons/tb";
import { HiOutlineMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [hasShadow, setHasShadow] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasShadow(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  const scrollToSection = (id) => {
    const section =
      document.getElementById(id);

    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: "smooth",
      });
    }

    setIsOpen(false);
  };

  const sections = [
    "home",
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
      initial={{
        y: -100,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        duration: .6,
      }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 px-5 lg:px-28 py-4 backdrop-blur-xl bg-white/80 border-b border-gray-100 ${
        hasShadow
          ? "shadow-[0_8px_30px_rgba(0,0,0,0.08)]"
          : ""
      }`}
    >
      <div className="flex justify-between items-center">

        <motion.h1
          onClick={() =>
            scrollToSection("home")
          }
          whileHover={{
            scale: 1.06,
          }}
          className="cursor-pointer text-2xl lg:text-3xl font-black tracking-wide"
        >
          <span className="text-red-500">
            T
          </span>
          anu
        </motion.h1>

        <ul className="hidden lg:flex items-center gap-8">

          {sections.map((section) => (
            <motion.li
              key={section}
              whileHover={{
                y: -2,
              }}
              className="relative group"
            >
              <button
                onClick={() =>
                  scrollToSection(section)
                }
                className="capitalize font-medium text-gray-700 hover:text-red-500 duration-300"
              >
                {section}
              </button>

              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-red-500 transition-all duration-300 group-hover:w-full"></span>

            </motion.li>
          ))}
        </ul>

        <motion.a
          href="/ResumeSE.pdf"
          target="_blank"
          download
          whileHover={{
            scale: 1.05,
          }}
          className="hidden lg:flex items-center gap-2 bg-red-500 text-white px-5 py-3 rounded-xl font-semibold shadow-lg hover:shadow-red-200 transition"
        >
          Resume
          <TbDownload />
        </motion.a>

        <motion.button
          whileTap={{
            scale: .9,
          }}
          className="lg:hidden text-3xl text-red-500"
          onClick={() =>
            setIsOpen(!isOpen)
          }
        >
          {isOpen ? (
            <HiX />
          ) : (
            <HiOutlineMenu />
          )}
        </motion.button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              x: "100%",
            }}
            animate={{
              x: 0,
            }}
            exit={{
              x: "100%",
            }}
            transition={{
              duration: .4,
            }}
            className="lg:hidden fixed top-0 right-0 h-screen w-[75%] bg-white shadow-2xl p-8"
          >

            <button
              className="absolute top-5 right-5 text-3xl text-red-500"
              onClick={() =>
                setIsOpen(false)
              }
            >
              <HiX />
            </button>

            <ul className="flex flex-col mt-24 gap-8 text-lg">

              {sections.map(
                (section) => (
                  <motion.li
                    key={section}
                    whileHover={{
                      x: 5,
                    }}
                  >
                    <button
                      onClick={() =>
                        scrollToSection(
                          section
                        )
                      }
                      className="capitalize hover:text-red-500 font-medium"
                    >
                      {section}
                    </button>
                  </motion.li>
                )
              )}

              <motion.a
                href="/ResumeSE.pdf"
                download
                whileHover={{
                  scale: 1.05,
                }}
                className="bg-red-500 text-white rounded-xl px-5 py-3 flex items-center gap-2 justify-center font-semibold mt-4"
              >
                Resume
                <TbDownload />
              </motion.a>

            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}