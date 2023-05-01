import React, { useState } from "react";
import "./TravelSearch.css";

const RoundTripSearch = () => {
  const [startLocation, setStartLocation] = useState("");
  const [endLocation, setEndLocation] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [numPeople, setNumPeople] = useState(1);

  const handleStartLocationChange = (e) => {
    setStartLocation(e.target.value);
  };

  const handleEndLocationChange = (e) => {
    setEndLocation(e.target.value);
  };

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
    // If end date is set and before new start date, reset end date
    if (endDate && endDate < e.target.value) {
      setEndDate("");
    }
  };

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
    // If start date is set and after new end date, reset start date
    if (startDate && startDate > e.target.value) {
      setStartDate("");
    }
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
    // Implement search logic here
  };

  const isEndDateValid = !startDate || !endDate || endDate >= startDate;

  return (
    <div className="travel-search-container">
      <div className="travel-search-toggle-container">
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
      <div className="travel-search-input-container">
        <label className="travel-search-label">End Date</label>
        <input
          type="date"
          value={endDate}
          onChange={handleEndDateChange}
          placeholder="Enter end date"
          disabled={!startDate}
          min={startDate}
        />
        {!isEndDateValid && (
          <div className="travel-search-error-message">
            End date must be on or after start date
          </div>
        )}
      </div>

      <div className="travel-search-num-people">
        <label className="travel-search-label">Number of People</label>
        <input type="number" value={numPeople} onChange={handleNumPeopleChange} />
      </div>
      <button className="travel-search-button" onClick={handleSearch} disabled={!isEndDateValid}>
        Search
      </button>
    </div>
  );
};

export default RoundTripSearch;
