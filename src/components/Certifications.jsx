import React from "react";
import { motion } from "framer-motion";

import {
FaAws,
FaDatabase,
FaMicrosoft,
FaExternalLinkAlt,
FaCertificate
} from "react-icons/fa";

import {
SiOracle,
SiGeeksforgeeks
} from "react-icons/si";

const certifications=[

{
id:1,
title:"Web Development Fundamentals",
provider:"IBM",
icon:<FaCertificate/>,
color:"text-blue-500",
link:"https://www.credly.com/badges/0be45b0c-6f33-48d0-ab39-3d720fe72fb5/print"
},

{
id:2,
title:"Database Programming with SQL",
provider:"Oracle",
icon:<FaDatabase/>,
color:"text-red-500",
link:"https://drive.google.com/file/d/1IwXnfhrDs9aFVXRXgSjIuSRVfoNW8uYP/view"
},

{
id:3,
title:"AI & ML Engineering",
provider:"Microsoft",
icon:<FaMicrosoft/>,
color:"text-blue-600",
link:"https://www.coursera.org/account/accomplishments/professional-cert/certificate/77TISTF9SRVL"
},

{
id:4,
title:"AWS Machine Learning Foundations",
provider:"AWS",
icon:<FaAws/>,
color:"text-orange-500",
link:"https://www.credly.com/badges/51b8e140-0e52-49f2-b607-4bef9cfc6a21/print"
},

{
id:5,
title:"Machine Learning & Data Science",
provider:"GeeksforGeeks",
icon:<SiGeeksforgeeks/>,
color:"text-green-500",
link:"https://media.geeksforgeeks.org/courses/certificates/db639b7288b18c42e995a60c68cc2c94.pdf"
},

{
id:6,
title:"OCI 2025 AI Foundations Associate",
provider:"Oracle",
icon:<SiOracle/>,
color:"text-red-600",
link:"https://catalog-education.oracle.com/ords/certview/sharebadge?id=D3C89F8664A88281BF3C1C93BBEDEF884DA345CEB5F7830A23680C4F7CC9DA15"
}

];

export default function Certifications(){

return(

<section
id="certifications"
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
initial={{opacity:0,y:-30}}
whileInView={{opacity:1,y:0}}
transition={{duration:.6}}
viewport={{once:true}}
className="
text-4xl
lg:text-6xl
font-black
text-center
"
>

My{" "}

<span className="text-red-500">
Certifications
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
leading-8
"
>

Industry-recognized certifications showcasing expertise in
Software Engineering, Cloud Computing, AI/ML,
Backend Development and Database Technologies.

</p>

<div
className="
grid
grid-cols-1
md:grid-cols-2
xl:grid-cols-3
gap-8
mt-20
items-stretch
"
>

{certifications.map((certificate,index)=>(

<motion.a
key={certificate.id}
href={certificate.link}
target="_blank"
rel="noreferrer"

initial={{
opacity:0,
y:40
}}

whileInView={{
opacity:1,
y:0
}}

transition={{
duration:.5,
delay:index*.1
}}

viewport={{
once:true
}}

whileHover={{
y:-10
}}

className="
group
bg-white
border
border-gray-200
rounded-3xl
p-8
shadow-lg
hover:shadow-2xl
duration-300
relative
overflow-hidden
flex
flex-col
h-full
"
>

<div
className="
absolute
top-0
left-0
h-1
w-full
bg-red-500
"
/>

<div className="flex justify-between">

<div
className={`
text-5xl
${certificate.color}
`}
>

{certificate.icon}

</div>

<FaExternalLinkAlt
className="
text-gray-400
group-hover:text-red-500
duration-300
"
/>

</div>

<div className="mt-8 flex flex-col flex-1">

<h2
className="
text-2xl
font-bold
leading-snug
"
>

{certificate.title}

</h2>

<p
className="
mt-4
text-gray-500
text-lg
"
>

{certificate.provider}

</p>

<div className="mt-auto pt-8">

<span
className="
inline-flex
justify-center
items-center
bg-red-500
text-white
px-6
py-3
rounded-xl
font-semibold
group-hover:bg-black
duration-300
"
>

View Certificate

</span>

</div>

</div>

</motion.a>

))}

</div>

</div>

</section>

);

}