import Link from "next/link";
import { HiOutlineDownload } from "react-icons/hi";
import { FiMenu } from "react-icons/fi";

interface NavbarProps {
  toggleSidebar: () => void;  
}

const Navbar = ({ toggleSidebar }: NavbarProps) => {
  return (
    <div className="bg-[#074643] fixed top-0 w-[100%] z-10">
      <div className="container mx-auto flex justify-between items-center py-4 px-4">
        <div className="text-[30px] font-sans font-bold text-[#FFD700]">Almas Kanwal</div>

        <div className="hidden md:flex gap-6">
          <Link href="/" className="text-[#ffffff] text-[20px] hover:text-[#FFD700]">Home</Link>
          <Link href="#about" className="text-[#ffffff] text-[20px] hover:text-[#FFD700]">About</Link>
          <Link href="#services" className="text-[#ffffff] text-[20px] hover:text-[#FFD700]">Services</Link>
          <Link href="#skills" className="text-[#ffffff] text-[20px] hover:text-[#FFD700]">Skills</Link>
          <Link href="#projects" className="text-[#ffffff] text-[20px] hover:text-[#FFD700]">Projects</Link>
          <Link href="#contact" className="text-[#ffffff] text-[20px] hover:text-[#FFD700]">Contact</Link>
        </div>

        <Link href="https://milestones1-2-flame.vercel.app/" target="_blank" rel="noopener noreferrer" className="hidden md:flex border border-[#FFD700] font-bold px-4 py-1 text-[#ffffff] rounded-[6px] items-center gap-2 hover:bg-[#FFD700] hover:text-[#080808] duration-200">
          Download CV
          <HiOutlineDownload />
        </Link>

        <div className="md:hidden text-[24px] text-[#ffffff]" onClick={toggleSidebar} aria-label="Toggle Sidebar">
          <FiMenu />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
