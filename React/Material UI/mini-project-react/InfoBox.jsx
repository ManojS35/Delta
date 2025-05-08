import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import CloudIcon from '@mui/icons-material/Cloud';


export default function InfoBox({ info }) {
  // const getWeatherIcon = () => {
  //   return `https://openweathermap.org/img/wn/${info.weatherIcon}@2x.png`;
  // };

  
  let getWeatherImage = () => {
    if(info.humidity >= 90) {
      return "./rain.avif";
    } else if(info.temp >= 20) {
      return "./hot.avif";
    } else if(info.temp <= 10) {
      return "./cold.avif";
    } else {
      return "./cloud.avif";
    }
  }
  let getWeatherIcon = () => {
    if(info.humidity >= 90) {
      return <ThunderstormIcon/>;
    } else if(info.temp >= 25) {
      return <SunnyIcon/>;
    } else if(info.temp >= 10) {
      return <CloudIcon/>;
    } else {
      return <AcUnitIcon/>;
    }
  }
  
  return (
    <div className="weatherInfo">
      <h1>Weather Info</h1>
      <div className="InfoBox">
        <Card sx={{ maxWidth: 345}}>
          <CardMedia
            component="img"
            height="200"
            image={getWeatherImage()}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city} {getWeatherIcon()}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              Temperature: {info.temp}°C
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              Humidity: {info.humidity}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              Max - Temp: {info.tempMax}°C
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              Min - Temp: {info.tempMin}°C
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              The Weather can be described as {info.weather} and feels like{" "}
              {info.feelsLike}°C
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
