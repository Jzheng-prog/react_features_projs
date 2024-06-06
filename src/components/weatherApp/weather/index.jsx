import React, { useEffect, useState } from 'react'
import Search from '../search'

const Weather = () => {
    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState(false)
    const [weatherData, setWeatherData] = useState(null)

    function handleSearch(){
        fetchWeatherData(search)
    }
    async function fetchWeatherData(param){
        setLoading(true)
        try{
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${param}&APPID=${import.meta.env.VITE_WEATHER_API_KEY}`)
            const data = await response.json()
    
            if(data){
                setWeatherData(data)
                setLoading(false)
            }
        }catch(e){

            console.log(e)
            setLoading(true)
        }

    }
    function getCurrentDate(){
        return new Date().toLocaleDateString('en-us',{
            weekday:'long',
            month:'long',
            day: 'numeric',
            year:'numeric'
        })
    }
    useEffect(()=>{
        fetchWeatherData('london')
    },[])
    console.log(import.meta.env.VITE_WEATHER_API_KEY)

    function getFahrenHeit(kelvin){
        const cel = kelvin - 273;
        let fah = cel * (9/5) + 32;
        return Math.floor(fah)
    }
  return (
    <div className='weather-Container'>
        <div className='weather-App'>
        <h1>Weather</h1>
        <Search search={search} setSearch={setSearch} handleSearch={handleSearch}/>

        {
            loading ? <div> Loading</div> :
            <div>
                <div className='city-name'>
                    <h2>Location: {weatherData?.name}, <span>{weatherData?.sys?.country}</span></h2>
                </div>

                <div className='date'>
                    <h3>{getCurrentDate()}</h3>
                </div>
                <div>
                    <p>Temp: {getFahrenHeit(weatherData?.main?.temp)}°</p>
                    <p>Humidity:{weatherData?.main?.humidity}%</p>
                    <p>Visibility: {weatherData?.weather[0]?.description}</p>
                    <p>Wind/Speed: {weatherData?.wind.speed}</p>
                </div>
            </div>
        }
    </div>

    </div>
    
  )
}

export default Weather
