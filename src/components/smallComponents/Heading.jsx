import React from "react";

const Heading = ({ value }) => {
  return (
    <div className=" w-fit relative">
      
        <p className="relative z-10 font-dinPro text-4xl text-[var(--green-color)] ">
        &#160;&#160;&#160;{value}&#160;&#160;&#160;
        </p>
        <div className="absolute bottom-[2px] rounded-[3px] w-full bg-[var(--line-color)] h-1 bg-red-500" />
      
    </div>
  );
};

export default Heading;
