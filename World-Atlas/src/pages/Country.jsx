import React, { use, useState, useTransition } from 'react'
import { useEffect } from 'react'
import { getCountryData } from '../api/postApi';
import CountryCard from '../components/UI/CountryCard';
import Loader from '../components/UI/Loader';
import SearchFilter from '../components/UI/SearchFilter';

const Country = () => {
    const [isPending, startTransition] = useTransition();
    const [countries, setCountries] = useState([]);
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState("");

    useEffect(() => {
        
        startTransition(async () => {
            const res = await getCountryData();
            setCountries(res);
        })

    }, [])


  const filteredCountries = countries.filter((country) => {
    const matchesSearch =
      country.name.common
        .toLowerCase()
        .includes(search.toLowerCase())

    const matchesRegion =
      filter === "" || country.region === filter

    return matchesSearch && matchesRegion
  })

    if (isPending) {
        return <Loader />;
    }

  return (
  <div className="max-w-7xl mx-auto px-6 py-10">
    <SearchFilter search={search} setSearch={setSearch} filter={filter} setFilter={setFilter} />
    <ul className='flex flex-wrap gap-8 justify-center'>
      {filteredCountries.map((country, index) => (
        <CountryCard key={index} country={country}/>
      ))}
    </ul>
  </div>
)
}

export default Country;