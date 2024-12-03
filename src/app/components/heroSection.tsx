import Button from "./button";
import TypeWriter from "typewriter-effect";

export default function HeroSection() {
  return (
    <div className="bg-[url('/hero-img.jpg')] bg-cover bg-center h-screen flex items-center justify-center">
      <div className="container mx-auto px-4">
        <div className="max-w-[450px] text-[#FFD700] flex flex-col gap-10">
          <div>
            <h1 className="text-5xl md:text-4xl sm:text-3xl font-bold">I&apos;m Almas Kanwal</h1>
            <h4 className="text-[#ffffff] text-xl md:text-lg mt-4">
              <TypeWriter
                options={{
                  strings: ["YouTube Content Creator", "GIAIC Student", "Learning Web Development & AI", "PITP Student (NED University)"],
                  delay: 100,
                  autoStart: true,
                  loop: true,
                }}
              />
            </h4>
          </div>
          <div className="bg-[#FFD700] h-[2px] w-[50px]"></div>

          <div>
            <p className="text-[#ffffff]">Aspiring to utilize my academic background and passion for CS(Computer Science) to contribute effectively to a dynamic organization, while continuously learning and enhancing my skills to achieve professional growth and excellence.</p>

            <Button link="#" text="learn more" className="btn"/>
          </div>

        </div>
      </div>
    </div>
  );
}
