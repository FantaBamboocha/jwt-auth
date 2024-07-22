import axios from "axios";

export const BASE_URL = "https://localhost:5000/jwt-auth";

const axiosIstance = axios.create({
  withCredentials: true,
  baseURL: BASE_URL,
});

axiosIstance.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;

  return config;
});

axiosIstance.interceptors.response.use(
  (config) => config,
  async (error) => {
    const originalRequest = error.config;

    if (
      error.response.status == 401 &&
      error.config &&
      !error.config._isRetry
    ) {
      originalRequest._isRetry = true;
      try {
        const response = await axios.get(`${BASE_URL}/refresh`, {
          withCredentials: true,
        });

        localStorage.setItem("token", response.data.accessToken);
        axiosIstance.request(originalRequest);
      } catch (error) {
        return Promise.reject(error);
      }
    }

    throw error;
  }
);

export default axiosIstance;
