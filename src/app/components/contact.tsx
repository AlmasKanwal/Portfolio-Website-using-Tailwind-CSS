"use client"

import Heading from "./heading";

export default function Contact(){
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        alert("Form submitted!");
      };

    return(
<section id="contact" className="container mx-auto px-4 ">
<Heading title="Contact Us"/>

<form className="flex flex-col gap-8" onSubmit={handleSubmit}>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">

<input type="text" placeholder="Enter Your Name" className="inputStyle" required/>

<input type="email" placeholder="Enter Your Email" className="inputStyle" required/>

    </div>

    <input type="text" placeholder="Enter Your Subject" className="inputStyle" required/>

    <textarea rows={6} placeholder="Enter Your Message" className="inputStyle"/>

    <div className="mb-10">
        <button type="submit" className="button">Submit</button>
    </div>

</form>

</section>
    );
}