import SearchBox from "./SearchBox";
import InfoBox from "../InfoBox";
import { useState } from "react";

export default function WeatherApp() {
    let [weatherInfo, setWeatherInfo] = useState({
        city: "Mysore",
        feelsLike: "34.5",
        humidity: 33,
        temp: "34.14",
        tempMax: "34.14",
        tempMin: "34.14",
        weather: "Clouds",
        weatherIcon: "04d",
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }
  return (
    <div>
      <SearchBox updateInfo = {updateInfo}/>
      <InfoBox info = {weatherInfo}/>
    </div>
  );
}