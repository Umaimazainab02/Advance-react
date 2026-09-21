import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='flex justify-between bg-cyan-900 p-6  text-white'>
        <h1 className='text-3xl italic'>Umaima Zainab</h1>
        <div className='flex gap-12 text-white text-xl'>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/product'>Product</Link>
        </div>
    </div>
  )
}

export default Navbar