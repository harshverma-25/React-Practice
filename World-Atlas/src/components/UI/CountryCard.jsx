import React from 'react'
import { NavLink } from 'react-router-dom'

const CountryCard = ({ country }) => {
  const { flags, name, capital, region, population } = country

  return (
    <div className="bg-white w-72 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden border border-gray-100">
      
      <img 
        src={flags?.png}
        alt={`${name?.common} flag`}
        className="w-full h-40 object-cover"
      />

      <div className="p-5 space-y-2">
        <h3 className="text-xl font-bold text-gray-800">
          {name?.common}
        </h3>

        <p className="text-gray-600 text-sm">
          <span className="font-semibold text-gray-800">Capital:</span> {capital?.[0]}
        </p>

        <p className="text-gray-600 text-sm">
          <span className="font-semibold text-gray-800">Region:</span> {region}
        </p>

        <p className="text-gray-600 text-sm">
          <span className="font-semibold text-gray-800">Population:</span>{" "}
          {population?.toLocaleString()}
        </p>
      </div>

     <NavLink to={`/country/${name.common}`}>
         <button className="bg-indigo-600 text-white w-full py-2 rounded-b-2xl hover:bg-indigo-700 transition cursor-pointer">
        View Details
      </button>
     </NavLink>
    </div>
  )
}

export default CountryCard