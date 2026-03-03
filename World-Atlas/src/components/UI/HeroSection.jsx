import React from 'react'

const HeroSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">

      <div className="space-y-6">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight">
          Explore the World, <span className="text-indigo-600">One Country</span> at a Time
        </h1>

        <p className="text-gray-600 text-lg">
          Discover the history, culture, and beauty of every nation. 
          Sort, search, and filter through countries to find the details you need.
        </p>

        <button className="bg-indigo-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-indigo-700 transition">
          Start Exploring
        </button>
      </div>

      <div>
        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
          alt="World Map"
          className="rounded-2xl shadow-xl"
        />
      </div>

    </div>
  )
}

export default HeroSection