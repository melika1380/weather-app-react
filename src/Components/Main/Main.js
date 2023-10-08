import styles from "./Main.module.css";

const Main = (props) => {
  return (
    <div className={styles.main}>
      <div className={styles.information}>
        <div className={styles.city}>{props.city}</div>
        <ul>
          <li className={styles.mainWeather && styles.bold}>{props.mainWeather}</li>
          <li className={styles.description && styles.bold}>{props.description}</li>
        </ul>
        <div className={styles.icon}>
          <img className={styles.iconWeather} src={props.iconWeather} />
        </div>
        <div className={styles.temperature}>{props.temperature}</div>
      </div>
    </div>
  );
};

export default Main;
