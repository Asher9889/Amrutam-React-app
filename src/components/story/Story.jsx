import React from 'react'
import "./story.css"
import Heading from '../smallComponents/Heading'
import StoryCard from '../smallComponents/StoryCard'

const Story = () => {
  const data = [1,2,3]
  const text = "Stories from our valued customers!"
  return (
    <div className='w-[100vw] h-[95vh] gap-16 bg-[var(--primary-bg-color)] flex flex-col items-center pt-14'>
      
      <Heading value={text}/>
      
      <div className='flex gap-8'>
        {data.map((elem,index)=> <StoryCard key="elem"/>)}
      </div>
      <div >
        <span className='inline-block w-2 h-2 rounded-full bg-zinc-700 mr-3'></span>
        <span className='inline-block w-2 h-2 rounded-full bg-zinc-400 mr-3'></span>
        <span className='inline-block w-2 h-2 rounded-full bg-zinc-400 mr-3'></span>
      </div>
      
    </div>
  )
}

export default Story
