// import "./App.css"
import "bootstrap/dist/css/bootstrap.css";
import Search from "./components/search";
import CurrentWeather from "./components/CurrentWeather/CurrentWeather";
import { WEATHER_API_KEY, WEATHER_API_URl } from "./api";
import { useState } from "react";

function App() {
  //updating the search for api
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleOnSearchChange = (searchData) => {
    //storing latitude and langitude
    const [lat, lon] = searchData.value.split(" ");

    //Current weather fetch
    const WeatherApiUrl =
      WEATHER_API_URl +
      "/weather?lat=" +
      lat +
      "&lon=" +
      lon +
      "&appid=" +
      WEATHER_API_KEY +
      "&units=metric";

    const currentWeatherFetch = fetch(WeatherApiUrl);

    Promise.all([currentWeatherFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();

        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, ...forcastResponse });
      })
      .catch(console.log);
  };

  console.log(currentWeather);

  return (
    <>
      <div className="box">
        <Search onSearchChange={handleOnSearchChange} />
      </div>

      {currentWeather && <CurrentWeather data={currentWeather} />}
    </>
  );
}

export default App;
