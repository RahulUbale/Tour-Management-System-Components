import React, { useState } from "react";

import "./TravelSearch.css";

const OneWaySearch = () => {
  const [startLocation, setStartLocation] = useState("");
  const [endLocation, setEndLocation] = useState("");
  const [startDate, setStartDate] = useState("");
  const [numPeople, setNumPeople] = useState(1);

  const handleStartLocationChange = (e) => {
    setStartLocation(e.target.value);
  };

  const handleEndLocationChange = (e) => {
    setEndLocation(e.target.value);
  };

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
  };

  const handleNumPeopleChange = (e) => {
    const value = parseInt(e.target.value);
    if (value > 0) {
      setNumPeople(value);
    } else {
      setNumPeople(1);
    }
  };
  const handleSearch = () => {
      console.log("I am inside handle");
      console.log("Start Location:", startLocation);
      console.log("End Location:", endLocation);
      console.log("Start Date:", startDate);
      console.log("Number of People:", numPeople);
      
    // Implement search logic here
    
  };

  return (
    <div className="travel-search-container">
      <div className="travel-search-toggle-container">
        <span className="travel-search-toggle-label">One Way</span>
      </div>
      <div className="travel-search-input-container">
        <label className="travel-search-label">Start Location</label>
        <input
          type="text"
          value={startLocation}
          onChange={handleStartLocationChange}
          placeholder="Enter start location"
        />
      </div>
      <div className="travel-search-input-container">
        <label className="travel-search-label">End Location</label>
        <input
          type="text"
          value={endLocation}
          onChange={handleEndLocationChange}
          placeholder="Enter end location"
        />
      </div>
      <div className="travel-search-input-container">
        <label className="travel-search-label">Start Date</label>
        <input
          type="date"
          value={startDate}
          onChange={handleStartDateChange}
          placeholder="Enter start date"
        />
      </div>
      <div className="travel-search-num-people">
        <label className="travel-search-label">Number of People</label>
        <input type="number" value={numPeople} onChange={handleNumPeopleChange} />
      </div>
      <button className="travel-search-button" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default OneWaySearch;
