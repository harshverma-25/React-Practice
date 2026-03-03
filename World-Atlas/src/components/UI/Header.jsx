import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className='flex justify-around items-center p-4 bg-gray-800 text-white'>
        <div className='text-2xl font-bold'><NavLink to='/'>World Atlas</NavLink></div>
        <div className='flex gap-4 [&>li]:cursor-pointer'>
            <ul className='flex gap-4 [&>li]:cursor-pointer'>
                <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='/about'>About</NavLink></li>
                <li><NavLink to='/country'>Country</NavLink></li>
                <li><NavLink to='/contact'>Contact</NavLink></li>
            </ul>
        </div>
    </div>
  )
}

export default Header