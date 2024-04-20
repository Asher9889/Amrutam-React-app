import React from 'react'

const ImageCard = ({image}) => {
  return (
    <div>
      <img className='lg:w-[16.5vw] w-[420px] lg:h-fit h-72' src={image} alt="" />
    </div>
  )
}

export default ImageCard
