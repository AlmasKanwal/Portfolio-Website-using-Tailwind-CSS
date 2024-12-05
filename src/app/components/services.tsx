import Heading from "./heading";
import { FiYoutube } from "react-icons/fi";
import { FaGithub } from "react-icons/fa6";
import { FaArtstation } from "react-icons/fa";

export default function Services() {
  return (
    <section id="services" className="container mx-auto py-10 px-4">
      <Heading title="What I do" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* YouTube Card */}
        <div className="shadow-lg flex flex-col gap-4 px-8 py-10 bg-[#074643] text-[#ffffff] rounded-lg transform hover:scale-105 transition-transform duration-500 ease-in-out hover:shadow-2xl">
          <a
            href="https://www.youtube.com/channel/UCu2rw6nY5yFxZzNzJVDW81Q"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <FiYoutube className="text-[28px] text-[#ffffff] hover:scale-125 transition-transform duration-300 ease-in-out" />
          </a>

          <h2 className="font-medium text-[20px] text-[#FFD700]">Chamakte Sitare</h2>
          <p>
            Welcome To &quot;Chamakte Sitare&quot; YouTube Channel. I share
            Islamic stories on my YouTube channel and have begun a series on the
            life of Prophet Muhammad (Seerat-un-Nabi S.A.W).
          </p>
        </div>

        {/* GitHub Card */}
        <div className="shadow-lg flex flex-col gap-4 px-8 py-10 bg-[#074643] text-[#ffffff] rounded-lg transform hover:scale-105 transition-transform duration-500 ease-in-out hover:shadow-2xl">
          <a
            href="https://github.com/AlmasKanwal"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <FaGithub className="text-[28px] text-[#ffffff] hover:scale-125 transition-transform duration-300 ease-in-out" />
          </a>

          <h2 className="font-medium text-[20px] text-[#FFD700]">My GitHub Repo</h2>
          <p>
            Welcome To &quot;GitHub Repo&quot; My GitHub repository showcases
            beginner-level web development projects, including simple responsive
            designs and interactive interfaces. These projects demonstrate my
            understanding of HTML, CSS, and JavaScript. They reflect my learning
            journey and enthusiasm for building user-friendly websites.
          </p>
        </div>

        {/* 2D Animation Card */}
        <div className="shadow-lg flex flex-col gap-4 px-8 py-10 bg-[#074643] text-[#ffffff] rounded-lg transform hover:scale-105 transition-transform duration-500 ease-in-out hover:shadow-2xl">
          <a
            href="/2D-Animation.mp4"
            target="blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <FaArtstation className="text-[28px] text-[#ffffff] hover:scale-125 transition-transform duration-300 ease-in-out" />
          </a>

          <h2 className="font-medium text-[20px] text-[#FFD700]">2D Animation</h2>
          <p>
            I have completed a 2D animation course and also hold a certificate.
            A demo video has been provided; you can click on the 2D animation
            icon to watch it.
          </p>
        </div>
      </div>
    </section>
  );
}
