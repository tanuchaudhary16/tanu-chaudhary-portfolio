// Footer.jsx

import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope
} from "react-icons/fa";

export default function Footer() {

  return (

    <footer
      className="
      mt-24
      border-t
      border-gray-200
      bg-white
      "
    >

      <div
        className="
        px-5
        lg:px-28
        py-10
        flex
        flex-col
        items-center
        gap-6
        "
      >

        {/* TITLE */}
        <h2 className="text-3xl font-bold text-black">
          Let's{" "}
          <span className="text-red-500">
            Connect
          </span>
        </h2>

        {/* SOCIAL ICONS */}
        <div className="flex gap-6 text-3xl">

          {/* EMAIL */}
          <a
            href="mailto:tanu10162005@gmail.com"
            title="Email"
            className="
            text-gray-600
            hover:text-red-500
            transition
            duration-300
            "
          >
            <FaEnvelope />
          </a>

          {/* GITHUB */}
          <a
            href="https://github.com/tanuchaudhary16"
            target="_blank"
            rel="noreferrer"
            title="GitHub"
            className="
            text-gray-600
            hover:text-black
            transition
            duration-300
            "
          >
            <FaGithub />
          </a>

          {/* LINKEDIN */}
          <a
            href="https://www.linkedin.com/in/tanuchaudhary16/"
            target="_blank"
            rel="noreferrer"
            title="LinkedIn"
            className="
            text-gray-600
            hover:text-blue-600
            transition
            duration-300
            "
          >
            <FaLinkedin />
          </a>

        </div>

        {/* COPYRIGHT */}
        <div
          className="
          w-full
          border-t
          border-gray-200
          pt-6
          flex
          flex-col
          lg:flex-row
          justify-between
          items-center
          text-gray-500
          text-sm
          gap-3
          "
        >

          <p>
            © 2026 Tanu Chaudhary. All Rights Reserved.
          </p>

          <p className="text-red-500 font-medium">
            Designed & Developed by Tanu Chaudhary
          </p>

        </div>

      </div>

    </footer>

  );

}