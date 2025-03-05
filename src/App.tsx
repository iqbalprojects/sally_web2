import { useEffect } from "react";
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
    // Initialize AOS
    useEffect(() => {
      AOS.init({
        duration: 1000, // Animation duration
        once: false,
        easing: "ease-in-out" 
      });
    }, []);
  
    return (
      <div className="font-manrope">
        <Wrapper>
              <Home />
          <div className="bg-gradient-to-b from-black via-[#1a1a1a] to-black">
              <Wrapper>
                <About />
                <Feature />
                <Specialties />
                <Experience />
                <Roadmap />
                <Faq />
                <Banner />
              </Wrapper>
          </div>
        </Wrapper>
      </div>
    );
  }
  

export default App;
