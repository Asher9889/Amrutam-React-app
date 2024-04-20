import React from 'react'

const TextCard = ({title, desc}) => {
  return (
    <div className='lg:w-56 w-fit h-60 lg:h-[32vh] p-10 gap-6 shadow-xl flex flex-col lg:px-4 lg:gap-3 lg:pt-5 items-start rounded-2xl border-t-4 border-[var(--green-color)] bg-[var(--secondary-bg-color)]'>
      <h3 className='font-dinPro text-xl text-[var(--green-color)]'>{title}</h3>
      <p className='font-dinProMedium text-sm text-[#414141]'>{desc}</p>
    </div>
  )
}

export default TextCard
