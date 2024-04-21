import React from 'react'
import "./approach.css"
import Heading from "../smallComponents/Heading"
import CountCard from '../smallComponents/CountCard'

const Approach = () => {

  const text = "Our Ayurvedic Approach"
  const data = [
    {count: 1, title: "Make Appointment", description: "You must make an appointment in advance, to choose the service and date." },
    {count: 2, title: "Consultations", description: "The next stage involves a thorough consultation with an Ayurveda practitioner." },
    {count: 3, title: "Treatment Planning", description: "The Ayurvedic practitioner creates a personalized treatment plan for you" },
    {count: 4, title: "Maintenance", description: "These visits allow for assessment of progress, adjustments to the treatment." },
  ]

  return (
    <>
    <div className='w-[100vw] h-fit lg:h-[100vh]  pt-10'>
      <div className=' flex flex-col gap-3 items-center'>
        <div className=' text-4xl text-center'>
          <Heading value={text}/>
        </div>
        <div className='lg:w-[45%] text-[16px] w-72 text-center lg:text-lg  font-dinProMedium lg:text-center text-[#323232]'>
        At Amrutam we follow a unique and personalized approach to healing. Our expert practitioners begin each treatment process by conducting a thorough analysis of the patient’s body type, medical history, and current health conditions.
        </div>
      </div>
      <div className='flex gap-5 mt-16 overflow-x-auto  pb-10 flex-row justify-center items-center'>
        {data.map((elem,index)=> <CountCard count={elem.count} title={elem.title} desc={elem.description}/>)}
        
      </div>
    </div>
    </>
  )
}

export default Approach;
