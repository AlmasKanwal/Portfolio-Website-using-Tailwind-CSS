import Heading from "./heading";

export default function Skills(){
    return(
<section className="container mx-auto py-10 px-4">
<Heading title="Skills"/>

<p className="text-[#080808]">I am dedicated to improving my web development skills through continuous learning. By exploring new technologies and best practices, I aim to stay updated and build efficient, modern websites.</p>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div>
    <p>Video Editing</p>
    <div className="relative bg-[#5e5555] h-[4px] mt-2">
        <div className="bg-[#074436] absolute h-[4px] w-[94%]"></div>
    </div>
</div>

<div>
    <p>YouTube Content Creation/Management</p>
    <div className="relative bg-[#5e5555] h-[4px] mt-2">
        <div className="bg-[#074436] absolute h-[4px] w-[89%]"></div>
    </div>
</div>

<div>
    <p>Microsoft Office</p>
    <div className="relative bg-[#5e5555] h-[4px] mt-2">
        <div className="bg-[#074436] absolute h-[4px] w-[70%]"></div>
    </div>
</div>

<div>
    <p>Graphic Designing</p>
    <div className="relative bg-[#5e5555] h-[4px] mt-2">
        <div className="bg-[#074436] absolute h-[4px] w-[70%]"></div>
    </div>
</div>


<div>
    <p>2D Animation</p>
    <div className="relative bg-[#5e5555] h-[4px] mt-2">
        <div className="bg-[#074436] absolute h-[4px] w-[75%]"></div>
    </div>
</div>

<div>
    <p>HTML</p>
    <div className="relative bg-[#5e5555] h-[4px] mt-2">
        <div className="bg-[#074436] absolute h-[4px] w-[65%]"></div>
    </div>
</div>

<div>
    <p>CSS(Continuing Learning)</p>
    <div className="relative bg-[#5e5555] h-[4px] mt-2">
        <div className="bg-[#074436] absolute h-[4px] w-[50%]"></div>
    </div>
</div>

<div>
    <p>TypeScript(Continuing Learning)</p>
    <div className="relative bg-[#5e5555] h-[4px] mt-2">
        <div className="bg-[#074436] absolute h-[4px] w-[40%]"></div>
    </div>
</div>

<div>
    <p>Next.js(Continuing Learning)</p>
    <div className="relative bg-[#5e5555] h-[4px] mt-2">
        <div className="bg-[#074436] absolute h-[4px] w-[20%]"></div>
    </div>
</div>

</div>
</section>
    );
}