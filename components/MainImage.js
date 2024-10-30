import React from 'react'

const MainImage = ({image}) => {
  return (
    <img className='h-full w-auto' src={image} alt='Selected Product'/>
  )
}

export default MainImage