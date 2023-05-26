import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate"; //For the search bar
import { GEO_API_URL, geoApiOptions } from "../api";

const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState(null);

  //To fetch the names of cities for auto completion
  async function loadOptions(inputValue) {
    return fetch(
      `${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`,
      geoApiOptions
    )
      .then((response) => response.json())
      .then((response) => {
        return {
          options: response.data.map((city) => {
            return {
              value: `${city.latitude} ${city.longitude}`,
              label: `${city.name}, ${city.countryCode}`,
            };
          }),
        };
      });
  }

  const handleOnChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };

  return (
    <>
      <div className=" landing row">
        <div className="Hero-heading col-lg-6 ">
          <h3 className="brand-name">STROMY</h3>
          <h1 className="brand-statement">We Know the future</h1>
          <p className="brand-sub-statement">
            Stormy: Discover the Rhythms and Wonders of the Weather World
          </p>

          <AsyncPaginate
            className="SearchBar"
            placeholder="Search for city"
            debounceTimeout={500} //To wait for the fetch request for few seconds
            value={search}
            onChange={handleOnChange} //To update the value for changing search
            loadOptions={loadOptions} //To autocomplete the input values
          />
        </div>

        <div className=" hero-div col-lg-6">
          <img className="hero-image" src="hero.png" alt="Hero Image" />
        </div>
      </div>
    </>
  );
};

export default Search;
