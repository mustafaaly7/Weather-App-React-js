import { useEffect, useState } from 'react'
import { Weather } from './components/weather';
import './App.css'

function App() {
  const popularCities = [
    "New York",      // United States
    "Los Angeles",   // United States
    "Chicago",       // United States
    "Houston",       // United States
    "Phoenix",       // United States
    "London",        // United Kingdom
    "Paris",         // France
    "Tokyo",         // Japan
    "Sydney",        // Australia
    "Toronto",       // Canada
    "Berlin",        // Germany
    "Rome",          // Italy
    "Madrid",        // Spain
    "Dubai",         // United Arab Emirates
    "Shanghai",      // China
    "Moscow",        // Russia
    "São Paulo",     // Brazil
    "Mexico City",   // Mexico
    "Istanbul",      // Turkey
    "Mumbai",        // India
    "Cape Town",     // South Africa
    "Karachi",       // Pakistan
    "Lahore",        // Pakistan
    "Islamabad",     // Pakistan
    "Dhaka",         // Bangladesh
    "Chittagong",    // Bangladesh
    "Sylhet"         // Bangladesh
  ];
  const [weatherData,setWeatherData] = useState([])
  const [loader, setLoader] = useState(false)
  const [selectedCity, setSelectedCity] = useState(popularCities[0])
  // console.log(selectedCity);


  useEffect(() => {
    setLoader(true)
    console.log(loader);
    
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${selectedCity}&appid=1f136667cfcdb418bf8b7a4c5a542f00`)
      .then((res) => res.json())
      .then((data) => {
        setWeatherData(data)
        // console.log("weahter data",weatherData);
        setLoader(false)
        // console.log(selectedCity);
        
        

        
      }
      ).catch((err)=>console.log(err)
    )
  }, [selectedCity])



  return (
    <>




      <h1 className="text-center text-4xl font-bold my-8">Weather App</h1>
      <div className="card bg-white border border-gray-300 rounded-lg shadow-md max-w-lg mx-auto p-4">

        <div className="mb-4 text-center">
          <h5 className="text-2xl font-semibold mb-2">
            Search Your City
          </h5>

          <select name="cities" className='block w-full p-2 border border-gray-300 rounded-md bg-gray-100' onChange={(e) => setSelectedCity(e.target.value)} >
            {popularCities.map((name, index) => (
              // <option  />
              <option key={index} value={name} className='text-black' >{name}</option>
            ))}

          </select>



        </div>
{loader?(
  
  <h1 className='text-xl text-white text-center'>LOADING......</h1>
):(

<Weather weatherData={weatherData}/>
  
  
  
)}

      </div>















    </>
  )
}

export default App
