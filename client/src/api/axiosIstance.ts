import axios from "axios";

export const BASE_URL = "https://localhost:5000/jwt-auth";

const axiosIstance = axios.create({
  withCredentials: true,
  baseURL: BASE_URL,
  headers: {
    lol: document.cookie,
  },
});

axiosIstance.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;

  return config;
});

export default axiosIstance;
