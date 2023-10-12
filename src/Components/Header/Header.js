import React, { useState } from "react";
import styles from "./Header.module.css";
import useMyHook from "../myHook/useMyHook";

const Header = ({
  setInputValue,
  inputValue,
  handleInputChange,
}) => {
  const { data, error } = useMyHook(inputValue);

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      setInputValue("");
    }
  };

  return (
    <div>
      <div className={styles.header}>
        <input
          onChange={handleInputChange}
          value={inputValue}
          className={styles.input}
          onKeyPress={handleKeyPress}
          list="cityOption"
          placeholder="Enter a city name"
        />
        <datalist id="cityOption">
          <option className={styles.citySelect}></option>
        </datalist>
        <button
          onClick={() => {
            setInputValue("");
          }}
        >
          search
        </button>
      </div>
      <div className={styles.error}>{error}</div>
    </div>
  );
};

export default Header;
