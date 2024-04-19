import React from 'react'
import "./ctd.css"
const CTD = () => {
  return (
    <div className='flex w-[100vw] h-[100vh] bg-[var(--primary-bg-color)]'>
      <div className=' flex-1 flex flex-col items-end'>
        <div className=' w-[70%] mt-28'>
          <h1 className='font-dinPro text-4xl mb-5 text-[var(--green-color)] '>Amrutam home App</h1>
          <h1 className='font-dinProRegular text-[#676767] mb-5 text-sm'>The Amrutam Home App is your one-stop app for all things Ayurveda! Apart from mimicking the significant characteristics of our website, this app offers a wide range of additional features.</h1>
          <h1 className='font-dinProMedium text-2xl'>Get a diet & lifestyle consultation with ayurvedic experts across the globe</h1>
        </div>
        <div className=' w-[70%] mt-10 flex flex-col'>
          <p className='font-dinPro text-2xl mb-8'>Get the App Now</p>
          <div className='w-[100%] flex  gap-5'>
            <img className='w-44 h-14' src="/frame28.png" alt="" />
            <img className='w-44 h-14' src="/frame29.png" alt="" />
          </div>
        </div>
      </div>
      <div className=' flex-1 mt-14 pr-14'>
        <img  src="/frame27.png" alt="" />
      </div>
    </div>
  )
}

export default CTD
