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
      <div className="absolute top-[73%]  w-[100vw] mx-auto  lg:bottom-36 lg:left-[40%]">
        
        <div className="  lg:w-[100%] w-fit mx-auto">
        <Button value={text} />
        </div>
        
      </div>
      <div className="text-center w-[100%] mx-auto absolute mx-auto  top-40    text-[26px] text-center lg:top-40 lg:mx-auto font-dinPro lg:text-5xl text-[var(--text-secondary-color)]">
       <p className="mx-auto w-[80%] "> Ready to restore harmony in <br /> your mind, body and spirit?</p>
      </div>
    </div>
  );
};

export default CTA;
