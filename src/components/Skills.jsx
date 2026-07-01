import React from "react";
import { motion } from "framer-motion";

import {
FaJs,
FaReact,
FaNodeJs,
FaPython,
FaJava,
FaGitAlt,
FaAws,
FaGithub,
FaHtml5,
FaCss3Alt,
FaAngular,
FaPhp,
FaCuttlefish,
FaDatabase,
FaBrain,
FaNetworkWired,
FaCode
} from "react-icons/fa";

import {
SiMongodb,
SiSpringboot,
SiFastapi,
SiDocker,
SiCplusplus,
SiMysql,
SiExpress,
SiPostman,
SiJquery,
SiOpenstack,
SiTensorflow,
SiPytorch,
SiScikitlearn
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";

export default function Skills() {

const categories=[

{
title:"Programming Languages",
skills:[
{name:"Python",icon:<FaPython size={34}/>},
{name:"Java",icon:<FaJava size={34}/>},
{name:"C++",icon:<SiCplusplus size={34}/>},
{name:"JavaScript",icon:<FaJs size={34}/>},
{name:"C",icon:<FaCuttlefish size={34}/>},
{name:"PHP",icon:<FaPhp size={34}/>}
]
},

{
title:"AI / Machine Learning",
skills:[
{name:"Machine Learning",icon:<FaBrain size={34}/>},
{name:"Deep Learning",icon:<FaBrain size={34}/>},
{name:"Generative AI",icon:<FaBrain size={34}/>},
{name:"NLP",icon:<FaBrain size={34}/>},
{name:"Computer Vision",icon:<FaBrain size={34}/>},
{name:"Transformers",icon:<FaBrain size={34}/>},
{name:"LLMs",icon:<FaBrain size={34}/>},
{name:"Prompt Engineering",icon:<FaBrain size={34}/>},
{name:"Embeddings",icon:<FaBrain size={34}/>},
{name:"Model Evaluation",icon:<FaBrain size={34}/>},
{name:"Data Preprocessing",icon:<FaBrain size={34}/>},
{name:"Feature Engineering",icon:<FaBrain size={34}/>}
]
},

{
title:"ML Frameworks & Data",
skills:[
{name:"PyTorch",icon:<SiPytorch size={34}/>},
{name:"TensorFlow",icon:<SiTensorflow size={34}/>},
{name:"Scikit-learn",icon:<SiScikitlearn size={34}/>},
{name:"OpenCV",icon:<FaBrain size={34}/>},
{name:"NumPy",icon:<FaCode size={34}/>},
{name:"Pandas",icon:<FaCode size={34}/>},
{name:"Matplotlib",icon:<FaCode size={34}/>},
{name:"Hugging Face",icon:<FaBrain size={34}/>}
]
},

{
title:"Frontend Development",
skills:[
{name:"React.js",icon:<FaReact size={34}/>},
{name:"Angular",icon:<FaAngular size={34}/>},
{name:"HTML",icon:<FaHtml5 size={34}/>},
{name:"CSS",icon:<FaCss3Alt size={34}/>},
{name:"AJAX",icon:<FaCode size={34}/>},
{name:"jQuery",icon:<SiJquery size={34}/>}
]
},

{
title:"Backend & Software Engineering",
skills:[
{name:"Node.js",icon:<FaNodeJs size={34}/>},
{name:"Spring Boot",icon:<SiSpringboot size={34}/>},
{name:"FastAPI",icon:<SiFastapi size={34}/>},
{name:"Express.js",icon:<SiExpress size={34}/>},
{name:"REST APIs",icon:<FaNetworkWired size={34}/>},
{name:"Microservices",icon:<FaNetworkWired size={34}/>},
{name:"Distributed Systems",icon:<FaNetworkWired size={34}/>},
{name:"Concurrency",icon:<FaCode size={34}/>},
{name:"Multi-threading",icon:<FaCode size={34}/>},
{name:"System Design",icon:<FaCode size={34}/>}
]
},

{
title:"Databases",
skills:[
{name:"MySQL",icon:<SiMysql size={34}/>},
{name:"MongoDB",icon:<SiMongodb size={34}/>},
{name:"SQL",icon:<FaDatabase size={34}/>},
{name:"NoSQL",icon:<FaDatabase size={34}/>}
]
},

{
title:"Core Computer Science",
skills:[
{name:"DSA",icon:<FaCode size={34}/>},
{name:"OOP",icon:<FaCode size={34}/>},
{name:"DBMS",icon:<FaDatabase size={34}/>},
{name:"Operating Systems",icon:<FaCode size={34}/>},
{name:"Computer Networks",icon:<FaNetworkWired size={34}/>},
{name:"Linux / Unix",icon:<FaCode size={34}/>}
]
},

{
title:"Tools & Cloud",
skills:[
{name:"Git",icon:<FaGitAlt size={34}/>},
{name:"GitHub",icon:<FaGithub size={34}/>},
{name:"Docker",icon:<SiDocker size={34}/>},
{name:"AWS EC2",icon:<FaAws size={34}/>},
{name:"AWS S3",icon:<FaAws size={34}/>},
{name:"OpenStack",icon:<SiOpenstack size={34}/>},
{name:"Postman",icon:<SiPostman size={34}/>},
{name:"VS Code",icon:<VscVscode size={34}/>}
]
}

];

return(

<section
id="skills"
className="py-24 bg-gradient-to-b from-white via-gray-50 to-white"
>

<div className="px-5 lg:px-28">

<motion.h2
initial={{opacity:0,y:-30}}
whileInView={{opacity:1,y:0}}
transition={{duration:.6}}
className="
text-center
font-black
text-4xl
lg:text-5xl
"
>

Technical

<span className="text-red-500">
{" "}Skills
</span>

</motion.h2>

<div className="w-28 h-1 bg-red-500 rounded-full mx-auto mt-5"></div>

<p className="
text-center
text-gray-500
mt-6
max-w-3xl
mx-auto
text-lg
leading-8
">

Software Engineering • AI/ML • Backend Development •
Machine Learning • Scalable Systems

</p>

<div className="space-y-16 mt-20">

{categories.map((category,index)=>(

<div key={index}>

<h3 className="
text-3xl
font-bold
mb-8
text-black
">

{category.title}

</h3>

<div className="
grid
grid-cols-2
md:grid-cols-3
lg:grid-cols-5
gap-6
">

{category.skills.map((skill,i)=>(

<motion.div
key={i}
whileHover={{
y:-8,
scale:1.04
}}

className="
bg-white
rounded-3xl
border
shadow-lg
hover:shadow-2xl
hover:border-red-300
duration-300
p-7
min-h-[150px]
flex
flex-col
justify-center
items-center
gap-4
"
>

<div className="text-red-500">

{skill.icon}

</div>

<p className="
text-center
font-medium
text-sm
">

{skill.name}

</p>

</motion.div>

))}

</div>

</div>

))}

</div>

</div>

</section>

);

}