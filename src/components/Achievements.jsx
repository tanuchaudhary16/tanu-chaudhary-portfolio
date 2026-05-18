import React from "react";
import { motion } from "framer-motion";

const achievements = [

{
title:"Research Publication",

tag:"Research",

description:
"Quantum-Inspired Multi-Agent Learning for Blue Carbon Modeling — Research paper currently under review.",

icon:"📄"
},

{
title:"Smart India Hackathon",

tag:"Hackathon",

description:
"Qualified as SIH Pre-Qualifier participant in both 2023 and 2024 and worked on innovative problem-solving projects.",

icon:"🏆"
},

{
title:"Anveshan Participant",

tag:"Competition",

description:
"Participated in Anveshan (2023–24) at Sharda University and collaborated on research and innovation activities.",

icon:"🚀"
},

{
title:"ISRO Science Exhibition",

tag:"Leadership",

description:
"Volunteered in Science & Space Exhibition events associated with ISRO at Galgotias University.",

icon:"🛰️"
},

{
title:"Software Development",

tag:"Growth",

description:
"Actively engaged in software development, problem solving and continuous learning through projects and hands-on practice.",

icon:"💻"
}

];

export default function Achievements(){

return(

<section
id="achievements"
className="
py-24
bg-gradient-to-b
from-white
via-gray-50
to-white
"
>

<div className="px-5 lg:px-28">

<motion.h2

className="
text-4xl
lg:text-6xl
font-black
text-center
"

initial={{
opacity:0,
y:-20
}}

whileInView={{
opacity:1,
y:0
}}

transition={{
duration:.6
}}
>

My{" "}

<span className="text-red-500">
Achievements
</span>

</motion.h2>

<div className="w-24 h-1 bg-red-500 rounded-full mx-auto mt-4"></div>

<p
className="
text-center
text-gray-500
mt-6
max-w-3xl
mx-auto
"
>

Research, competitions, hackathons and achievements contributing to my journey in software engineering.

</p>


<div className="
grid
md:grid-cols-2
lg:grid-cols-3
gap-8
mt-20
">

{achievements.map((item,index)=>(

<motion.div

key={index}

initial={{
opacity:0,
y:40
}}

whileInView={{
opacity:1,
y:0
}}

viewport={{
once:true
}}

transition={{
duration:.5,
delay:index*.1
}}

whileHover={{
y:-10
}}

className="
bg-white
rounded-3xl
border
shadow-xl
p-8
hover:shadow-2xl
duration-300
"
>

<div className="text-5xl">

{item.icon}

</div>

<span
className="
inline-block
mt-5
px-4
py-2
rounded-full
bg-red-50
text-red-500
text-sm
font-semibold
"
>

{item.tag}

</span>

<h3
className="
font-bold
text-2xl
mt-5
"
>

{item.title}

</h3>

<p
className="
text-gray-600
leading-7
mt-4
"
>

{item.description}

</p>

</motion.div>

))}

</div>

</div>

</section>

)

}