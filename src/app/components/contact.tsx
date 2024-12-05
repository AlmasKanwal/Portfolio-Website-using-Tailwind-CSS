"use client";

import Heading from "./heading";
import { FaArrowUp } from "react-icons/fa"; 

export default function Contact() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert("Form submitted!");
  };

  return (
    <section id="contact" className="container mx-auto px-4">
      <Heading title="Contact Us" />

      <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <input type="text" placeholder="Enter Your Name" className="inputStyle" required />
          <input type="email" placeholder="Enter Your Email" className="inputStyle" required />
        </div>

        <input type="text" placeholder="Enter Your Subject" className="inputStyle" required />
        <textarea rows={6} placeholder="Enter Your Message" className="inputStyle" />

        <div className="mb-10 flex justify-between items-center">
          <button 
            type="submit" 
            className="button transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-[#080808] hover:text-white"
          >
            Submit
          </button>
          <a
            href="#top"
            className="mt-10 flex items-center justify-center bg-[#074643] w-10 h-10 rounded-full bg-primary text-white hover:bg-[#080808] transition-all duration-300 ease-in-out transform hover:scale-110"
          >
            <FaArrowUp className="text-lg" />
          </a>
        </div>
      </form>
    </section>
  );
}
