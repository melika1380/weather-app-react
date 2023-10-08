import React, { useState } from "react";
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

  const [city, setCity] = useState("tehran");
  const [mainWeather, setMainWeather] = useState("clouds");
  const [description, setDescription] = useState("few clouds");
  const [iconWeather, setIconWeather] = useState(icon);
  const [temperature, setTemperature] = useState("20.67");
  const [minTemperature, setMinTemperature] = useState("17.07");
  const [maxTemperature, setMaxTemperature] = useState("25.67");
  const [inputValue, setInputValue] = useState("");

  const checkWeather = async (city) => {
    try {
      const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
      const data = await response.json();
      console.log(data);
      setCity(data.name);
      setTemperature(data.main.temp);
      setMaxTemperature(data.main.temp_max);
      setMinTemperature(data.main.temp_min);
      setMainWeather(data.weather[0].main);
      setDescription(data.weather[0].description);
      //props.setDemo("");
      getIconWeather();
    } catch (err) {
      //props.setDemo("The entered city name is invalid");
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
      <Header inputValue={inputValue} setInputValue={setInputValue} checkWeather={checkWeather} />
      <Main
        city={city}
        mainWeather={mainWeather}
        description={description}
        iconWeather={iconWeather}
        temperature={temperature}
      />
      <Footer minTemperature={minTemperature} maxTemperature={maxTemperature} />
    </div>
  );
};

export default App;
