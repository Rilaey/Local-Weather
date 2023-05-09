import { useState } from "react";
import WeatherCard from "./components/WeatherCard";

function App() {
  const [search, setSearch] = useState("");
  const [weatherData, setWeatherData] = useState(null); // Added state variable

  const apiKey = "a7d21723ff40c0e628b4d0449cd0708b";

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${apiKey}&units=imperial`
    );

    const data = await response.json();

    setSearch("");
    setWeatherData(data); // Store data in state variable

    console.log(data);
  };

  return (
    <div className="section-layout">
      <div className="header-div">
        <h1 className="header-text">Local Weather</h1>
      </div>
      <form className="search-area-layout" onSubmit={handleSubmit}>
        <div className="mx-3">
          <input
            type="text"
            placeholder="Enter a city..."
            className="input input-bordered w-full max-w-xs search-input"
            value={search} // Bind input value to state variable
            onChange={(e) => setSearch(e.target.value)} // Update search state on input change
          />
        </div>
        <div>
          <button className="btn btn-outline">Search</button>
        </div>
      </form>
      <div>
        {weatherData && ( // Render WeatherCard component if weatherData is available
          <WeatherCard
          iconCode={weatherData.weather[0].icon}
          lowTemp={weatherData.main.temp_min}
          highTemp={weatherData.main.temp_max}
          currentTemp={weatherData.main.temp}
          windSpeed={weatherData.wind.speed}
          humidity={weatherData.main.humidity}
          description={weatherData.weather[0].description.toUpperCase()}
          cityName={weatherData.name}
          />
        )}
      </div>
    </div>
  );
}

export default App;
