import React from "react";

export default function Education() {
  return (
    <div className="px-5 lg:px-28 py-16" id="education">

      <h2 className="text-3xl lg:text-5xl text-center font-bold mb-10">
        Education
      </h2>

      <div className="space-y-6">

        <div className="border p-6 rounded-2xl shadow hover:shadow-xl transition">
          <h3 className="font-bold text-xl">
            Vellore Institute of Technology, Chennai
          </h3>

          <p className="text-gray-600">
            Master of Computer Applications (MCA)
          </p>

          <p>CGPA: 8.62</p>

          <p>Expected Graduation: 2027</p>
        </div>


        <div className="border p-6 rounded-2xl shadow hover:shadow-xl transition">
          <h3 className="font-bold text-xl">
            Galgotias University, Noida
          </h3>

          <p className="text-gray-600">
            Bachelor of Computer Applications (AI & ML)
          </p>

          <p>CGPA: 8.6</p>

          <p>2022 – 2025</p>
        </div>


        <div className="border p-6 rounded-2xl shadow hover:shadow-xl transition">
          <h3 className="font-bold text-xl">
            Banasthali Vidyapith, Rajasthan
          </h3>

          <p className="text-gray-600">
            Class XII (Higher Secondary)
          </p>

          <p>Percentage: 88.5%</p>
        </div>


        <div className="border p-6 rounded-2xl shadow hover:shadow-xl transition">
          <h3 className="font-bold text-xl">
            NR Public School, Khurja, Uttar Pradesh
          </h3>

          <p className="text-gray-600">
            Class X (Secondary)
          </p>

          <p>Percentage: 81.5%</p>
        </div>

      </div>

    </div>
  );
}