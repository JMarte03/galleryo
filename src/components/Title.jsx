import React from 'react'
import SearchBar from './SearchBar'

const Title = ({children}) => {
  return (
    <div className='flex flex-col-reverse gap-y-10 mb-20 md:flex-row md:justify-between'>
      <h1 className='font-openSans font-bold text-4xl text-deepPurple'>
          {children}
      </h1>
      <SearchBar  />
    </div>
  )
}

export default Title