import React from "react";
import { TbExternalLink } from "react-icons/tb";
import { motion } from "framer-motion";

const projects = [

{
id:1,
title:"Smart City Management System",

description:
"Built a MERN-based platform for complaint resolution and civic service management with optimized backend workflows and real-time complaint tracking.",

stack:["MongoDB","Express","React","Node.js"],

image:"/assets/smartcity.png",

link:"https://github.com/tanuchaudhary16/smart-city-management-system"
},

{
id:2,
title:"Human Suspicious Activity Recognition System",

description:
"Built an AI-powered surveillance system capable of detecting suspicious human activities using computer vision and deep learning techniques.",

stack:["Python","Computer Vision","Deep Learning"],

image:"/assets/suspicious.png",

link:"#"
},

{
id:3,
title:"Crime Prediction System",

description:
"Developed FastAPI backend pipelines integrated with machine learning models for predictive crime analysis and scalable data processing.",

stack:["FastAPI","Python","Machine Learning"],

image:"/assets/crime.jfif",

link:"https://github.com/tanuchaudhary16/Crime-Prediction-System"
},

{
id:4,
title:"Real-Time Disaster Monitoring & Response System",

description:
"Developed scalable backend services for disaster alerts, emergency response coordination and incident handling using Java, Spring Boot and REST APIs.",

stack:["Java","Spring Boot","MySQL","REST APIs"],

image:"/assets/disaster.png",

link:"https://github.com/tanuchaudhary16/Real-Time-Disaster-Prediction-and-Response-System-"
},

{
id:5,
title:"NeuroNudge",

description:
"AI-powered recommendation system that analyzes user mood patterns and behavior to recommend personalized activities.",

stack:["AI","Machine Learning","Python"],

image:"/assets/neuronudge.jfif",

link:"https://github.com/tanuchaudhary16/NeuroNudge"
},

{
id:6,
title:"AI Desktop Partner",

description:
"Built an intelligent desktop assistant capable of automation, voice interaction and productivity enhancement.",

stack:["Python","AI"],

image:"/assets/aidesktop.jfif",

link:"https://github.com/tanuchaudhary16/AI-DESKTOP-PARTNER"
}

];

export default function Projects() {

return (

<section
id="projects"
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
className="text-4xl lg:text-6xl font-black text-center"
initial={{opacity:0,y:-20}}
whileInView={{opacity:1,y:0}}
transition={{duration:.6}}
>

Featured{" "}

<span className="text-red-500">
Projects
</span>

</motion.h2>

<div className="w-24 h-1 bg-red-500 mx-auto mt-4 rounded-full"></div>

<p
className="
text-center
text-gray-500
mt-6
max-w-3xl
mx-auto
leading-relaxed
"
>

Software engineering, AI and full-stack applications
built through practical development and real-world
problem solving.

</p>

<div className="space-y-28 mt-20">

{projects.map((project,index)=>(

<motion.div
key={project.id}

className={`flex flex-col items-center gap-10 ${
index%2===0
?
"lg:flex-row"
:
"lg:flex-row-reverse"
}`}

initial={{
opacity:0,
y:50
}}

whileInView={{
opacity:1,
y:0
}}

transition={{
duration:.7
}}

viewport={{
once:true
}}
>

<div
className="
lg:w-[520px]
overflow-hidden
rounded-3xl
bg-white
shadow-[0_15px_45px_rgba(0,0,0,.08)]
border
"
>

<img
src={project.image}
alt={project.title}

className="
h-[320px]
w-full
object-cover
hover:scale-110
duration-500
"
/>

</div>


<div className="lg:w-1/2">

<p
className="
text-red-500
font-black
text-5xl
"
>

{String(project.id).padStart(2,"0")}

</p>

<h3
className="
text-3xl
font-bold
mt-3
"
>

{project.title}

</h3>


<p
className="
text-gray-600
leading-8
mt-5
"
>

{project.description}

</p>


<div
className="
flex
gap-3
flex-wrap
mt-6
"
>

{project.stack.map((tech,i)=>(

<span
key={i}

className="
px-4
py-2
rounded-full
bg-red-50
text-red-500
text-sm
font-medium
border
"
>

{tech}

</span>

))}

</div>


<a
href={project.link}
target="_blank"
rel="noreferrer"

className="
mt-8
inline-flex
items-center
gap-2
bg-red-500
hover:bg-red-600
text-white
px-6
py-3
rounded-xl
font-semibold
shadow-lg
duration-300
hover:scale-105
"
>

View Github

<TbExternalLink />

</a>

</div>

</motion.div>

))}

</div>

</div>

</section>

);

}