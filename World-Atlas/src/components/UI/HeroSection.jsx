import React from 'react'

const HeroSection = () => {
  return (
    <div>
            <div><h1 className='text-3xl font-bold text-center'>Explore the World, One Country at a Time</h1>
            <p>Discover the history, culture, and beauty of every nation. Sort,
                search, and filter through countries to find the details you need.</p>
            </div>
            <div>
                <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29ybGR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60" alt="World Map" className='w-full h-auto rounded-lg shadow-md' />
            </div>
        </div>
  )
}

export default HeroSection