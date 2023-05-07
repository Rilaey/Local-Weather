import { useState } from "react";

function App() {
  const [search, setSearch] = useState("Orlando");

  const apiKey = import.meta.env.VITE_API_KEY;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${apiKey}`
    );

    const data = await response.json();

    console.log(data)
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
          />
        </div>
        <div>
          <button className="btn btn-outline">Search</button>
        </div>
      </form>
    </div>
  );
}

export default App;
