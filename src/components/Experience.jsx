import React from "react";

export default function Experience() {
  return (
    <div className="px-5 lg:px-28 py-16" id="experience">
      <h2 className="text-3xl lg:text-5xl text-center font-bold mb-10">
        Experience
      </h2>

      <div className="border rounded-2xl p-8 shadow-md">
        <h3 className="text-2xl font-bold">
          Google Generative AI Virtual Internship
        </h3>

        <p className="text-gray-500 mb-4">
          Jul 2024 – Sep 2024
        </p>

        <ul className="list-disc pl-5 space-y-2">
          <li>Applied prompt engineering for intelligent automation</li>
          <li>Explored Generative AI applications and workflows</li>
          <li>Strengthened development and problem-solving skills</li>
        </ul>
      </div>
    </div>
  );
}