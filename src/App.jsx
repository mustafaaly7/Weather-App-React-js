import { useState } from 'react'
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
const [loader,setLoader] = useState(true)
const[selectedCity,setSelectedCity]=useState(popularCities[0])






  return (
    <>
    



<h1 className="m-5 mx-auto text-6xl font-mono ">Weather App</h1>
            <div className=" font-mono card max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
               
                <div className="p-5">
                    
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Noteworthy technology acquisitions 2021
                        </h5>
                    
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        Here are the biggest enterprise technology acquisitions of 2021 so far, in
                        reverse chronological order.
                    </p>
                    
                </div>
            </div>















    </>
  )
}

export default App
