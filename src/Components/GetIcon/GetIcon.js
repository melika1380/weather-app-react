import cloudy from "../../icon/few-clouds.png";
import clear from "../../icon/clear.png";
import rainy from "../../icon/rainy.png";
import windy from "../../icon/mist.png";
import snow from "../../icon/snow.png";
import thunderstorm from "../../icon/thunderstorm.png";

export const getIconWeather = (mainTemp) => {
    switch (mainTemp) {
      case "Clear":
        return clear;
      case "Clouds":
        return cloudy;
      case "Drizzle":
        return rainy;
      case "Mist":
      case "Smoke":
      case "Haze":
      case "Dust":
      case "Fog":
      case "Sand":
      case "Ash":
      case "Squall":
      case "Tornado":
        return windy;
      case "Snow":
        return snow;
      case "Thunderstorm":
        return thunderstorm;
      case "Rain":
        return rainy;
      default:
        return cloudy;
    }
  };
  