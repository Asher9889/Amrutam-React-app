import React from 'react'

const Heading = ({value}) => {
  return (
    <div className='relative pb-2 ' >
      <p className=' px-4 font-dinPro text-4xl text-[var(--green-color)] absolute'>{value}</p>
      <hr className='border-b-4 rounded-[3px] border-t-0 w-full border-[var(--line-color)] pt-[34px]   ' />
    </div>
  )
}

export default Heading
