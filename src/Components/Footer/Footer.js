import React from "react";
import styles from "./Footer.module.css";


const Footer = (props) => {
  return (
    <div className={styles.footer}>
      <ul className={styles.minList}>
        <li>min</li>
        <li className={styles.minTemp}>{props.minTemperature}</li>
      </ul>
      <div className={styles.vertical}></div>
      <ul className={styles.maxList}>
        <li>max</li>
        <li className={styles.maxTemp}>{props.maxTemperature}</li>
      </ul>
    </div>
  );
};

export default Footer;
