import "./CurrentWeather.css";

function CurrentWeather({ data }) {
  return (
    <>
      <div className=" row Weather">
        <div className="col-lg-6">
          <div className=" row left">
            <div className="col-lg-6 left-info">
              <p className="city">{data.city}</p>
              <p className="weather-description">
                {data.weather[0].description}
              </p>
              <p className="temperatue">{Math.round(data.main.temp)}°C</p>
            </div>

            <div className="col-lg-6 left-image">
              <img
                src={`icons/${data.weather[0].icon}.png`}
                alt="weather"
                className="weather-icon"
              />
            </div>
          </div>
        </div>

        <div className="col-lg-6">
          <div className=" right">
            <div className="details">
              <h1 className="parameter-heading">DETAILS</h1>

              <div className="parameter-row">
                <span className="parameter-label">Feels Like</span>
                <span className="parameter-value">
                  {Math.round(data.main.feels_like)}°C
                </span>
              </div>

              <div className="parameter-row">
                <span className="parameter-label">Wind</span>
                <span className="parameter-value  wind">
                  {data.wind.speed} m/s
                </span>
              </div>

              <div className="parameter-row">
                <span className="parameter-label">Humidity</span>
                <span className="parameter-value">{data.main.humidity}%</span>
              </div>

              <div className="parameter-row">
                <span className="parameter-label">Pressure</span>
                <span className="parameter-value pressure">
                  {data.main.pressure} hPa
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CurrentWeather;
