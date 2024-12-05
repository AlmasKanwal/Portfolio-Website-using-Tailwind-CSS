import Heading from "./heading";
import Image from "next/image";
import { MdOpenInNew } from "react-icons/md";

export default function Projects() {
  return (
    <section id="projects" className="container mx-auto py-10 px-4">
      <Heading title="Projects" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        
        <div className="relative group">
          <Image
            src="/cv-resume.png"
            alt="Resume CV"
            width={500}
            height={500}
            className="rounded-lg transition-transform duration-500 transform group-hover:scale-105"
          />
          <div className="bg-[#074643] absolute w-full h-full top-0 opacity-0 transition duration-500 group-hover:opacity-100 flex flex-col justify-center items-center text-[#ffffff] text-[18px] rounded-lg group-hover:scale-105">
            <a href="https://milestones1-2-flame.vercel.app/" target="_blank" rel="noopener noreferrer" className="absolute top-2 right-2">
              <MdOpenInNew className="text-[#FFD700] text-2xl mb-2" />
            </a>
            <div className="text-[#ffffff]">Resume/CV</div>
          </div>
        </div>

        <div className="relative group">
          <Image
            src="/simple-calculator.png"
            alt="Simple Calculator"
            width={500}
            height={500}
            className="rounded-lg transition-transform duration-500 transform group-hover:scale-105"
          />
          <div className="bg-[#074643] absolute w-full h-full top-0 opacity-0 transition duration-500 group-hover:opacity-100 flex flex-col justify-center items-center text-[#ffffff] text-[18px] rounded-lg group-hover:scale-105">
            <a href="https://simple-calculator-using-html-css-js-rho.vercel.app/" target="_blank" rel="noopener noreferrer" className="absolute top-2 right-2">
              <MdOpenInNew className="text-[#FFD700] text-2xl mb-2" />
            </a>
            <div className="text-[#ffffff]">Simple Calculator</div>
          </div>
        </div>

        <div className="relative group">
          <Image
            src="/resume-builder.png"
            alt="Resume Builder"
            width={500}
            height={500}
            className="rounded-lg transition-transform duration-500 transform group-hover:scale-105"
          />
          <div className="bg-[#074643] absolute w-full h-full top-0 opacity-0 transition duration-500 group-hover:opacity-100 flex flex-col justify-center items-center text-[#ffffff] text-[18px] rounded-lg group-hover:scale-105">
            <a href="https://milestones5-one.vercel.app/" target="_blank" rel="noopener noreferrer" className="absolute top-2 right-2">
              <MdOpenInNew className="text-[#FFD700] text-2xl mb-2" />
            </a>
            <div className="text-[#ffffff]">Resume Builder</div>
          </div>
        </div>

        <div className="relative group">
          <Image
            src="/todo-app.png"
            alt="Todo App"
            width={500}
            height={500}
            className="rounded-lg transition-transform duration-500 transform group-hover:scale-105"
          />
          <div className="bg-[#074643] absolute w-full h-full top-0 opacity-0 transition duration-500 group-hover:opacity-100 flex flex-col justify-center items-center text-[#ffffff] text-[18px] rounded-lg group-hover:scale-105">
            <a href="https://assignment-5-todo-app-using-use-state.vercel.app/" target="_blank" rel="noopener noreferrer" className="absolute top-2 right-2">
              <MdOpenInNew className="text-[#FFD700] text-2xl mb-2" />
            </a>
            <div className="text-[#ffffff]">Todo App</div>
          </div>
        </div>

        <div className="relative group">
          <Image
            src="/figma-design.png"
            alt="Figma to HTML"
            width={500}
            height={500}
            className="rounded-lg transition-transform duration-500 transform group-hover:scale-105"
          />
          <div className="bg-[#074643] absolute w-full h-full top-0 opacity-0 transition duration-500 group-hover:opacity-100 flex flex-col justify-center items-center text-[#ffffff] text-[18px] rounded-lg group-hover:scale-105">
            <a href="https://assignment-4-conversion-of-figma-design-into-html.vercel.app/" target="_blank" rel="noopener noreferrer" className="absolute top-2 right-2">
              <MdOpenInNew className="text-[#FFD700] text-2xl mb-2" />
            </a>
            <div className="text-[#ffffff]">Figma to HTML</div>
          </div>
        </div>

        <div className="relative group">
          <Image
            src="/portfolio-custom-css.png"
            alt="Portfolio"
            width={500}
            height={500}
            className="rounded-lg transition-transform duration-500 transform group-hover:scale-105"
          />
          <div className="bg-[#074643] absolute w-full h-full top-0 opacity-0 transition duration-500 group-hover:opacity-100 flex flex-col justify-center items-center text-[#ffffff] text-[18px] rounded-lg group-hover:scale-105">
            <a href="https://portfolio-website-using-custom-css-amber.vercel.app/" target="_blank" rel="noopener noreferrer" className="absolute top-2 right-2">
              <MdOpenInNew className="text-[#FFD700] text-2xl mb-2" />
            </a>
            <div className="text-[#ffffff]">Portfolio</div>
          </div>
        </div>

      </div>
    </section>
  );
}
