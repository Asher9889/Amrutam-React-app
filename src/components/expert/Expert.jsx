import React from 'react'
import "./expert.css"
import Heading from "../smallComponents/Heading"
import ExpertCard from '../smallComponents/ExpertCard'
const Expert = () => {
  let card = [1,2,3]
  const text = "Meet our Ayurveda experts"

  return (
    <div className='w-[100vw] h-[100vh]  pt-10 flex flex-col gap-7 items-center'>
      
      <div className='w-[37.5%]'>
        <Heading value={text}/>
      </div>
        
        
      <div className='flex gap-8 items-center gap-10'>
        <div className='w-14 h-14  border border-[#A5A5A5] rounded-full flex justify-center items-center'><i class="ri-arrow-left-line text-2xl text-[#A5A5A5]"></i></div>
        {card.map((elem,index)=> <ExpertCard key={elem}/> )}
        <div className='w-14 h-14  border border-[#A5A5A5] rounded-full flex justify-center items-center'><i class="ri-arrow-right-line text-2xl text-[#A5A5A5]"></i></div>

      </div>
      <div >
        <span className='inline-block w-2 h-2 rounded-full bg-zinc-700 mr-6'></span>
        <span className='inline-block w-2 h-2 rounded-full bg-zinc-400 mr-6'></span>
        <span className='inline-block w-2 h-2 rounded-full bg-zinc-400 mr-6'></span>
      </div>

      <div className='bg-[#D9D9D9] text-xl px-4 py-2 border-2 border-[var(--green-color)] font-dinProMedium text-[var(--green-color)]'>
        Find more experts
        <i class="ri-arrow-right-s-line"></i>
      </div>
    </div>
  )
}

export default Expert
