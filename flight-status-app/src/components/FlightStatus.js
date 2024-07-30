// FlightStatus.js
import React, { useState } from 'react';
import './styles/FlightStatus.css';
import flightService from '../services/flightService';

function FlightStatus() {
  const [flightNumber, setFlightNumber] = useState('');
  const [flightInfo, setFlightInfo] = useState(null);
  const [error, setError] = useState('');

  const handleSearch = () => {
    // Mock fetching flight info based on flight number
    // In a real application, you would fetch this data from an API
    if (flightNumber === 'AI101') {
      setFlightInfo({
        flightNumber: 'AI101',
        status: 'On Time',
        departureTime: '2024-07-30T10:30:00Z',
        arrivalTime: '2024-07-30T12:45:00Z',
        gate: 'A12'
      });
      setError('');
    } else if (flightNumber === 'BA202') {
      setFlightInfo({
        flightNumber: 'BA202',
        status: 'Delayed',
        departureTime: '2024-07-30T14:00:00Z',
        arrivalTime: '2024-07-30T16:30:00Z',
        gate: 'B34'
      });
      setError('');
    } else {
      setFlightInfo(null);
      setError('Flight not found');
    }
  };

  return (
    <div className="flight-status-container">
    <br/>
    <br/>
    <br/>
    <br/>
    
      <h1>Flight Status</h1>
      <input
        type="text"
        value={flightNumber}
        onChange={(e) => setFlightNumber(e.target.value)}
        placeholder="Enter flight number"
      />
      <button onClick={handleSearch}>Search</button>
      {error && <p className="error">{error}</p>}
      {flightInfo && (
        <div className="flight-info">
          <h2>Flight {flightInfo.flightNumber}</h2>
          <p>Status: <span className={flightInfo.status.toLowerCase()}>{flightInfo.status}</span></p>
          <p>Departure: {new Date(flightInfo.departureTime).toLocaleString()}</p>
          <p>Arrival: {new Date(flightInfo.arrivalTime).toLocaleString()}</p>
          <p>Gate: {flightInfo.gate}</p>
        </div>
      )}
    </div>
  );
}

export default FlightStatus;
