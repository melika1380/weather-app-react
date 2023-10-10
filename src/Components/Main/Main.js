import styles from "./Main.module.css";

const Main = ({data}) => {
 
  return (
    <div className={styles.main}>
      <div className={styles.information}>
        <div className={styles.city}>{data.name}</div>
        <ul>
          <li className={styles.mainWeather && styles.bold}>{data.mainWeather}</li>
          <li className={styles.description && styles.bold}>{data.weatherDes}</li>
        </ul>
        <div className={styles.icon}>
          <img className={styles.iconWeather} src={data.icon} alt="icon"/>
        </div>
        <div className={styles.temperature}>{data.mainTemp}</div>
      </div>
    </div>
  );
};

export default Main;
