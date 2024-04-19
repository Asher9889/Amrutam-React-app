import React from 'react'
import "./consultation.css"
import Heading from "../smallComponents/Heading"
import TextCard from '../smallComponents/TextCard'
import ImageCard from '../smallComponents/ImageCard'
const Consultation = () => {

  const text = "What sets Ayurvedic consultations apart?"

  const title1 = "Precise Diagnosis";
  const title2 = "Zero side-effects";
  const title3 = "Individual Treatment";
  const description1 = "Ayurveda's core principles revolve around Vata, Pitta, and Kapha doshas, guiding you with precise diagnosis and treatment.";
  const description2 = "Ayurvedic treatments are devoid of chemicals, and are based completely on natural herbs "
  const description3 = "all Treatments are personalized based on a person's unique constitution and health concerns."
  const image1 = "/frame21.png";
  const image2 = "/frame20.png";

  return (
    <div className=' w-[100vw] h-[100vh] bg-[var(--primary-bg-color)] '>
      <div className='h-[20vh] flex flex-col justify-center'>
        <div className=' mx-auto'>
          <Heading value={text}/>
        </div>
      </div>

      <div className="h-[80vh]  ">
        <div className='w-full  h-full px-44'>
          <div className='flex gap-2'>
            <div className='w-[31vw]  shadow-xl border-t-4 border-[var(--green-color)] h-[32vh] p-5 rounded-2xl text-[var(--green-color)] bg-[var(--secondary-bg-color)]'>
              <p className='font-inkNut text-3xl text-center mb-3'>स्वस्थस्य स्वास्थ्य रक्षणं, आतुरस्य विकार प्रशमनं ।"</p>
              <p className='font-dinProMedium text-sm text-center'>[ Meaning: The Goal of Ayurveda is to maintain the health of a healthy person and to cure the disease of a diseased person. ]</p>
            </div>
          
            <img className='w-[20vw] h-[33.7vh]' src="/frame19.png" alt="" />
            
            <TextCard title={title1} desc={description1}/>
          </div>
  
          <div className='flex mt-2 gap-2'>
            <TextCard title={title2} desc={description2}/>
            <ImageCard image={image1}/>
            <TextCard title={title3} desc={description3}/>
            <ImageCard image={image2}/>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Consultation
