import Heading from "./heading";

export default function Skills(){
    return(
<section id="skills" className="container mx-auto py-10 px-4">
<Heading title="Skills"/>

<p className="text-[#080808]">I am dedicated to improving my web development skills through continuous learning. By exploring new technologies and best practices, I aim to stay updated and build efficient, modern websites.</p>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-3">

<div>
    <p className="font-bold">Video Editing</p>
    <div className="relative bg-[#5e5555] h-[4px] mt-2">
        <div className="bg-[#074436] absolute h-[4px] w-[95%]"></div>
    </div>
</div>

<div>
    <p className="font-bold">YouTube Content Creation/Management</p>
    <div className="relative bg-[#5e5555] h-[4px] mt-2">
        <div className="bg-[#074436] absolute h-[4px] w-[90%]"></div>
    </div>
</div>

<div>
    <p className="font-bold">Microsoft Office</p>
    <div className="relative bg-[#5e5555] h-[4px] mt-2">
        <div className="bg-[#074436] absolute h-[4px] w-[70%]"></div>
    </div>
</div>

<div>
    <p className="font-bold">Graphic Designing</p>
    <div className="relative bg-[#5e5555] h-[4px] mt-2">
        <div className="bg-[#074436] absolute h-[4px] w-[70%]"></div>
    </div>
</div>


<div>
    <p className="font-bold">2D Animation</p>
    <div className="relative bg-[#5e5555] h-[4px] mt-2">
        <div className="bg-[#074436] absolute h-[4px] w-[75%]"></div>
    </div>
</div>

<div>
    <p className="font-bold">HTML</p>
    <div className="relative bg-[#5e5555] h-[4px] mt-2">
        <div className="bg-[#074436] absolute h-[4px] w-[80%]"></div>
    </div>
</div>

<div>
    <p className="font-bold">CSS(Continuing Learning)</p>
    <div className="relative bg-[#5e5555] h-[4px] mt-2">
        <div className="bg-[#074436] absolute h-[4px] w-[70%]"></div>
    </div>
</div>

<div>
    <p className="font-bold">TypeScript(Continuing Learning)</p>
    <div className="relative bg-[#5e5555] h-[4px] mt-2">
        <div className="bg-[#074436] absolute h-[4px] w-[50%]"></div>
    </div>
</div>

<div>
    <p className="font-bold">Next.js(Continuing Learning)</p>
    <div className="relative bg-[#5e5555] h-[4px] mt-2">
        <div className="bg-[#074436] absolute h-[4px] w-[25%]"></div>
    </div>
</div>

</div>
</section>
    );
}