import React from "react";

const ExpertCard = () => {
  return (
    <div className="w-60 h-80 bg-[var(--primary-bg-color)] flex flex-col justify-between rounded-3xl">
      <div className=" flex justify-center relative mt-5">
        <img className="w-28" src="/frame24.png" alt="" />
        <div className="absolute font-dinPro gap-1 py-px flex text-xs justify-center items-center bg-black text-white bottom-0 px-2 rounded-xl">
          4.5
          <img className="w-3 h-3" src="/frame26.png" alt="" />
        </div>
      </div>

      <div className="flex flex-col gap-2 justify-center items-center -mt-9  ">
        <h1 className="font-gotham">Dr. Vaishali Sharma</h1>
        <p className="text-[#838383] text-center text-sm ">Ayurveda Practitioner (BAMS, MD)</p>
        <p className="font-nunitoSemi font-base text-sm"><i class="ri-graduation-cap-line"></i> 25 years of experience</p>
        <p className="text-sm font-nunitoSemi font-semibold text-[var(--green-color)] bg-zinc-200 px-3 py-[3px] rounded-2xl"><i class="ri-capsule-line "></i> Skin Specialist</p>
      </div>
      <div className=" bg-[var(--green-color)] p-3 rounded-b-3xl text-center font-nunitoSemi text-[--text-secondary-color] text-medium">
        Book a session
      </div>
    </div>
  );
};

export default ExpertCard;
