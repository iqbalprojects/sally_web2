import { useEffect, useState } from "react";
import About from "./components/About";
import Banner from "./components/Banner";
import Experience from "./components/Experience";
import Faq from "./components/Faq";
import Feature from "./components/Feature";
import Home from "./components/Home";
import Roadmap from "./components/Roadmap";
import Specialties from "./components/Specialties";
import Wrapper from "./components/WrapperAos";
import AOS from "aos";
import "aos/dist/aos.css"
function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeLink, setActiveLink] = useState<number | null>(null)
    // Initialize AOS
    useEffect(() => {
      AOS.init({
        duration: 1000, // Animation duration
        once: false, // Whether the animation should happen only once
      });
    }, []);

    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        const sidebar = document.querySelector(".sidebar");
        if (
          isSidebarOpen &&
          sidebar &&
          !sidebar.contains(event.target as Node)
        ) {
          setIsSidebarOpen(false); // Close the sidebar
        }
      };
  
      if (isSidebarOpen) {
        document.addEventListener("mousedown", handleClickOutside);
      }
  
      // Cleanup the event listener when the sidebar is closed or the component unmounts
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [isSidebarOpen]);
  const handleLinkClick = (id: number) => {
    setActiveLink(id); // Update the active link
    const target = document.getElementById(id.toString());
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  
    return (
      <div className="font-manrope">
         <div
        className={`sidebar fixed top-0 left-0 w-1/2 h-full bg-black z-50 transform transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:hidden`}
      >
        <div className="h-[56px] px-[16px] py-[9px] flex items-center">
          <button
              className="self-end text-white h-full py-2"
              onClick={() => setIsSidebarOpen(false)} // Close sidebar
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
        </div>
        <div className="flex flex-col px-[16px] py-[13px] space-y-[24px]">
          
          {["Home", "About", "Specialist", "Experience", "Roadmap", "Docs"].map(
            (link, index) => (
              <a
                key={index}
                href={`#${index + 1}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(index + 1);
                }}
                className={`text-white font-manrope font-semibold text-[16px] leading-[21.86px] ${
                  activeLink === index + 1 ? "opacity-100" : "opacity-[30%]"
                }`}
              >
                {link}
              </a>
            )
          )}
          <a href="#5" onClick={(e) => {
            e.preventDefault();
            handleLinkClick(6);

          }} className="text-center w-full max-h-[38px] font-manrope font-bold text-base leading-[21.86px] bg-[#287CF1] border-2 rounded-[6px] px-[14px] py-[8px]">
          Buy $A1C
          </a>
        </div>
      </div>
        <Wrapper animation="fade-up">
              <Home setIsSidebarOpen={setIsSidebarOpen} />
        </Wrapper>
          <div className="bg-gradient-to-b from-black via-[#1a1a1a] to-black overflow-hidden">
          
              <About />
              <Feature />
              <Specialties />
              <Experience />
              <Roadmap />
              <Faq />
              <Banner />
          </div>
       
      </div>
    );
  }
  

export default App;
