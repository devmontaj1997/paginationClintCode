import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api/v1/car_list",
  timeout: 20000,
  withCredentials: true,
});

export default API;
