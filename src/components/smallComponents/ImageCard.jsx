import React from 'react'

const ImageCard = ({image}) => {
  return (
    <div>
      <img className='w-[16.5vw]' src={image} alt="" />
    </div>
  )
}

export default ImageCard
