import axios from 'axios';

const API_KEY = 'Your open weather api key here';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city_name) {
    const url = `${ROOT_URL}&q=${city_name},es`;
    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    }
}