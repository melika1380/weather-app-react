import React from "react";
import styles from "./Footer.module.css";


const Footer = ({data}) => {
  return (
    <div className={styles.footer}>
      <ul className={styles.minList}>
        <li>min</li>
        <li className={styles.minTemp}>{data.mainTempMin}</li>
      </ul>
      <div className={styles.vertical}></div>
      <ul className={styles.maxList}>
        <li>max</li>
        <li className={styles.maxTemp}>{data.mainTempMax}</li>
      </ul>
    </div>
  );
};

export default Footer;
