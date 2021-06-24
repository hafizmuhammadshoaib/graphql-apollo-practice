import React, { useState } from "react";
import "./App.scss";
import { useQuery } from "@apollo/client";
import { GET_CITY_BY_NAME } from "./queries";
import { CityByName, CityByNameVars } from "./types";
import { Weather } from "./components/Weather";

function App() {
  const [cityInput, setCityInput] = useState("");
  const [cityName, setCityName] = useState("");
  const { loading, data } = useQuery<CityByName, CityByNameVars>(
    GET_CITY_BY_NAME,
    { variables: { name: cityName } }
  );
  const onFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCityName(cityInput);
  };
  return (
    <div className="App">
      <form onSubmit={onFormSubmit}>
        <input
          name="city"
          type="text"
          value={cityInput}
          onChange={(e) => setCityInput(e.target.value)}
        />
        <input
          className="btn btn-warning ml-2"
          type="submit"
          value="Get Weather"
        />
      </form>
      {loading && (
        <div className="container">
          <div className="spinner-grow text-warning" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      )}
      {data?.getCityByName && <Weather {...data?.getCityByName} />}
    </div>
  );
}

export default App;
