import axios from "axios";

const API = axios.create({
  baseURL: "https://paginationbackend.onrender.com/api/v1/car_list",
  timeout: 20000,
  withCredentials: true,
});

export default API;
