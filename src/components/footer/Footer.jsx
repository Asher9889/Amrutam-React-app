import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <div className="bg-[#DCE3DC] flex flex-col items-center p-16">
      <div className="flex w-72 flex-col gap-2 items-start justify-center">
        <a className="font-dinPro text-[var(--green-color)] text-xl">Information</a>
        <a className="dinProRegular decoration-none text-lg text-[#474747]" href="">About Us</a>
        <a className="dinProRegular decoration-none text-lg text-[#474747]" href="">Terms and Conditions</a>
        <a className="dinProRegular decoration-none text-lg text-[#474747]" href="">Privacy Policy</a>
        <a className="dinProRegular decoration-none text-lg text-[#474747]" href="">Privacy Policy for Mobile Apps</a>
        <a className="dinProRegular decoration-none text-lg text-[#474747]" href="">Shipping and Returns Policy</a>
        <a className="dinProRegular decoration-none text-lg text-[#474747]" href="">International Delivery</a>
      <a className="dinProRegular decoration-none text-lg text-[#474747]" href="">For Businesses, Hotels and Resort</a>
      </div>
    </div>
  );
};

export default Footer;
