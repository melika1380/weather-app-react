import React, { useState } from "react";
import styles from "./Header.module.css";

const Header = ({checkWeather,setInputValue,inputValue}) => {

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    console.log(inputValue);
  };

  return (
    <div>
      <div className={styles.header}>
        <input
          onChange={handleInputChange}
          value={inputValue}
          className={styles.input}
          list="cityOption"
          placeholder="Enter a city name"
        />
        <datalist id="cityOption">
          <option className={styles.citySelect}></option>
        </datalist>
        <button onClick={() => {
          checkWeather(setInputValue);
        }}>search</button>
      </div> 
      <div className={styles.demo}></div>
    </div>
  );
};

export default Header;
