import React from 'react'
import data from '../api/countryData.json'

const About = () => {
    
  return (
    <div>
        <div><h1 className='text-3xl font-bold text-center'>Here are the Interesting Facts we're proud of</h1></div>
        <div className='flex flex-wrap gap-10 mt-15 mb-10 justify-center'>
            {data.map((item, index) => (
                <div key={index} className='h-70 w-70 border justify-center items-center flex flex-col gap-2 p-4 rounded-lg shadow-md'>
                    <h2 className='text-xl font-semibold mb-2'>{item.countryName}</h2>
                    <p>Capital: {item.capital}</p>
                    <p>Population: {item.population.toLocaleString()}</p>
                    <p>Interesting Fact: {item.interestingFact}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default About