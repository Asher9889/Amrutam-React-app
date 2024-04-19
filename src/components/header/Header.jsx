import React from "react";
import "./header.css";
import Button from "../smallComponents/Button";

const Header = () => {

  const text = "Book an appointment"

  return (
    <div className="w-full h-screen bg-[var(--primary-bg-color)] relative">
      <div className="h-[10%]">vv </div>
      <div className="header-div h-[70%] relative  flex">
        <div className="w-[45%] h-full bg-[#951D1C]"></div>
        <div className="w-[55%] h-full ">
          <img src="/box2.png" alt="" className="w-full h-full" />
        </div>
        <div className="color"></div>
      </div>
      <div className="header-text-div absolute top-[20%] left-[5%] flex flex-col gap-3 ">
        <p className="font-nexa  text-[var(--text-primary-color)] text-xl">
          Namaste, Welcome to Amrutam
        </p>
        <p className="font-dinPro leading-[4vw] text-[3.2vw] text-[var(--text-secondary-color)]">
          Step into Holistic Healing with Ayurveda <br />
          Book Consultation with certified Experts.
        </p>
        <p className="text-md text-[var(--gray-color)] mb-5">
          Dive into the world of ayurveda and Experience Personalized Health
          Solutions and <br />
          Holistic Guidance from Trusted Ayurvedic Doctors Anytime, anywhere.
        </p>
        <Button value={text} />
      </div>

      <div className="w-full font-dinPro text-[var(--green-color)] h-[20%] flex gap-5 items-center justify-center">
        
        <div className="flex gap-2 items-center justify-center w-64 ">
          <img className="w-20 h-20" src="/frame1.png" alt="" />
          <p>Convenient Online & In-Clinic Consultations</p>
        </div>
        

        <div className="flex gap-2 items-center justify-center w-64 ">
          <img className="w-20 h-20"  src="/frame2.png" alt="" />
          <p>Safe and effective treatment</p>
        </div>
        

        <div className="flex gap-2 items-center justify-center w-64 ">
          <img className="w-20 h-20"  src="/frame3.png" alt="" />
          <p>Experienced Ayurvedic Practitioners</p>
        </div>
        

        <div className="flex gap-2 items-center justify-center w-72 ">
          <img className="w-20 h-20"  src="/frame4.png" alt="" />
          <p>Personalized Treatment Plans & Guidance</p>
        </div>
        
      </div>
    </div>
  );
};

export default Header;
