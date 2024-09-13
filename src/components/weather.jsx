



function Weather({weatherData}){
    console.log(weatherData);
    
    const {  main, sys ,weather ,name } = weatherData;
    const temp = Math.round(main?.temp - 273.15);
    const feels_like = Math.round(main?.feels_like - 273.15);
   


return(
    <>
   
  
    <div className=" bg-opacity-80 p-10 rounded-lg shadow-lg text-center">
      
      <h1 className="text-3xl font-bold underline my-4">{name}</h1>
      <h2 className="text-2xl mb-4">
        {temp}°C (Feels like: {feels_like}°C)
      </h2>
      <div className="text-3xl my-2 flex justify-between">
        <span className="font-semibold">Humidity:</span>
        <span>{main?.humidity}%</span>
      </div>
      <div className="text-3xl my-2 flex justify-between">
        <span className="font-semibold">Pressure:</span>
        <span>{main?.pressure} hPa</span>
      </div>
      <div className="text-3xl my-2 flex justify-between">
        <span className="font-semibold">Sunrise:</span>
        <span>{new Date(sys?.sunrise * 1000).toLocaleTimeString()}</span>
      </div>
      <div className="text-3xl my-2 flex justify-between">
        <span className="font-semibold">Sunset:</span>
        <span>{new Date(sys?.sunset * 1000).toLocaleTimeString()}</span>
      </div>
    </div>
  





    
    
    
    </>
)

}
export {
    Weather
}