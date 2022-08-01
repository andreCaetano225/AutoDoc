import axios from "axios";

export const api = (lat: number, lon: number) =>
  axios.create({
    baseURL: `https://fcc-weather-api.glitch.me/api/current?lat=${lat}&lon=${lon}`,
  });
