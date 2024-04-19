import React from 'react'

const TextCard = ({title, desc}) => {
  return (
    <div className='w-56 h-[32vh] shadow-xl flex flex-col px-4 gap-3 pt-5 items-start rounded-2xl border-t-4 border-[var(--green-color)] bg-[var(--secondary-bg-color)]'>
      <h3 className='font-dinPro text-xl text-[var(--green-color)]'>{title}</h3>
      <p className='font-dinProMedium text-sm text-[#414141]'>{desc}</p>
    </div>
  )
}

export default TextCard
