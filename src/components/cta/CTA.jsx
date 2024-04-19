import React from "react";
import "./cta.css";
import Button from "../smallComponents/Button";
const CTA = () => {
  const text = "Book a consultation";
  return (
    <div className="relative">
      <img className="object-fit" src="/frame22.png" alt="" />
      <div className="color2"></div>
      <div className="absolute bottom-36 left-[40%]">
        <Button value={text} />
      </div>
      <div className="text absolute top-40 left-80 font-dinPro text-5xl text-[var(--text-secondary-color)]">
        Ready to restore harmony in <br /> your mind, body and spirit?
      </div>
    </div>
  );
};

export default CTA;
