import React from "react";

const Wrapper = ({ children }: { children: React.ReactNode }) => {
    return React.Children.map(children, (child, index) => {
    //   const randomAnimation = animations[Math.floor(Math.random() * animations.length)];
      return (
        <div data-aos='fade-up' data-aos-duration="1000" key={index}>
          {child}
        </div>
      );
    });
  };

  export default Wrapper