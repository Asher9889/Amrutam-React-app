import React from "react";
import "./discover.css";
import Heading from "../smallComponents/Heading";
import DiscoverSm from "../smallComponents/DiscoverSm";
const Discover = () => {
  const text = "Discover Ayurveda's magic with us";

  return (
    <div className="w-[100vw]  lg:h-[105vh] px-4  flex flex-col lg:gap-5 items-center pt-10 lg:pt-7">
      <div className="text-center   flex flex-col gap-3 px-3">
        <Heading value={text} />
        <p className="font-dinProMedium text-sm text-[var(--dark-gray-color)]">
          Ayurvedic treatment aims to balance your body and mind, bringing
          harmony <br /> and vitality. It's like a journey to better health
          using ancient wisdom, <br /> a totally effective approach for a better
          life.
        </p>
      </div>
      <div className="flex-1 pt-6 lg:hidden   relative">
        <img className="w-[95%] bg-transparent" src="/frame5.png" alt="" />
        <img
          className="w-[95%] bg-transparent absolute top-12 right-7 "
          src="/frame6.png"
          alt=""
        />
      </div>

      <DiscoverSm />

      <div className="hidden mt-6 lg:block w-full h-[70vh] ">

        <div className="flex w-full h-full  ">

          <div className="flex  items-end pt-6 -mr-4 relative z-10  flex-col gap-12">

            <div className="flex  items-center  gap-3">
              <div className="text-right w-64 ">
                <h3 className="font-dinPro text-xl">Personalized Wellness</h3>
                <p className="font-dinProMedium w- text-sm text-[var(--treatment-gray-color)]">
                  Get treatments made just for you based on your individual
                  doshas (body type)
                </p>
              </div>
              <div className="w-20 h-20 rounded-full p-3 bg-[#EDF5FA] flex justify-center items-center">
                <img className="w-12 h-12" src="/frame13.png" alt="" />
              </div>
            </div>

            <div className="flex items-center mr-10   gap-3 ">
              <div className="text-right w-64">
                <h3 className="font-dinPro text-xl">Focus on prevention</h3>
                <p className="font-dinProMedium text-sm  text-[var(--treatment-gray-color)]">
                  Stop problems even before they start.
                </p>
              </div>
              <div className="w-20 h-20 rounded-full p-3 bg-[#EAF2EA] flex justify-center items-center">
                <img className="w-12 h-12" src="/frame14.png" alt="" />
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="text-right w-64">
                <h3 className="font-dinPro text-xl">Mind-Body Connection</h3>
                <p className="font-dinProMedium text-sm text-[var(--treatment-gray-color)]">
                  Keep your mind and body in sync for a happy life.
                </p>
              </div>
              <div className="w-20 h-20 rounded-full p-3 bg-[#FCF1F1] flex justify-center items-center">
                <img className="w-12 h-12" src="/frame15.png" alt="" />
              </div>
            </div>
          </div>

          <div className="relative  ">
            <img className=" bg-pink-800 h-full bg-transparent" src="/frame5.png" alt="" />
            <img className="absolute top-8 right-2  bg-transparent" src="/frame6.png" alt="" />
          </div>

          <div className="flex relative z-10 -ml-4 flex-col mt-6  gap-12">
            <div className="flex items-center gap-3">
              <div className="w-20 h-20 rounded-full p-3 bg-[#EDF5FA] flex justify-center items-center">
                <img className="w-12 h-12" src="/frame16.png" alt="" />
              </div>
              <div className="text-left  w-64">
                <h3 className="font-dinPro text-xl">Holistic Healing</h3>
                <p className="font-dinProMedium text-sm text-[var(--treatment-gray-color)]">
                  Fix the root problem for long-lasting health.
                </p>
              </div>
            </div>

            <div className="flex items-center ml-10 gap-3">
              <div className="w-20 h-20 rounded-full p-3 bg-[#EAF2EA] flex justify-center items-center">
                <img className="w-12 h-12" src="/frame17.png" alt="" />
              </div>
              <div className="text-left  w-64">
                <h3 className="font-dinPro text-xl">Natural Remedies</h3>
                <p className="font-dinProMedium text-sm text-[var(--treatment-gray-color)]">
                  Using herbs and natural therapies for healing.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-20 h-20 rounded-full p-3 bg-[#FCF1F1] flex justify-center items-center">
                <img className="w-12 h-12" src="/frame18.png" alt="" />
              </div>
              <div className="text-left  w-64">
                <h3 className="font-dinPro text-xl">Boosting immunity</h3>
                <p className="font-dinProMedium text-sm text-[var(--treatment-gray-color)]">
                  Stay strong and healthy for life, not just for today.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Discover;
