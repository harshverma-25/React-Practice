import axios from 'axios';

const api = axios.create({
  baseURL: 'https://restcountries.com/v3.1',
});

// Fetch all countries
export const getCountryData = async () => {
  try {
    const response = await api.get(
      '/all?fields=name,capital,region,population,flags'
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching country data:', error);
    throw error;
  }
};

// Fetch country by name
export const getCountryByName = async (name) => {
  try {
    const response = await api.get(
      `/name/${name}?fullText=true&fields=name,population,region,subregion,capital,tld,currencies,languages,borders,flags`
    );

    return response.data[0];  //  return only country object
  } catch (error) {
    console.error(`Error fetching data for country ${name}:`, error);
    throw error;
  }
};