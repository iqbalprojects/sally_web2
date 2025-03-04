import React from "react";

const Wrapper = ({ children }: { children: React.ReactNode }) => {
    const animations = [
      "fade-up",
      "fade-down",
      "fade-left",
      "fade-right",
      "zoom-in",
      "zoom-out",
      "flip-left",
      "flip-right",
      "slide-up",
      "slide-down",
    ];
  
    // Randomly select an animation for each child
    return React.Children.map(children, (child, index) => {
    //   const randomAnimation = animations[Math.floor(Math.random() * animations.length)];
      return (
        <div data-aos={animations[0]} data-aos-duration="1000" key={index}>
          {child}
        </div>
      );
    });
  };

  export default Wrapper