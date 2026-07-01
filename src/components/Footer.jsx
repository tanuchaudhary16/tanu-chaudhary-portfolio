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
py-12
flex
flex-col
items-center
gap-7
"
>

<h2 className="text-3xl font-bold text-black">

Let's{" "}

<span className="text-red-500">
Connect
</span>

</h2>

<p
className="
text-center
text-gray-600
max-w-3xl
leading-8
"
>

Software Engineer & AI/ML Engineer passionate about building
scalable applications, intelligent systems, backend platforms
and impactful technology solutions.

Graduated in 2025 and currently pursuing
MCA at VIT Chennai (2025–2027), continuously
improving through projects, AI research and hands-on development.

</p>

<div className="flex gap-7 text-3xl">

<a
href="mailto:tanu10162005@gmail.com?subject=Portfolio%20Contact"
title="Email"
className="
text-gray-600
hover:text-red-500
transition
duration-300
hover:scale-110
"

>

<FaEnvelope/>

</a>

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
hover:scale-110
"

>

<FaGithub/>

</a>

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
hover:scale-110
"

>

<FaLinkedin/>

</a>

</div>

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
