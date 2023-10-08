import React, { useState , useEffect } from "react";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import icon from "./icon/few-clouds.png";
import cloudy from "./icon/few-clouds.png";
import clear from "./icon/clear.png";
import rainy from "./icon/rainy.png";
import windy from "./icon/mist.png";
import snow from "./icon/snow.png";
import thunderstorm from "./icon/thunderstorm.png";

const App = () => {
  const apiKey = "886705b4c1182eb1c69f28eb8c520e20";
  const apiUrl =
    "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

  const [cityInput, setInputCity] = useState("");
  const [mainWeather, setMainWeather] = useState("");
  const [description, setDescription] = useState("");
  const [temperature, setTemperature] = useState("");
  const [minTemperature, setMinTemperature] = useState("");
  const [maxTemperature, setMaxTemperature] = useState("");
  const [inputValue, setInputValue] = useState("");

  useEffect(()=>{
    checkWeather("tehran");
},[])
  
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const checkWeather = async (city) => {
    try {
      const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
      const data = await response.json();
      console.log(data);
      setInputCity(data.name);
      setTemperature(data.main.temp);
      setMaxTemperature(data.main.temp_max);
      setMinTemperature(data.main.temp_min);
      setMainWeather(data.weather[0].main);
      setDescription(data.weather[0].description);

      //props.setDemo("");
      getIconWeather();
    } catch (err) {
      console.error(err);
    }
  };
  const getIconWeather = (mainWeather) => {
    switch (mainWeather) {
      case "Clear":
        return clear;
      case "Clouds":
        return cloudy;
      case "Drizzle":
        return rainy;
      case "Mist":
      case "Smoke":
      case "Haze":
      case "Dust":
      case "Fog":
      case "Sand":
      case "Ash":
      case "Squall":
      case "Tornado":
        return windy;
      case "Snow":
        return snow;
      case "Thunderstorm":
        return thunderstorm;
      case "Rain":
        return rainy;
      default:
        return clear;
    }
  };

  return (
    <div>
      <Header
        inputValue={inputValue}
        setInputValue={setInputValue}
        checkWeather={checkWeather}
        handleInputChange={handleInputChange}
      />
      <Main
        cityInput={cityInput}
        mainWeather={mainWeather}
        description={description}
        temperature={temperature}
      />
      <Footer minTemperature={minTemperature} maxTemperature={maxTemperature} />
    </div>
  );
};

export default App;
