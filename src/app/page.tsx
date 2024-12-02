"use client";

import Navbar from "./components/navbar";
import HeroSection from "./components/heroSection";
import About from "./components/about";
import Services from "./components/services";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Footer from "./components/footer";
import { useState } from "react";
import Sidebar from "./components/sidebar";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <header>
        <Navbar toggleSidebar={toggleSidebar} />
      </header>

      <main>
        <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
        <HeroSection />
        <About />
        <Services />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}
