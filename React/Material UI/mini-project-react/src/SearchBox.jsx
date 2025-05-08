import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

export default function SearchBox({updateInfo}) {
    let [city, setCity] = useState('');
    let [error, setError] = useState(false);

    let API_URL = "https://api.openweathermap.org/data/2.5/weather";
    let API_KEY = "0249814b5e945e4cf8a082d070b80cc4";

    let getWeatherData = async() => {
        try {
            let reponse = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let responseData = await reponse.json();
            let result = {
                city : responseData.name,
                feelsLike : responseData.main.feels_like,
                humidity : responseData.main.humidity,
                temp : responseData.main.temp,
                tempMax : responseData.main.temp_max,
                tempMin : responseData.main.temp_min,
                weather : responseData.weather[0].main,
                weatherIcon : responseData.weather[0].icon
            }
            return result;
        } catch(err) {
            throw err;
        }
    }

    let handleChange = (event) => {
        setCity(event.target.value);
    };

    let handleSubmit = async (event) => {
        try {
            event.preventDefault()
            setCity("")
            let data = await getWeatherData()
            // console.log(data)
            updateInfo(data);
        } catch(err) {
            setError(true)
        }
    }
    return (
        <div>
            <h1>Search for Weather Data</h1>
            <form onSubmit={handleSubmit}>
                <TextField id="city" label="City Name" variant="outlined" onChange={handleChange} value={city} required />
                <br /><br />
                <Button variant="contained" type="submit">Search</Button>
            </form>
            {error && <p style={{color:'red'}}>City not found</p>}
        </div>
    )
}