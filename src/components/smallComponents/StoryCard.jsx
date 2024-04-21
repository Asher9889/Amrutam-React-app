import React from 'react'

const StoryCard = () => {
  return (
    <div className='w-72 h-64 bg-white  rounded-xl shadow-xl flex flex-col gap-2  shadow-xl'>
      <p className=' w-full rounded-t-xl p-1 px-4 font-nunito text-sm bg-[#ECE7FF]'>Consulted for Skin</p>
      <div className='flex justify-center  items-start gap-1 lg:gap-2 justify-start px-4'>
        <div className='w-12 h-12 rounded-full bg-zinc-400'>
        </div>
        <div className='font-mixed font-semibold text-medium leading-6 mr-5 text-[#414141]'>
          <h3 >Sophie Moore</h3>
          <p className='font-thin text-start'>Chennai</p>
        </div>
        <div className='font-nexa text-sm'>
          17/02/24
        </div>
      </div>
      <img className='w-28 h-5  ml-4' src="/frame23.png" alt="" />
      <h3 className=' ml-4 text-[#333333] font-dmSans'>"One of a kind service"</h3>
      <p className=' ml-3 font-dmSansRegular text-[#555555]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, laboriosam.</p>
    </div>
  )
}

export default StoryCard
