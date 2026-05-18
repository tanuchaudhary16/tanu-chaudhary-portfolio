import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import emailjs from "@emailjs/browser";

import { BiLogoGmail } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import { IoLogoLinkedin } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";

export default function Contact() {

const ref=useRef(null);

const form=useRef();

const isInView=useInView(ref,{
once:true,
amount:.2
});

const [successMessage,setSuccessMessage]=useState("");

const sendEmail=(e)=>{

e.preventDefault();

emailjs
.sendForm(
"service_r8x1ep8",
"template_b1p5kzc",
form.current,
"tW2CWhqMtbP1dExeK"
)

.then(
()=>{

setSuccessMessage(
"Message sent successfully 🚀"
);

form.current.reset();

},

()=>{

setSuccessMessage(
"Message failed to send ❌"
);

}

);

};

return(

<section
ref={ref}
id="contact"
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
initial={{
opacity:0,
y:-20
}}

animate={
isInView
?
{
opacity:1,
y:0
}
:
{}
}

className="
text-4xl
lg:text-6xl
font-black
text-center
"
>

Let's{" "}

<span className="text-red-500">
Connect
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

Actively seeking Software Engineering opportunities, internships and collaborations.

</p>


<div className="
flex
flex-col
lg:flex-row
gap-16
mt-20
items-center
justify-between
">

<motion.div

initial={{
x:-50,
opacity:0
}}

animate={
isInView
?
{
x:0,
opacity:1
}
:
{}
}

className="w-full lg:w-[48%]"
>

<form

ref={form}

onSubmit={sendEmail}

className="
bg-white
shadow-2xl
rounded-3xl
border
p-8
space-y-5
"

>

<input
className="
w-full
border
rounded-xl
px-5
py-4
focus:outline-none
focus:ring-2
focus:ring-red-400
"
type="text"
name="from_name"
placeholder="Your Name"
required
/>

<input
className="
w-full
border
rounded-xl
px-5
py-4
focus:outline-none
focus:ring-2
focus:ring-red-400
"
type="email"
name="from_email"
placeholder="Your Email"
required
/>

<textarea
className="
w-full
border
rounded-xl
px-5
py-4
h-36
resize-none
focus:outline-none
focus:ring-2
focus:ring-red-400
"
placeholder="Write your message"
name="message"
required
/>

<motion.button
whileHover={{
scale:1.05
}}

type="submit"

className="
w-full
bg-red-500
hover:bg-red-600
text-white
rounded-xl
py-4
font-semibold
shadow-lg
duration-300
"
>

Send Message

</motion.button>


{successMessage &&(

<p className="
font-semibold
text-red-500
text-center
">

{successMessage}

</p>

)}

<div className="
flex
justify-center
gap-6
pt-4
">

<motion.a
href="mailto:tanu10162005@gmail.com"
whileHover={{scale:1.2}}
className="text-red-500"
>

<BiLogoGmail className="text-3xl"/>

</motion.a>


<motion.a
href="https://github.com/tanuchaudhary16"
target="_blank"
rel="noreferrer"
whileHover={{scale:1.2}}
className="text-red-500"
>

<BsGithub className="text-3xl"/>

</motion.a>


<motion.a
href="https://www.linkedin.com/in/tanuchaudhary16/"
target="_blank"
rel="noreferrer"
whileHover={{scale:1.2}}
className="text-red-500"
>

<IoLogoLinkedin className="text-3xl"/>

</motion.a>

</div>

</form>

</motion.div>


<motion.div

initial={{
x:50,
opacity:0
}}

animate={
isInView
?
{
x:0,
opacity:1
}
:
{}
}

className="lg:w-[42%]"
>

<h2 className="
text-5xl
font-black
leading-tight
">

Interested in working{" "}

<span className="text-red-500">
together?
</span>

</h2>

<p className="
text-gray-600
leading-8
mt-6
">

Feel free to reach out regarding software engineering roles, internships, collaborations or interesting discussions.

</p>


<div className="
space-y-6
mt-10
">

<a
href="mailto:tanu10162005@gmail.com"
className="
bg-white
border
shadow-lg
rounded-2xl
p-5
flex
items-center
gap-5
hover:shadow-2xl
hover:-translate-y-1
duration-300
cursor-pointer
"
>

<div className="
bg-red-50
text-red-500
p-4
rounded-full
">

<IoMdMail/>

</div>

<div>

<p className="font-semibold">
Email
</p>

<p className="text-gray-500">
tanu10162005@gmail.com
</p>

</div>

</a>



<a
href="tel:+916397113386"
className="
bg-white
border
shadow-lg
rounded-2xl
p-5
flex
items-center
gap-5
hover:shadow-2xl
hover:-translate-y-1
duration-300
cursor-pointer
"
>

<div className="
bg-red-50
text-red-500
p-4
rounded-full
">

<FaPhone/>

</div>

<div>

<p className="font-semibold">
Phone
</p>

<p className="text-gray-500">
+91 6397113386
</p>

</div>

</a>

</div>

</motion.div>

</div>

</div>

</section>

)

}