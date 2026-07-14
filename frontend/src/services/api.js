import axios from "axios";

const api = axios.create({
  // baseURL: "http://localhost:5000/api",
  baseURL: "https://heart-disease-prediction-li1t.onrender.com/api",

  headers: {
    "Content-Type": "application/json",
  },
});

export default api;