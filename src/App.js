import React from "react";

import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";

import useWeather from "./Components/useWeather/useWeather";

const App = () => {
  const apiKey = "886705b4c1182eb1c69f28eb8c520e20";
  const apiUrl =
    "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

  const {
    data,
    error,
    inputValue,
    setInputValue,
    handleInputChange,
    checkWeather,
  } = useWeather(apiKey, apiUrl);

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
