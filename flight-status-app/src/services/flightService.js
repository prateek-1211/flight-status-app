// src/services/flightService.js
import axios from 'axios';

const API_KEY = 'https://aviation-edge.com/v2/public/timetable?key=[API_KEY]&iataCode=JFK&type=departure';
const BASE_URL = 'https://aviation-edge.com/v2/public/';

export const getFlightStatus = async (flightNumber) => {
  try {
    const response = await axios.get(`${BASE_URL}flights`, {
      params: {
        access_key: API_KEY,
        flight_iata: flightNumber,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching flight status:', error);
    throw error;
  }
};
