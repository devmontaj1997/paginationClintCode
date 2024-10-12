import axios from "axios";

const API = axios.create({
  baseURL:
    "https://pagination-backend.vercel.app/?vercelToolbarCode=YqKJWizhSSz-Itw",
  timeout: 20000,
  withCredentials: true,
});

export default API;
