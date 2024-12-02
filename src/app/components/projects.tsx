import Heading from "./heading";
import Image from "next/image";
import { MdOpenInNew } from "react-icons/md";

export default function Projects(){
    return(
<section className="container mx-auto py-10 px-4">
<Heading title="Projects" />

<div className="grid grid-cols-3 gap-4">

<div className="row-span-2 relative group">
      <Image src="/cv-resume.png" alt="calculator" width={500} height={500} />
      <div className="bg-[#074436] absolute w-[100%] h-[100%] top-0 opacity-0 transition duration-500 group-hover:opacity-100 flex flex-col justify-center items-center text-[#ffffff] text-[18px]">
        <a href="https://milestones1-2-flame.vercel.app/" target="_blank" rel="noopener noreferrer" className="absolute top-2 right-2">
          <MdOpenInNew className="text-[#FFD700] text-2xl mb-2" />
        </a>
        <div className="text-[#ffffff]">Resume/CV</div>
      </div>
</div>

<div className="row-span-2 relative group">
      <Image src="/simple-calculator.png" alt="calculator" width={500} height={500} />
      <div className="bg-[#074436] absolute w-[100%] h-[100%] top-0 opacity-0 transition duration-500 group-hover:opacity-100 flex flex-col justify-center items-center text-[#ffffff] text-[18px]">
        <a href="https://simple-calculator-using-html-css-js-rho.vercel.app/" target="_blank" rel="noopener noreferrer" className="absolute top-2 right-2">
          <MdOpenInNew className="text-[#FFD700] text-2xl mb-2" />
        </a>
        <div className="text-[#ffffff]">Simple Calculator</div>
      </div>
</div>

<div className="row-span-2 relative group">
      <Image src="/resume-builder.png" alt="calculator" width={500} height={500} />
      <div className="bg-[#074436] absolute w-[100%] h-[100%] top-0 opacity-0 transition duration-500 group-hover:opacity-100 flex flex-col justify-center items-center text-[#ffffff] text-[18px]">
        <a href="https://milestones5-one.vercel.app/" target="_blank" rel="noopener noreferrer" className="absolute top-2 right-2">
          <MdOpenInNew className="text-[#FFD700] text-2xl mb-2" />
        </a>
        <div className="text-[#ffffff]">Resume Builder</div>
      </div>
</div>

<div className="row-span-2 relative group">
      <Image src="/todo-app.png" alt="calculator" width={500} height={500} />
      <div className="bg-[#074436] absolute w-[100%] h-[100%] top-0 opacity-0 transition duration-500 group-hover:opacity-100 flex flex-col justify-center items-center text-[#ffffff] text-[18px]">
        <a href="https://assignment-5-todo-app-using-use-state.vercel.app/" target="_blank" rel="noopener noreferrer" className="absolute top-2 right-2">
          <MdOpenInNew className="text-[#FFD700] text-2xl mb-2" />
        </a>
        <div className="text-[#ffffff]">Todo App</div>
      </div>
</div>

<div className="row-span-2 relative group">
      <Image src="/figma-design.png" alt="calculator" width={500} height={500} />
      <div className="bg-[#074436] absolute w-[100%] h-[100%] top-0 opacity-0 transition duration-500 group-hover:opacity-100 flex flex-col justify-center items-center text-[#ffffff] text-[18px]">
        <a href="https://assignment-4-conversion-of-figma-design-into-html.vercel.app/" target="_blank" rel="noopener noreferrer" className="absolute top-2 right-2">
          <MdOpenInNew className="text-[#FFD700] text-2xl mb-2" />
        </a>
        <div className="text-[#ffffff]">Figma to HTML</div>
      </div>
</div>

<div className="row-span-2 relative group">
      <Image src="/portfolio-custom-css.png" alt="calculator" width={500} height={500} />
      <div className="bg-[#074436] absolute w-[100%] h-[100%] top-0 opacity-0 transition duration-500 group-hover:opacity-100 flex flex-col justify-center items-center text-[#ffffff] text-[18px]">
        <a href="https://portfolio-website-using-custom-css-amber.vercel.app/" target="_blank" rel="noopener noreferrer" className="absolute top-2 right-2">
          <MdOpenInNew className="text-[#FFD700] text-2xl mb-2" />
        </a>
        <div className="text-[#ffffff]">Resume Builder</div>
      </div>
</div>


</div>

</section>
    );
}