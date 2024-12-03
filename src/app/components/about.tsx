import Image from "next/image";
import {AiOutlineGift } from "react-icons/ai";
import Heading from "./heading";
import { FiBookOpen } from "react-icons/fi";
import { BsGlobe2 } from "react-icons/bs";
import { TbPacman } from "react-icons/tb";
import { IoLocationOutline } from "react-icons/io5";
import Button from "./button";

export default function About(){
    return(
<section className="container mx-auto py-10 px-4">
<Heading title="About Me"/>
<div className="grid grid-cols-1 md:grid-cols-2 gap-[60px]">
    <div>
        <Image src="/img-1.jpg" alt="picture" width={300} height={70}/>
    </div>

    <div>
        <div className="flex items-center justify-between w-[300px]">
            <div className="flex flex-col gap-6">

                <div className="flex gap-4 items-center font-bold">
                    <AiOutlineGift className="text-[#074643] text-[22px]"/>
                 Birthday
                </div>

                <div className="flex gap-4 items-center font-bold">
                    <FiBookOpen className="text-[#074643] text-[22px]"/>
                 Study
                </div>

                <div className="flex gap-4 items-center font-bold">
                    <BsGlobe2 className="text-[#074643] text-[22px]"/>
                 Channel
                </div>

                <div className="flex gap-4 items-center font-bold">
                    <TbPacman className="text-[#074643] text-[22px]"/>
                 Interest
                </div>

                <div className="flex gap-4 items-center font-bold">
                    <IoLocationOutline className="text-[#074643] text-[22px]"/>
                 Location
                </div>
            </div>

<div className="flex flex-col gap-6 text-[#074643] font-bold">
<div>:</div>
<div>:</div>
<div>:</div>
<div>:</div>
<div>:</div>
</div>

<div className="flex flex-col gap-6 text-[#074643] font-bold">
    <div>18-03-2005</div>
    <div>GIAIC & PITP Student </div>
    <div><a href="https://www.youtube.com/channel/UCu2rw6nY5yFxZzNzJVDW81Q" target="blank">Chamakte Sitare</a></div>
    <div>Islamic Books Reading</div>
    <div>Karachi, Sindh</div>

</div>

        </div>

        <div className="max-w-[800px]">
<h2 className="font-bold mt-16 mb-10">I&apos;m Almas Kanwal & GIAIC Student</h2>
<p className="text-[#080808]">I am an enthusiastic learner with a background in Computer Science,
            currently exploring web development as a beginner. I aim to apply my
            growing skills in a dynamic organization, while continuously
            learning and expanding my technical expertise. My journey includes
            coursework in Artificial Intelligence, Web 3.0, and Metaverse
            development at Governor House Karachi. I bring skills in Video
            Editing, Graphic Designing, 2D Animation, and manage my YouTube
            Channel, &quot;Chamakte Sitare&quot;, where I handle video editing,
            thumbnails, and channel management. I am excited to develop further
            as a web developer and make meaningful contributions to my field.</p>

            <Button link="#" text="Hire Me" className="button" />
        </div>

    </div>
</div>
</section>
    );
}