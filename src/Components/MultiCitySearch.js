import React, { useState } from "react";
import "./TravelSearch.css";

const MultiCitySearch = () => {
  const [flightDetails, setFlightDetails] = useState([
    { startLocation: "", endLocation: "", startDate: "" },
    { startLocation: "", endLocation: "", startDate: "" },
    { startLocation: "", endLocation: "", startDate: "" },
  ]);
  const [numPeople, setNumPeople] = useState(1);

  const handleFlightDetailsChange = (index, field, value) => {
    const updatedFlightDetails = [...flightDetails];
    updatedFlightDetails[index][field] = value;
    setFlightDetails(updatedFlightDetails);
  };

  const handleAddFlight = () => {
    setFlightDetails([
      ...flightDetails,
      { startLocation: "", endLocation: "", startDate: "" },
    ]);
  };

  const handleRemoveFlight = (index) => {
    const updatedFlightDetails = [...flightDetails];
    updatedFlightDetails.splice(index, 1);
    setFlightDetails(updatedFlightDetails);
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

    console.log("Flight Details:");
  flightDetails.forEach((flight, index) => {
    console.log(`Flight ${index + 1}:`);
    console.log(`Start Location: ${flight.startLocation}`);
    console.log(`End Location: ${flight.endLocation}`);
    console.log(`Departure Date: ${flight.startDate}`);
  });
  console.log(`Number of People: ${numPeople}`);
    
  };

  return (
    <div className="travel-search-container">
      <div className="multi-city-search-container">
      <span className="travel-search-toggle-label">Multi City Trip </span>
        {flightDetails.map((flight, index) => (
          <div key={index} className="multi-city-search-input-container">
            <div className="multi-city-search-index">{index + 1}</div>
            {index > 0 && (
              <div className="multi-city-search-remove">
                <button onClick={() => handleRemoveFlight(index)}>X</button>
              </div>
            )}
            <div className="multi-city-search-inputs">

              <label className="travel-search-label">From</label>
              
              <input
                type="text"
                value={flight.startLocation}
                onChange={(e) =>
                  handleFlightDetailsChange(index, "startLocation", e.target.value)
                }
                placeholder="Enter start location"
              />
              <label className="travel-search-label">To</label>
              <input
                type="text"
                value={flight.endLocation}
                onChange={(e) =>
                  handleFlightDetailsChange(index, "endLocation", e.target.value)
                }
                placeholder="Enter end location"
              />
              <label className="travel-search-label">Departure Date</label>
              <input
                type="date"
                value={flight.startDate}
                onChange={(e) =>
                  handleFlightDetailsChange(index, "startDate", e.target.value)
                }
                placeholder="Enter departure date"
              />
            
            </div>

          </div>
        ))}
        <div className="multi-city-search-add">
          <button onClick={handleAddFlight}>+ Add Flight</button>
        </div>
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

export default MultiCitySearch;

