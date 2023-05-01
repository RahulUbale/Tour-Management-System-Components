import React, { useState } from "react";
import "./TravelSearch.css";

const TravelSearch = () => {
  const [isRoundTrip, setIsRoundTrip] = useState(false);
  const [startLocation, setStartLocation] = useState("");
  const [endLocation, setEndLocation] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleToggle = () => {
    setIsRoundTrip(!isRoundTrip);
  };

  const handleStartLocationChange = (e) => {
    setStartLocation(e.target.value);
  };

  const handleEndLocationChange = (e) => {
    setEndLocation(e.target.value);
  };

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
  };

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
  };

  const handleSearch = () => {
    // Implement search logic here
  };

  return (
    <div className="travel-search-container">
      <div className="travel-search-toggle-container">
        <span className="travel-search-toggle-label">One Way</span>
        <label className="travel-search-toggle-switch">
          <input
            type="checkbox"
            checked={isRoundTrip}
            onChange={handleToggle}
          />
          <span className="travel-search-toggle-slider"></span>
        </label>
        <span className="travel-search-toggle-label">Round Trip</span>
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
      {isRoundTrip && (
        <div className="travel-search-input-container">
          <label className="travel-search-label">End Date</label>
          <input
            type="date"
            value={endDate}
            onChange={handleEndDateChange}
            placeholder="Enter end date"
          />
        </div>
      )}
      <button className="travel-search-button" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default TravelSearch;



