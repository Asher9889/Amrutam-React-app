import React from "react";
import "./header.css";
import Button from "../smallComponents/Button";

const Header = () => {
  const text = "Book an appointment";

  return (
    <div className="w-full h-fit lg:h-screen bg-[var(--primary-bg-color)] relative">
      <div className="h-[10%] flex  items-center p-6 gap-20">
        <img className="w-4 h-4  sm:hidden" src="/frame30.png" alt="logo" />
        <img className="w-28 h-4 sm:hidden" src="/frame31.png" alt="AMRUTAM" />
      </div>
      <div className="header-div h-[130vh] md:h-[100vh]  lg:h-[70%] relative  flex">
        {/* image for lg screen */}
        <div className="hidden md:inline-block w-[45%] lg:h-[70vh] bg-[#951D1C]"></div>

        <div className="hidden md:inline-block w-[55%] lg:h-[70vh]">
          <img src="/box2.png" alt="" className="w-full md:h-[100%] " />
        </div>
        {/* image for sm screen */}
       
          <img src="/frame32.png" alt="" className="w-full h-full md:hidden " />
       

        <div className="color "></div>
      </div>
      <div className="header-text-div absolute top-[16%] lg:top-[20%] left-[5%] flex flex-col gap-4 lg:gap-6 ">
        <p className="font-nexa text-[18px]  text-[var(--text-primary-color)] lg:text-xl">
          Namaste, Welcome to Amrutam
        </p>
        <p className=" text-[24px]  font-dinPro lg:leading-[4vw] lg:text-[3.2vw] text-[var(--text-secondary-color)]">
          Step into Holistic Healing with Ayurveda <br />
          Book Consultation with certified Experts.
        </p>
        <p className="text-[14px] lg:text-md text-[var(--gray-color)] mb- lg:mb-5">
          Dive into the world of ayurveda and Experience Personalized Health
          Solutions and <br />
          Holistic Guidance from Trusted Ayurvedic Doctors Anytime, anywhere.
        </p>
        <Button value={text} />
      </div>

      <div className="w-full font-dinPro  text-[var(--green-color)] lg:h-[20vh] lg:gap-5 flex flex-col gap-0 lg:flex-row lg:gap-5 lg:items-center lg:justify-center">
        <div className="flex py-3 pl-2  gap-2 lg:gap-2 items-center justify-center w-72 ">
          <img className="w-24 lg:w-20 lg:h-20" src="/frame1.png" alt="" />
          <p className="">Convenient Online & In-Clinic Consultations</p>
          
        </div>
        <hr className="border-t-2 border-zinc-300 lg:border-t-2-hidden "  />
        <div className="flex py-3 pl-2  gap-2 lg:gap-2 items-center justify-center w-72 ">
          <img className="w-24 lg:w-20 lg:h-20" src="/frame2.png"  alt="" />
          <p className="">Safe and effective treatment</p>
        </div>
        <hr className="border-t-2 border-zinc-300 lg:border-t-2-hidden "  />

        <div className="flex py-3 pl-2  gap-2 lg:gap-2 items-center justify-center w-72 ">
          <img className="w-24 lg:w-20 lg:h-20" src="/frame3.png" alt="" />
          <p className="">Experienced Ayurvedic Practitioners</p>
        </div>
        <hr className="border-t-2 border-zinc-300 lg:border-t-2-hidden "  />

        <div className="flex py-3 pl-2  gap-2 lg:gap-2 items-center justify-center w-72 ">
          <img className="w-24 lg:w-20 lg:h-20" src="/frame4.png" alt="" />
          <p className="">Personalized Treatment Plans & Guidance</p>
        </div>
        <hr className="border-t-2 border-zinc-300 lg:border-t-2-hidden "  />
      </div>
    </div>
  );
};

export default Header;
