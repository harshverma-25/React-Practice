import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        <NavLink to="/" className="text-2xl font-bold tracking-wide">
          🌍 World Atlas
        </NavLink>

        <ul className="flex gap-6 font-medium">
          <li><NavLink className="hover:text-yellow-300 transition" to="/">Home</NavLink></li>
          <li><NavLink className="hover:text-yellow-300 transition" to="/about">About</NavLink></li>
          <li><NavLink className="hover:text-yellow-300 transition" to="/country">Country</NavLink></li>
          <li><NavLink className="hover:text-yellow-300 transition" to="/contact">Contact</NavLink></li>
        </ul>

      </div>
    </div>
  )
}

export default Header