import React from 'react'
import "./ctd.css"
const CTD = () => {
  return (
    <div className='flex flex-col lg:flex-row pb-6 lg:pb-[0]  w-[100vw] h-fit lg:h-[100vh] bg-[var(--primary-bg-color)]'>
      <div className=' flex-1 flex flex-col items-center lg:items-end'>
        <div className=' lg:w-[70%] w-fit mt-14 lg:mt-28'>
          <h1 className='font-dinPro text-center lg:text-start text-4xl mb-5 text-[var(--green-color)] '>Amrutam home App</h1>
          <h1 className='font-dinProRegular px-6 text-xs lg:p-[0] text-center lg:text-start text-[#676767] mb-5 lg:text-sm'>The Amrutam Home App is your one-stop app for all things Ayurveda! Apart from mimicking the significant characteristics of our website, this app offers a wide range of additional features.</h1>
          <img className='lg:hidden'  src="/frame27.png" alt="" />
          <h1 className='font-dinProMedium px-6 text-center lg:text-start  lg:px-[0] text-xl lg:text-2xl'>Get a diet & lifestyle consultation with ayurvedic experts across the globe</h1>
        </div>
        
        <div className=' lg:w-[70%] w-fit mt-10 flex flex-col'>
          <p className='font-dinPro text-center text-2xl mb-8'>Get the App Now</p>
          <div className='lg:w-[100%] flex lg:flex-row flex-col  gap-5'>
            <img className='w-44 h-14' src="/frame28.png" alt="" />
            <img className='w-44 h-14' src="/frame29.png" alt="" />
          </div>
        </div>
      </div>
      <div className='hidden lg:block flex-1 mt-14 pr-14'>
        <img  src="/frame27.png" alt="" />
      </div>
    </div>
  )
}

export default CTD
