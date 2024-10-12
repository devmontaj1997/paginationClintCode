import axios from "axios";

const API = axios.create({
  baseURL: "https://paginationbackend.onrender.com",
  timeout: 20000,
  withCredentials: true,
});

export default API;
