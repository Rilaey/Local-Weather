import React, { useEffect, useState } from "react";
import '../index.css'

const WeatherCard = ({
  iconCode,
  lowTemp,
  highTemp,
  currentTemp,
  windSpeed,
  humidity,
  description,
  cityName
}) => {
  const [iconUrl, setIconUrl] = useState("");

  useEffect(() => {
    const getIconUrl = async () => {
      try {
        const response = await fetch(
          `https://openweathermap.org/img/wn/${iconCode}.png`
        );
        if (response.ok) {
          const blob = await response.blob();
          const url = URL.createObjectURL(blob);
          setIconUrl(url);
        } else {
          // Handle error if icon retrieval fails
          console.log("Failed to fetch weather icon.");
        }
      } catch (error) {
        console.log(error);
      }
    };

    getIconUrl();
  }, [iconCode]);

  return (
    <div className="flex items-center my-10">
      <div>{iconUrl && <img src={iconUrl} className="icon-img" alt="Weather Icon" />}</div>

      <div>
        <div>
          <div>City: {cityName}</div>
          <div>Current: {currentTemp} °F</div>
        </div>
        <div>
          <div>Low: {lowTemp} °F</div>
          <div>High: {highTemp} °F</div>
        </div>
        <div>
          <div>Wind Speed: {windSpeed} MPH</div>
          <div>Humidity: {humidity} %</div>
          <div>Description: {description}.</div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
