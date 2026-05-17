import React from "react";

export default function Achievements() {
  return (
    <div className="px-5 lg:px-28 py-16" id="achievements">

      <h2 className="text-3xl lg:text-5xl text-center font-bold mb-10">
        Achievements
      </h2>

      <div className="border rounded-2xl p-8 shadow-md">

        <ul className="space-y-4 text-gray-700 leading-relaxed">

          <li>
            Research: Quantum-Inspired Multi-Agent Learning
            for Blue Carbon Modeling (Under Review)
          </li>

          <li>
            Smart India Hackathon Pre-Qualifier
            (2023, 2024)
          </li>

          <li>
            Anveshan Participant (2023–24),
            Sharda University
          </li>

          <li>
            Science & Space Exhibition Volunteer
            for ISRO Event at Galgotias University
          </li>

          <li>
            Active software developer and
            problem solver
          </li>

        </ul>

      </div>

    </div>
  );
}