import React from 'react'
import { Search } from 'lucide-react'

const SearchFilter = ({ search, setSearch, filter, setFilter }) => {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 mb-10 border border-gray-100">
      
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">

        {/* Search Input */}
        <div className="relative w-full md:w-1/2">
          <Search 
            size={18} 
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" 
          />

          <input
            type="text"
            placeholder="Search countries..."
            className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition shadow-sm"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Filter Dropdown */}
        <div className="w-full md:w-auto">
          <select
            className="w-full px-5 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition shadow-sm cursor-pointer"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="">🌍 All Regions</option>
            <option value="Africa">Africa</option>
            <option value="Americas">Americas</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
        </div>

      </div>
    </div>
  )
}

export default SearchFilter