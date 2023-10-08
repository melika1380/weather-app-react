import React from "react";
import styles from "./Footer.module.css";


const Footer = (props) => {
  return (
    <div className={styles.footer}>
      <ul className={styles.minList}>
        <li>{props.minTemperature}</li>
        <li className={styles.minTemp}></li>
      </ul>
      <div className={styles.vertical}></div>
      <ul className={styles.maxList}>
        <li>{props.maxTemperature}</li>
        <li className={styles.maxTemp}></li>
      </ul>
    </div>
  );
};

export default Footer;
