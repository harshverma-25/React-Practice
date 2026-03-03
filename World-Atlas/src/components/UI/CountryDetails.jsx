import React, { useEffect, useState, useTransition } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getCountryByName } from '../../api/postApi'
import Loader from './Loader'

const CountryDetails = () => {
  const params = useParams()
  const [isPending, startTransition] = useTransition()
  const [country, setCountry] = useState(null)

  useEffect(() => {
    startTransition(async () => {
      const res = await getCountryByName(params.id)
      setCountry(res)
    })
  }, [params.id])

  if (isPending || !country) {
    return <Loader />
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-6">
      
      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl p-10">

        {/* Back Button */}
        <Link
          to="/country"
          className="inline-flex items-center gap-2 mb-8 bg-indigo-600 text-white px-6 py-2 rounded-full shadow-md hover:bg-indigo-700 transition-all duration-300 hover:scale-105"
        >
          ← Back to Countries
        </Link>

        <div className="grid md:grid-cols-2 gap-14 items-center">

          {/* Flag Section */}
          <div className="relative">
            <img
              src={country.flags?.png}
              alt={country.name?.common}
              className="w-full rounded-2xl shadow-lg"
            />
            <div className="absolute bottom-4 left-4 bg-black/60 text-white px-4 py-1 rounded-full text-sm">
              {country.region}
            </div>
          </div>

          {/* Details Section */}
          <div>

            <h1 className="text-5xl font-extrabold text-gray-800 mb-6">
              {country.name?.common}
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-700">

              <div className="bg-gray-50 p-4 rounded-xl shadow-sm">
                <p className="text-sm text-gray-500">Official Name</p>
                <p className="font-semibold">{country.name?.official}</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-xl shadow-sm">
                <p className="text-sm text-gray-500">Capital</p>
                <p className="font-semibold">{country.capital?.[0]}</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-xl shadow-sm">
                <p className="text-sm text-gray-500">Sub Region</p>
                <p className="font-semibold">{country.subregion}</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-xl shadow-sm">
                <p className="text-sm text-gray-500">Population</p>
                <p className="font-semibold">
                  {country.population?.toLocaleString()}
                </p>
              </div>

              <div className="bg-gray-50 p-4 rounded-xl shadow-sm">
                <p className="text-sm text-gray-500">Top Level Domain</p>
                <p className="font-semibold">
                  {country.tld?.join(", ")}
                </p>
              </div>

              <div className="bg-gray-50 p-4 rounded-xl shadow-sm">
                <p className="text-sm text-gray-500">Languages</p>
                <p className="font-semibold">
                  {country.languages &&
                    Object.values(country.languages).join(", ")}
                </p>
              </div>

              <div className="bg-gray-50 p-4 rounded-xl shadow-sm col-span-1 sm:col-span-2">
                <p className="text-sm text-gray-500">Currencies</p>
                <p className="font-semibold">
                  {country.currencies &&
                    Object.values(country.currencies)
                      .map((cur) => cur.name)
                      .join(", ")}
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  )
}

export default CountryDetails