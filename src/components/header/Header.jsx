import React from "react";
import "./header.css";
import Button from "../smallComponents/Button";

const Header = () => {
  const text = "Book an appointment";

  return (
    <div className="w-full h-full lg:h-screen bg-[var(--primary-bg-color)] relative">

      <div className="h-[10%] flex  items-center p-6 gap-20">
        <img className="w-4 h-4  sm:hidden" src="/frame30.png" alt="logo" />
        <img className="w-28 h-4 sm:hidden" src="/frame31.png" alt="AMRUTAM" />
      </div>

      <div className="header-div w-[100vw] h-fit   lg:h-[70%] relative  flex">
        {/* image for lg screen */}
        <div className="hidden md:inline-block w-[45%] lg:h-[70vh] bg-[#951D1C]"></div>

        <div className="hidden md:inline-block w-[55%] lg:h-[70vh]">
          <img src="/box2.png" alt="" className="w-full md:h-[100%] " />
        </div>
        {/* image for sm screen */}
       
          <img src="/frame32.png" alt="" className="w-full h-full object-cover md:hidden " />
       

        <div className="color hidden lg:block "></div>
        <div className="color3 lg:hidden "></div>
      </div>

      <div className=" absolute bg-red-500 w-[100%] h-[35%] pr-10 top-[16%] lg:top-[20%] left-[5%] right-[5%] ">
        <div className="mx-auto bg-yellow-500 h-[100%] w-[100%]   flex flex-col justify-between mb-2 lg:gap-6 ">
        <p className="font-nexa text-[18px]  text-[var(--text-primary-color)] lg:text-xl">
          Namaste, Welcome to Amrutam
        </p>
        <p className=" text-2xl text-left  leading-[1.3]  font-dinPro lg:leading-[4vw] lg:text-[3.2vw] text-[var(--text-secondary-color)]">
          Step into Holistic Healing with Ayurveda <br />
          Book Consultation with certified Experts.
        </p>
        <p className="text-base w-[100%] lg:mb-[0] w-96 lg:w-[55vw] lg:text-md text-[var(--gray-color)] ">
          Dive into the world of ayurveda and Experience Personalized Health
          Solutions and 
          Holistic Guidance from Trusted Ayurvedic Doctors Anytime, anywhere.
        </p>
        <Button value={text} />
        </div>
      </div>

      <div className="w-full h-full font-dinPro  text-[var(--green-color)] lg:h-[20vh] lg:gap-5 flex flex-col gap-0 lg:flex-row lg:gap-5 lg:items-center lg:justify-center">
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
