import React, { useState, useEffect } from 'react'
import axios from "axios"
const Weather = () => {
    const [location, setLocation] = useState({
        load: false,
        coordinates: {
            lat: "",
            lng: ""
        },
    });
    const [weatherData, setWeatherData] = useState(null);
    const onSuccess = location => {
        setLocation({
            load: true,
            coordinates: {
                lat: location.coords.latitude,
                lng: location.coords.longitude
            },
        })
    }
    const onError = error => {
        setLocation({
            load: true,
            coordinates: {
                lat: 19.228825,
                lng: 72.854118
            },
        })
    }
    useEffect(() => {
        if (!("geolocation" in navigator)) {
            setLocation((state) => ({
                ...state,
                load: true,
                coordinates: {
                    lat: 19.228825,
                    lng: 72.854118
                },
            }))
        }
        navigator.geolocation.getCurrentPosition(onSuccess, onError)

    }, [])
    useEffect(() => {
        (async () => {
            const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${location.coordinates.lat}&lon=${location.coordinates.lng}&appid=${process.env.REACT_APP_WEATHER_KEY}`)
            setWeatherData(data)
        })()
    }, [location.coordinates.lat, location.coordinates.lng])
    return (
        <>
            {weatherData &&
                <div className='flex justify-end text-center top-0 left-0 right-0'>
                    <div className='p-2'>
                        <div className='flex items-center'>
                            <img src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`} alt={weatherData.weather[0].main} />
                            {parseInt(weatherData.main.temp - 273.15)} °C</div>
                        <div>{weatherData.name}</div>
                    </div>
                </div>
            }
        </>
    )
}

export { Weather }