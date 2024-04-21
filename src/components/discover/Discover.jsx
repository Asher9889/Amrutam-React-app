import React from 'react'
import "./discover.css"
import Heading from '../smallComponents/Heading'
const Discover = () => {

  const text = "Discover Ayurveda's magic with us"

  return (
    <div className='w-[100vw] h-fit lg:h-[105vh] px-4  flex flex-col lg:gap-5 items-center pt-10 lg:pt-7'>
      
      <div className='text-center  flex flex-col gap-3 px-3'>
        <Heading value={text}/>
        <p className='font-dinProMedium text-sm text-[var(--dark-gray-color)]'>Ayurvedic treatment aims to balance your body and mind, bringing harmony <br /> and vitality. It's like a journey to better health using ancient wisdom, <br /> a totally effective approach for a better life.</p>
      </div>
      <div className='flex-1 pt-6 lg:hidden   relative'>
        <img className='w-[95%] bg-transparent' src="/frame5.png" alt="" />
        <img className='w-[95%] bg-transparent absolute top-12 right-7 ' src="/frame6.png" alt="" />
      </div>

      <div className='lg:hidden  pb-10 flex flex-row gap-4 px-5 flex-wrap w-full h-fit'>
        
        <div className='flex h-[297.33px]  flex-col px-2  items-center border border-[#E4E4E4] py-6 rounded-xl w-40 h-fit  gap-4 mt-5'>
          <div className='w-20 h-20 rounded-full p-3 bg-[#EDF5FA] flex justify-center items-center'>
            <img className="w-12 h-12" src="/frame13.png" alt="" />
          </div>
          <div className=' flex gap-4 flex-col'>
            <h3 className='text-center font-dinPro text-lg'>Personalized Wellness</h3>
            <p className=' text-center font-dinProMedium text-sm text-[var(--treatment-gray-color)]'>Get treatments made just for you based on your individual doshas &#160;( body type)</p>
          </div>
        </div>

        <div className='flex h-[297.33px]  flex-col px-2  items-center border border-[#E4E4E4] py-6 rounded-xl w-40 h-fit  gap-4 mt-5'>
          <div className='w-20 h-20 rounded-full p-3 bg-[#EDF5FA] flex justify-center items-center'>
            <img className="w-12 h-12" src="/frame14.png" alt="" />
          </div>
          <div className=' flex gap-4 flex-col'>
            <h3 className='text-center font-dinPro text-lg'>Focus on prevention</h3>
            <p className=' text-center font-dinProMedium text-sm text-[var(--treatment-gray-color)]'>Stop problems even before they start.</p>
          </div>
        </div>

        <div className='flex h-[297.33px]  flex-col px-2  items-center border border-[#E4E4E4] py-6 rounded-xl w-40 h-fit  gap-4 mt-5'>
          <div className='w-20 h-20 rounded-full p-3 bg-[#EDF5FA] flex justify-center items-center'>
            <img className="w-12 h-12" src="/frame15.png" alt="" />
          </div>
          <div className=' flex gap-4 flex-col'>
            <h3 className='text-center font-dinPro text-lg'>Mind-Body Connection</h3>
            <p className=' text-center font-dinProMedium text-sm text-[var(--treatment-gray-color)]'>Keep your mind and body in sync for a happy life.</p>
          </div>
        </div>
        
        <div className='flex h-[297.33px]  flex-col px-2  items-center border border-[#E4E4E4] py-6 rounded-xl w-40 h-fit  gap-4 mt-5'>
          <div className='w-20 h-20 rounded-full p-3 bg-[#EDF5FA] flex justify-center items-center'>
            <img className="w-12 h-12" src="/frame16.png" alt="" />
          </div>
          <div className=' flex gap-4 flex-col'>
            <h3 className='text-center font-dinPro text-lg'>Holistic Healing</h3>
            <p className=' text-center font-dinProMedium text-sm text-[var(--treatment-gray-color)]'>Fix the root problem for long-lasting health.</p>
          </div>
        </div>

        <div className='flex h-[297.33px]   flex-col px-2  items-center border border-[#E4E4E4] py-6 rounded-xl w-40 h-fit  gap-4 mt-5'>
          <div className='w-20 h-20 rounded-full p-3 bg-[#EDF5FA] flex justify-center items-center'>
            <img className="w-12 h-12" src="/frame17.png" alt="" />
          </div>
          <div className=' flex gap-4 flex-col'>
            <h3 className='text-center font-dinPro text-lg'>Natural Remedies</h3>
            <p className=' text-center font-dinProMedium text-sm text-[var(--treatment-gray-color)]'>Using herbs and natural therapies for healing.</p>
          </div>
        </div>

        <div className='flex h-[297.33px]   flex-col px-2  items-center border border-[#E4E4E4] py-6 rounded-xl w-40 h-fit  gap-4 mt-5'>
          <div className='w-20 h-20 rounded-full p-3 bg-[#EDF5FA] flex justify-center items-center'>
            <img className="w-12 h-12" src="/frame18.png" alt="" />
          </div>
          <div className=' flex gap-4 flex-col'>
            <h3 className='text-center font-dinPro text-lg'>Boosting immunity</h3>
            <p className=' text-center font-dinProMedium text-sm text-[var(--treatment-gray-color)]'>Stay strong and healthy for life, not just for today.</p>
          </div>
        </div>
        
      </div>
      
      <div className='hidden lg:block flex  w-full'>

        <div className='flex-1 relative -mr-5 z-10  flex flex-col gap-14 items-end '>

          <div className='flex items-center  gap-3 mt-5'>
            <div className='text-right flex flex-col items-end w-52 '>
              <h3 className='font-dinPro text-xl'>Personalized Wellness</h3>
              <p className='font-dinProMedium text-sm text-[var(--treatment-gray-color)]'>Get treatments made just for you based on your individual doshas &#160;( body type)</p>
            </div>
            <div className='w-20 h-20 rounded-full p-3 bg-[#EDF5FA] flex justify-center items-center'>
              <img className="w-12 h-12" src="/frame13.png" alt="" />
            </div>
          </div>
          

          <div className='flex items-center mr-8 gap-3'>
            <div className='text-right flex flex-col items-end w-48 '>
              <h3 className='font-dinPro text-xl'>Focus on prevention</h3>
              <p className='font-dinProMedium text-sm text-[var(--treatment-gray-color)]'>Stop problems even before they start.</p>
            </div>
            <div className='w-20 h-20 rounded-full p-3 bg-[#EAF2EA] flex justify-center items-center'>
              <img className="w-12 h-12" src="/frame14.png" alt="" />
            </div>
          </div>

          <div className='flex items-center  gap-3'>
            <div className='text-right flex flex-col items-end w-52 '>
              <h3 className='font-dinPro text-xl'>Mind-Body Connection</h3>
              <p className='font-dinProMedium text-sm text-[var(--treatment-gray-color)]'>Keep your mind and body in sync for a happy life.</p>
            </div>
            <div className='w-20 h-20 rounded-full p-3 bg-[#FCF1F1] flex justify-center items-center'>
              <img className="w-12 h-12" src="/frame15.png" alt="" />
            </div>
          </div>

        </div>

        <div className='flex-1    relative'>
          <img className='w-[95%] bg-transparent' src="/frame5.png" alt="" />
          <img className='w-[95%] bg-transparent absolute top-8 right-8 ' src="/frame6.png" alt="" />
        </div>

        <div className='flex-1 relative -ml-7 z-10  flex flex-col gap-14 items-start '>

          <div className='flex items-center  gap-3 mt-5'>
            <div className='w-20 h-20 rounded-full p-3 bg-[#EDF5FA] flex justify-center items-center'>
              <img className="w-12 h-12" src="/frame16.png" alt="" />
            </div>
            <div className=' flex flex-col items-start w-52 '>
              <h3 className='font-dinPro text-xl'>Holistic Healing</h3>
              <p className='font-dinProMedium text-sm text-[var(--treatment-gray-color)]'>Fix the root problem for long-lasting health.</p>
            </div>
          </div>
          

          <div className='flex items-center ml-8 gap-3'>
            <div className='w-20 h-20 rounded-full p-3 bg-[#EAF2EA] flex justify-center items-center'>
              <img className="w-12 h-12" src="/frame17.png" alt="" />
            </div>
            <div className=' flex flex-col items-start w-48 '>
              <h3 className='font-dinPro text-xl'>Natural Remedies</h3>
              <p className='font-dinProMedium text-sm text-[var(--treatment-gray-color)]'>Using herbs and natural therapies for healing.</p>
            </div>
          </div>

          <div className='flex items-center  gap-3'>
            <div className='w-20 h-20 rounded-full p-3 bg-[#FCF1F1] flex justify-center items-center'>
              <img className="w-12 h-12" src="/frame18.png" alt="" />
            </div>
            <div className=' flex flex-col items-start w-52 '>
              <h3 className='font-dinPro text-xl'>Boosting immunity</h3>
              <p className='font-dinProMedium text-sm text-[var(--treatment-gray-color)]'>Stay strong and healthy for life, not just for today.</p>
            </div>
          </div>

        </div>
        
      </div>
    </div>
  )
}

export default Discover