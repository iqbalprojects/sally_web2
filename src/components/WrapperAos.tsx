import React, { useEffect } from "react";
type animations = "fade-up" |"fade-down" | "fade-left" | "fade-right" | "zoom-in" | "zoom-out" | "flip-left"
|   "flip-left" | "flip-right" |   "slide-up" | 
  "slide-down"


  



const Wrapper = ({ children, animation }: { children: React.ReactNode, animation?: animations  }) => {
  

     // Refresh AOS after the children are rendered
  useEffect(() => {
    if (typeof window !== "undefined") {
      import("aos").then((AOS) => {
        AOS.refreshHard();
      });
    }
  }, []);

  
    // Randomly select an animation for each child
    return React.Children.map(children, (child, index) => {
 
      return (
        <div data-aos={animation} data-aos-duration="1000" key={index}>
          {child}
        </div>
      );
    });
  };

  export default Wrapper