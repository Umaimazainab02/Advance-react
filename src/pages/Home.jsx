import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()

  return (
    <div className='flex flex-row'>
      
      <h1 className='text-2xl font-bold bg-amber-300 w-35 active:scale-95 text-center m-4 p-4 rounded text-black'>
        Home
      </h1>

      <button
        onClick={() => navigate(-1)}
        className='text-2xl font-bold bg-emerald-700 w-35 active:scale-95 text-center m-4 p-4 rounded text-white'
      >
        Back
      </button>
      <button
        onClick={() => navigate('/about')}
        className='text-2xl font-bold bg-red-700 w-35 active:scale-95 text-center m-4 p-4 rounded text-white'
      >
        Next
      </button>

    </div>
  )
}

export default Home
