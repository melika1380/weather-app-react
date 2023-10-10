import React, { useState, useEffect } from "react";

import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";

import { getIconWeather } from "./Components/GetIcon/GetIcon";

const App = () => {
  const apiKey = "886705b4c1182eb1c69f28eb8c520e20";
  const apiUrl =
    "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

  const [data, setData] = useState({
    name: "",
    mainTemp: "",
    mainTempMax: "",
    mainTempMin: "",
    weatherMain: "",
    weatherDes: "",
    icon: "",
    mainWeather: "",
  });

  const [error, setError] = useState("");
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    checkWeather("tehran");
  }, []);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const checkWeather = async (city) => {
    try {
      const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
      const data = await response.json();

      setData({
        name: data.name,
        mainTemp: data.main.temp + "°",
        mainTempMax: data.main.temp_max + "°",
        mainTempMin: data.main.temp_min + "°",
        weatherMain: data.weather[0].main,
        weatherDes: data.weather[0].description,
        icon: getIconWeather(data.weather[0].main),
        mainWeather: data.weather[0].main,
      });
      setError("");
    } catch (err) {
      setError("The entered city name is invalid");
    }
  };

  return (
    <div>
      <Header
        inputValue={inputValue}
        setInputValue={setInputValue}
        checkWeather={checkWeather}
        handleInputChange={handleInputChange}
        error={error}
      />
      <Main data={data} />
      <Footer data={data} />
    </div>
  );
};

export default App;
