import React from 'react'
import icon from '../assets/images/search-icon.svg'

const SearchIcon = () => {
  return (
    <div className='flex justify-center items-center absolute h-3/5 left-1.5'>
        <img src={icon.src} alt="Search Icon" className="w-6 h-6" />
    </div>
  )
}

export default SearchIcon