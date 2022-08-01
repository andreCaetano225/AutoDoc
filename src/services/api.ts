import axios from "axios";

export const api = axios.create({
  baseURL:
    "https://fcc-weather-api.glitch.me/api/current?lat=-3.71839&lon=-38.5434",
});
