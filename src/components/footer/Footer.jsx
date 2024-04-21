import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <div className="bg-[#DCE3DC] flex flex-col gap-4 p-16">
      <div className="lg:hidden flex flex-col w-80 mx-auto items-start justify-center font-dinProRegular gap-4">
        <p className="font-dinPro text-[var(--green-color)] text-lg">Get in touch</p>
        <p className=" text-md text-black">support@amrutam.co.in</p>
        <p>Amrutam Pharmaceuticals Pvt Ltd., chitragupt ganj, Nai Sadak, Lashkar, Gwalior - 474001 +91 9713171999</p>
        <p>+91 9713171999</p>
        <img src="frame34.png" alt="" />
      </div>
      <div className="flex  flex-col gap-2 w-80 items-start mx-auto  justify-center">
        <a className="font-dinPro text-[var(--green-color)] text-xl text-left">Information</a>
        <a className="dinProRegular decoration-none text-lg text-[#474747]" href="">About Us</a>
        <a className="dinProRegular decoration-none text-lg text-[#474747]" href="">Terms and Conditions</a>
        <a className="dinProRegular decoration-none text-lg text-[#474747]" href="">Privacy Policy</a>
        <a className="dinProRegular decoration-none text-lg text-[#474747]" href="">Privacy Policy for Mobile Apps</a>
        <a className="dinProRegular decoration-none text-lg text-[#474747]" href="">Shipping and Returns Policy</a>
        <a className="dinProRegular decoration-none text-lg text-[#474747]" href="">International Delivery</a>
        <a className="dinProRegular decoration-none text-lg text-[#474747]" href="">For Businesses, Hotels and Resort</a>
      </div>
      <div className="lg:hidden w-80 mx-auto">
        <p className="font-dinPro text-[var(--green-color)] text-lg">Subscribe to our Newsletter and join Amrutam Family today!</p>
        <div className="w-full h-10  mt-4 rounded-full">
          <input className="h-full h-10 text-sm rounded-l-full outline-none px-3" placeholder="Your Email Address" type="text" />
          <button className="h-full rounded-r-full pr-4 h-10 bg-black pl-2 font-dinPro text-white">Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
