import React, { useState, createContext, useEffect } from "react";
import WeatherModel from "../Model/weatherModel";

export const WeatherContext = createContext();

export const WeatherViewModel = (props) => {
    const [weatherItems, setWeatherItems] = useState([]);

    useEffect(() => {
        const cityNames = ["san jose", "san francisco", "sacramento"];
        const loadModel = async () => {
            let items = [];
            for (const cityName of cityNames) {
                let item = await WeatherModel.getTemperature(cityName);
                items = [{ name: cityName, temp: item.consolidated_weather[0].the_temp, icon: item.consolidated_weather[0].weather_state_abbr}, ...items];
            }
            setWeatherItems(items);
        }
        loadModel();
    }, []);

    return (
        <WeatherContext.Provider value={weatherItems}>
            {props.children}
        </WeatherContext.Provider>
    );
}