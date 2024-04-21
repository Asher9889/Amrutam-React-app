import React from 'react'

const Button = ({value}) => {
  return (
    <div className='bg-[var(--green-color)] mx-auto w-fit px-5 py-3 rounded-md  font-dinProMedium text-[var(--secondary-bg-color)]'>
      <p>{value.toUpperCase()}</p>
    </div>
  )
}

export default Button
