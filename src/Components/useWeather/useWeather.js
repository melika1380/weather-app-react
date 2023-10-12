import { useState, useEffect } from "react";
import { getIconWeather } from "../GetIcon/GetIcon";

const useWeather = (apiKey, apiUrl) => {
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

  return {
    data,
    error,
    inputValue,
    setInputValue,
    handleInputChange,
    checkWeather,
  };
};

export default useWeather;
