import React from "react";
import "./cta.css";
import Button from "../smallComponents/Button";
const CTA = () => {
  const text = "Book a consultation";
  return (
    <div className="relative lg:w-fit w-[100vw] lg:h-fit">
      <img className="hidden lg:block object-fit lg:w-full lg:h-full" src="/frame22.png" alt="" />
      <img className="lg:hidden h-full w-full" src="/frame33.png" alt="" />
      <div className="color2"></div>
      <div className="absolute top-[73%]  w-full   lg:bottom-36 lg:left-[40%]">
        
        
        <Button value={text} />
        
      </div>
      <div className="text absolute  top-40   w-[100%] text-3xl text-center lg:top-40 lg:left-80 font-dinPro lg:text-5xl text-[var(--text-secondary-color)]">
        Ready to restore harmony in <br /> your mind, body and spirit?
      </div>
    </div>
  );
};

export default CTA;
