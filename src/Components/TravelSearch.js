import React, { useState } from "react";
import "./TravelSearch.css";
import OneWaySearch from "./OneWaySearch";
import RoundTripSearch from "./RoundTripSearch";
import MultiCitySearch from "./MultiCitySearch";

const TravelSearch = () => {
  const [selectedOption, setSelectedOption] = useState("oneway");
  

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  let searchComponent;
  switch (selectedOption) {
    case "oneway":
      searchComponent = <OneWaySearch />;
      break;
    case "roundtrip":
      searchComponent = <RoundTripSearch />;
      break;
    case "multicity":
      searchComponent = <MultiCitySearch />;
      break;
    default:
      searchComponent = <OneWaySearch />;
  }

  return (
    <div className="travel-search-container">
      <div className="travel-search-menu">
        <button
          className={`travel-search-menu-item ${
            selectedOption === "oneway" ? "active" : ""
          }`}
          onClick={() => handleOptionClick("oneway")}
        >
          One Way
        </button>
        <button
          className={`travel-search-menu-item ${
            selectedOption === "roundtrip" ? "active" : ""
          }`}
          onClick={() => handleOptionClick("roundtrip")}
        >
          Round Trip
        </button>
        <button
          className={`travel-search-menu-item ${
            selectedOption === "multicity" ? "active" : ""
          }`}
          onClick={() => handleOptionClick("multicity")}
        >
          Multi-City
        </button>
      </div>
      {searchComponent}
    </div>
  );
};

export default TravelSearch;



