import React from 'react'

const CountCard = ({title, count, desc}) => {
  return (
    <div className='lg:w-56 w-56 h-60 border-t-4 shrink-0 border-[var(--green-color)] lg:h-64 bg-[var(--primary-bg-color)] flex flex-col items-center p-4 lg:p-3 gap-3 pt-6 shadow-xl rounded-xl  font-dinPro'>
      <div className='w-16 h-16 text-3xl  text-[var(--secondary-bg-color)] bg-[var(--green-color)] rounded-full flex justify-center items-center'>
        {count}
      </div>
      <div className='text-center'>
        <h3 className='text-[var(--green-color)] mb-2 text-lg'>{title}</h3>
        <p className='font-dinProMedium text-[#2E2E2E] leading-5'>{desc}</p>
      </div>
    </div>
  )
}

export default CountCard
