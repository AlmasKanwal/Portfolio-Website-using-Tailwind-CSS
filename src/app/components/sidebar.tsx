import React from 'react';
import { IoClose } from "react-icons/io5";
import Link from 'next/link';

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  return (
    <div className={`w-screen h-screen ${isOpen ? "fixed" : "hidden"} top-0 left-0 bg-[#074643] z-10 text-[#ffffff] grid place-items-center`}>
      
      <div className={`absolute top-0 right-0 mr-[30px] mt-[10px] text-[28px] hover:cursor-pointer`} onClick={toggleSidebar}>
        <IoClose />
      </div>

      <div className='flex flex-col gap-4 text-[24px]'>
      <Link href="/" className="text-[#ffffff] hover:text-[#FFD700]">Home</Link>
          <Link href="#about" className="text-[#ffffff] hover:text-[#FFD700]">About</Link>
          <Link href="#services" className="text-[#ffffff] hover:text-[#FFD700]">Services</Link>
          <Link href="#skills" className="text-[#ffffff] hover:text-[#FFD700]">Skills</Link>
          <Link href="#projects" className="text-[#ffffff] hover:text-[#FFD700]">Projects</Link>
          <Link href="#contact" className="text-[#ffffff] hover:text-[#FFD700]">Contact</Link>
      </div>
      
    </div>
  );
}

export default Sidebar;
