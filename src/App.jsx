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




      <h1 className="m-5 mx-auto text-6xl font-mono ">Weather App</h1>
      <div className=" text-white font-mono card max-w-lg max-h-lg bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

        <div className="p-5">
          <h5 className="mb-2 text-4xl font-mono   ">
            Search Your City
          </h5>

          <select name="cities" className='text-black text-3xl my-4' onChange={(e) => setSelectedCity(e.target.value)} >
            {popularCities.map((name, index) => (
              // <option  />
              <option key={index} value={name} className='text-black' >{name}</option>
            ))}

          </select>



        </div>
{loader?(
  
  <h1 className='text-white text-3xl my-6'>LOADING......</h1>
):(

<Weather weatherData={weatherData}/>
  
  
  
)}

      </div>















    </>
  )
}

export default App
