import { useState } from "react";

function App() {
  const [search, setSearch] = useState("");

  const apiKey = "a7d21723ff40c0e628b4d0449cd0708b";

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${search}&appid=${apiKey}`
    );
  };

  return (
    <div className="section-layout">
      <div className="header-div">
        <h1 className="header-text">Local Weather</h1>
      </div>
      <form className="search-area-layout">
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
