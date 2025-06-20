import React from 'react'
import { GoArrowLeft } from "react-icons/go";
import { useNavigate } from 'react-router-dom';


const GoBack = () => {
  const navigate = useNavigate()
  return (
    <div onClick={() => navigate(-1)} className='cursor-pointer mb-10 rounded-full p-3 w-fit bg-black/5 hover:bg-black/10 transition-all duration-75'>
        <GoArrowLeft className='text-xl' />
    </div>
  )
}

export default GoBack