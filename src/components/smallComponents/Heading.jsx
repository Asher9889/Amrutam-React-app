import React from "react";

const Heading = ({ value }) => {
  return (
    <div className=" w-fit relative">
      
        <p className="hidden md:block relative z-10 font-dinPro  lg:text-4xl text-[var(--green-color)] ">
        &#160;&#160;&#160;{value}&#160;&#160;&#160;
        </p>
        <p className="md:hidden text-4xl  relative  font-dinPro bg-red-500 text-center  lg:text-4xl text-[var(--green-color)] ">
        {value}
        </p>
        <div className="absolute bottom-[2px] hidden md:block rounded-[3px] w-full bg-[var(--line-color)] h-1 " />
      
    </div>
  );
};

export default Heading;
